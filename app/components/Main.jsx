import React, { PropTypes } from 'react';
import styles from '../styles';
import Chart from './Chart.jsx';
import StockContainer from '../containers/StockContainer.jsx';
import Footer from './Footer.jsx';

class Main extends React.Component {
  constructor() {
    super();
    this.handleAdd = this.handleAdd.bind(this);    
  }
  
  handleAdd(newCode) {    
    this.props.onAdd(newCode);
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-m-1 col-2" style={{height: "10px"}}></div>
          <div className="col-m-10 col-8" style={{backgroundColor: "yellow"}}>
            <Chart />
            <StockContainer onAdd={this.handleAdd} />        
          </div>
          <div className="col-m-1 col-2" style={{height: "10px"}}></div>      
        </div>
        <Footer />
      </div>
    )
  }  
}

Main.propTypes = {
  onAdd: PropTypes.func.isRequired
}

export default Main
