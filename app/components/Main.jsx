import React, { PropTypes } from 'react';
import styles from '../styles';
import Chart from './Chart.jsx';
import StockContainer from '../containers/StockContainer.jsx';
import LookupContainer from '../containers/LookupContainer.jsx';
import Footer from './Footer.jsx';

class Main extends React.Component {
  constructor() {
    super();
    this.handleAdd = this.handleAdd.bind(this);  
    this.handleDel = this.handleDel.bind(this);
    this.handleLookup = this.handleLookup.bind(this);
    this.handleAddRef = this.handleAddRef.bind(this);
  }
  
  handleAdd(newCode) {    
    this.props.onAdd(newCode);
  }

  handleDel(code) {
    this.props.onDel(code);
  }

  handleLookup(newTerm) {
    this.props.onLookup(newTerm);
  }

  handleAddRef(code) {
    this.props.onAddRef(code);
  }

  render() {
    var stocks = this.props.chartData.map(function(stock) {
      return {
        symbol: stock.symbol,
        name: stock.name
      }
    });
    return (
      <div>
        <div className="row">
          <div className="col-m-1 col-2" style={{height: "10px"}}></div>
          <div className="col-m-10 col-8" style={{backgroundColor: "yellow"}}>
            <Chart chartData={this.props.chartData} />
            <StockContainer onAdd={this.handleAdd} onDel={this.handleDel} addErr={this.props.onAddErr} stocks={stocks} />
            <LookupContainer onLookup={this.handleLookup} lookupResult={this.props.lookupResult} onAddRef={this.handleAddRef} />        
          </div>
          <div className="col-m-1 col-2" style={{height: "10px"}}></div>      
        </div>
        <Footer />
      </div>
    )
  }  
}

Main.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onDel: PropTypes.func.isRequired,
  onLookup: PropTypes.func.isRequired,
  lookupResult: PropTypes.array,
  addErr: PropTypes.string,
  chartData: PropTypes.array.isRequired,
  onAddRef: PropTypes.func.isRequired
}

export default Main
