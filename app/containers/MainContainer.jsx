import React, { PropTypes } from 'react';
import ajax from '../config/ajax.js';
import jsonp from 'jsonp';
import Main from '../components/Main.jsx';

var socket = io.connect();

class MainContainer extends React.Component {

  constructor() {
		super();
    this.getCurrent = this.getCurrent.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDel = this.handleDel.bind(this);
    this.handleLookup = this.handleLookup.bind(this);    
		this.state = {        
        lookupResult: [],
        addErr: "",
        chartData: []       
			};
	}

  componentDidMount() {
    this.getCurrent();
    socket.on('curr', function() {      
      this.getCurrent();
    }.bind(this));    
  }

  componentWillUnmount() {
    socket.close();
  }  

  getCurrent() {
    ajax.curr().then(function(data) {
      this.setState({
        chartData: data.data
      });
    }.bind(this)).catch(function(err) {
      console.log(err);
    })
  } 
  
  handleAdd(newCode) {
    this.setState({
      addErr: "",
      lookupResult: []
    });
    if (newCode) {
      ajax.add(newCode).then(function(data) {        
        if (data.data.err) {
          this.setState({
            addErr: data.data.err
          });
        } else {
          this.setState({
            chartData: data.data
          });
          socket.emit('get_curr');
        }
      }.bind(this)).catch(function(err) {
        console.log(err);
      });
    }    
  }

  handleDel(code) {        
    var chartData = this.state.chartData.filter(function(stock) {
      return stock.symbol !== code;
    });    
    this.setState({      
      chartData: chartData,
      addErr: "",
      lookupResult: []
    });
    ajax.del(code).then(function() {
      socket.emit('get_curr');
    }).catch(function(err) {
      console.log(err);
    });
  }

  handleLookup(newTerm) {
    this.setState({
      addErr: ""
    });
    if (newTerm) {
      ajax.lookup(newTerm).then(function(data) {
        this.setState({
          lookupResult: data.data.res
        });
      }.bind(this)).catch(function(err) {
        console.log(err);
      });
    }
  }
  
  render() {
    return (
      <Main onAdd={this.handleAdd} onDel={this.handleDel} addErr={this.state.addErr} onLookup={this.handleLookup}
        lookupResult={this.state.lookupResult} chartData={this.state.chartData} />      
    )
  }
}

export default MainContainer;
