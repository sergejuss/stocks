import React, { PropTypes } from 'react';
import jsonp from 'jsonp';
import Main from '../components/Main.jsx';

class MainContainer extends React.Component {

  constructor() {
		super();
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDel = this.handleDel.bind(this);
    this.handleLookup = this.handleLookup.bind(this);
    this.handleAddRef = this.handleAddRef.bind(this);
		this.state = {
        stocks: [],
        lookupResult: [],
        addErr: "",
        chartData: []       
			};
	}

  componentDidMount() {
    // this.handleAdd("AAPL");
  }
  
  
  handleAdd(newCode) {
    this.setState({
      addErr: "",
      lookupResult: []
    });
    var stockList = this.state.stocks.map(function(e) { return e.symbol; });
    stockList.push(newCode.toString().toUpperCase());    
    
    var parameters = {
      Normalized: false,
      NumberOfDays: 370,
      DataPeriod: "Day"    
    };
    parameters.Elements = stockList.map(function(stock) {
      return {
        Symbol: stock,
        Type: "price",
        Params: ["c"]
      }
    });
    var urlL = "http://dev.markitondemand.com/Api/v2/Lookup/jsonp?input=" + newCode;
    var urlIC = "http://dev.markitondemand.com/Api/v2/InteractiveChart/jsonp?parameters=" +
    encodeURIComponent(JSON.stringify(parameters));
    
    var promL = new Promise(function(resolve, reject) {
      jsonp(urlL, null, function(err, data) {
        if (err) {
          reject(err);
        } else if (Array.isArray(data) && data.length === 0) {
          reject("none");
        } else {
          resolve(data);
        }
      });
    });

    var promIC = new Promise(function(resolve, reject) {
      jsonp(urlIC, null, function(err, data) {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });

    Promise.all([promL, promIC]).then(function(values) {      
      var stocks = this.state.stocks;
      var chartData = values[1].Elements.map(function(stock) {
        var stockEl = Object.create(null);
        stockEl.symbol = stock.Symbol;
        for (var i=0; i<this.state.stocks.length; i++) {
          if (stock.Symbol === this.state.stocks[i]["symbol"]) {
            stockEl.name = this.state.stocks[i]["name"];
            break;
          }
        }
        for (var j=0; j<values[0].length; j++) {
          if (stock.Symbol === values[0][j]["Symbol"]) {
            stockEl.name = values[0][j]["Name"];
            stocks.push({symbol: stockEl.symbol, name: stockEl.name});            
            break;
          }
        }
        stockEl.data = values[1].Dates.map(function(d, i) {
          return [Date.parse(d), stock.DataSeries.close.values[i]];
        });
        return stockEl;
      }.bind(this));      
      this.setState({
        chartData: chartData,
        stocks: stocks
      });
    }.bind(this)).catch(function(err) {
      if (err === "none") {
        this.setState({
          addErr: "Incorrect or not existing stock code"
        });
      }
      console.log("err: ", err);
    }.bind(this));
  }

  handleDel(code) {    
    var stocks = this.state.stocks.filter(function(stock) {
      return stock.symbol !== code;
    });
    var chartData = this.state.chartData.filter(function(stock) {
      return stock.symbol !== code;
    });    
    this.setState({
      stocks: stocks,
      chartData: chartData,
      lookupResult: []
    });
  }

  handleLookup(newTerm) {
    this.setState({
      addErr: ""
    });
    var url = "http://dev.markitondemand.com/Api/v2/Lookup/jsonp?input=" + newTerm;
    function onresult(err, data) {       
      if (err) {         
        this.setState({
          lookupResult: [{error: JSON.stringify(err)}]
        }); 
      } else {
        if (Array.isArray(data)) {
          this.setState({
            lookupResult: data.length === 0 ? [{none: "none"}] : data
          }); 
        } else {
          this.setState({
            lookupResult: [{error: JSON.stringify(data)}]
          });
        }        
      }      
    }
    jsonp(url, null, onresult.bind(this));
  }

  handleAddRef(code) {    
    this.handleAdd(code);    
  }

  render() {
    return (
      <div>
        <Main onAdd={this.handleAdd} onDel={this.handleDel} addErr={this.state.addErr} onLookup={this.handleLookup}
        lookupResult={this.state.lookupResult} chartData={this.state.chartData} onAddRef={this.handleAddRef} />
      </div>
    )
  }
}

export default MainContainer;
