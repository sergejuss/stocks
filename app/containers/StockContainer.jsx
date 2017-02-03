import React, {PropTypes} from 'react';
import StockBox from '../components/StockBox.jsx';
import InputBox from '../components/InputBox.jsx';

class StockContainer extends React.Component {

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
      <StockBox />
      <StockBox />
      <StockBox />
      <InputBox onAdd={this.handleAdd}/>    
    </div>
    )
  }
}

StockContainer.propTypes = {
  onAdd: PropTypes.func.isRequired
}

export default StockContainer;
