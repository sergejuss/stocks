'use strict';

var axios = require('axios');

var stocks = [];
var chartData = [];

module.exports = {

  add: function(req, res) {
    if (stocks.some(function(e) {
      return e.symbol === req.params.code.toString().toUpperCase();
    })) {
      res.json({err: "Stock code has been already added."})
    } else {
      var parameters = {
        Normalized: false,
        NumberOfDays: 370,
        DataPeriod: "Day"    
      };
      parameters.Elements = stocks.map(function(stock) {
        return {
          Symbol: stock.symbol,
          Type: "price",
          Params: ["c"]
        }
      });
      parameters.Elements.push({
        Symbol: req.params.code.toString().toUpperCase(),
        Type: "price",
        Params: ["c"]
      });
      var urlL = "http://dev.markitondemand.com/Api/v2/Lookup/json?input=" + req.params.code.toString().toUpperCase();
      var urlIC = "http://dev.markitondemand.com/Api/v2/InteractiveChart/json?parameters=" +
      encodeURIComponent(JSON.stringify(parameters));    

      axios.get(urlL).then(function(ldata) {
        console.log("axios Lookup, status: ", ldata.statusText);
        if (ldata.data.some(function(e) {
          return e.Symbol === req.params.code.toString().toUpperCase();
        })) {
          axios.get(urlIC).then(function(pdata) {
            console.log("axios IC, status: ", pdata.statusText);
            var chartDataDP = pdata.data.Elements.map(function(stock) {
              var stockEl = Object.create(null);
              stockEl.symbol = stock.Symbol;
              for (var i=0; i<stocks.length; i++) {
                if (stock.Symbol === stocks[i]["symbol"]) {
                  stockEl.name = stocks[i]["name"];
                  break;
                }
              }
              for (var j=0; j<ldata.data.length; j++) {
                if (stock.Symbol === ldata["data"][j]["Symbol"]) {
                  stockEl.name = ldata["data"][j]["Name"];
                  if (stocks.every(function(e) {
                    return e.symbol !== stockEl.symbol;
                  })) {
                    stocks.push({symbol: stockEl.symbol, name: stockEl.name});
                  }                            
                  break;
                }
              }
              stockEl.data = pdata.data.Dates.map(function(d, i) {
                return [Date.parse(d), stock.DataSeries.close.values[i]];
              });
              return stockEl;
            }); 
            console.log("stocks:\n", stocks);
            var chartDataNoDup = [];
            chartDataDP.forEach(function(e) {
              if (chartDataNoDup.every(function(el) {
                return el.symbol !== e.symbol;
              })) {
                chartDataNoDup.push(e);
              } else {
                console.log("Dup noted:", e.symbol);
              }
            });
            chartData = chartDataNoDup;
            res.json(chartData);
          });
        } else {
          res.json({err: "Incorrect or not existing stock code"});
        }
      }).catch(function(err) {
        console.log("ajax error:\n", err);
        res.json({err: "Incorrect or not existing stock code"});
      });
    }
  },

  del: function(req, res) {
    stocks = stocks.filter(function(stock) {
      return stock.symbol !== req.params.code.toString().toUpperCase();
    });
    chartData = chartData.filter(function(stock) {
      return stock.symbol !== req.params.code.toString().toUpperCase();
    });
    res.json({result: "success"});
  },

  get_current: function(req, res) {    
    res.json(chartData);
  },

  lookup: function(req, res) {
    var url = "http://dev.markitondemand.com/Api/v2/Lookup/json?input=" + req.params.term;
    axios.get(url).then(function(data) {      
      if (data.data.length > 0) {
        res.json({res: data.data});
      } else {
        res.json({res: [{error: "No results found."}]});
      }
    }).catch(function(err) {
      console.log(err);
      res.json({res: [{error: "No results found."}]});
    });
  }

}


//initial
var inParams = {
  Normalized: false,
  NumberOfDays: 370,
  DataPeriod: "Day",
  Elements: [{
    Symbol: "TSLA",
    Type: "price",
    Params: ["c"]
  }]
}

axios.get("http://dev.markitondemand.com/Api/v2/InteractiveChart/json?parameters=" +
      encodeURIComponent(JSON.stringify(inParams))).then(function(pdata) {  
  var stockEl = Object.create(null);
  stockEl.symbol = pdata.data.Elements[0].Symbol;        
  stockEl.name = "Tesla Inc";        
  stocks.push({symbol: stockEl.symbol, name: stockEl.name});
  stockEl.data = pdata.data.Dates.map(function(d, i) {
    return [Date.parse(d), pdata.data.Elements[0].DataSeries.close.values[i]];
  });
  chartData.push(stockEl);  
}).catch(function(err) {
  console.log(err);
});
  