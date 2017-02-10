import React, {PropTypes} from 'react';
import StockBox from '../components/StockBox.jsx';
import InputBox from '../components/InputBox.jsx';

class StockContainer extends React.Component {

  constructor() {
    super();    
    this.handleAdd = this.handleAdd.bind(this);    
    this.handleDel = this.handleDel.bind(this);
  }
  
  handleAdd(newCode) {        
    this.props.onAdd(newCode);
  }

  handleDel(code) {
    this.props.onDel(code);
  }

  render() {
    var stockBoxes = this.props.stocks.map(function(stock, i) {
      return (
        <StockBox key={i} symName={stock} onDel={this.handleDel} />
      )
    }.bind(this));
    return (
    <div>
      { stockBoxes }                   
      <InputBox onAdd={this.handleAdd} addErr={this.props.onAddErr} />    
    </div>
    )
  }
}

StockContainer.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onDel: PropTypes.func.isRequired,
  addErr: PropTypes.string,
  stocks: PropTypes.array
}

export default StockContainer;
