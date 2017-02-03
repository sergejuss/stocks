import React, {PropTypes} from 'react';
import StockBox from '../components/StockBox.jsx';
import InputBox from '../components/InputBox.jsx';

class StockContainer extends React.Component {

  constructor() {
    super();
    this.State = {

    };
  }

  render() {
    return (
    <div className="row">
      <div className="col-m-1 col-2" style={{height: "10px"}}></div>
      <div className="col-m-10 col-8" style={{backgroundColor: "blue"}}>
          <StockBox />
          <StockBox />
          <StockBox />
          <InputBox />
      </div>
      <div className="col-m-1 col-2" style={{height: "10px"}}></div>
    </div>
    )
  }
}

export default StockContainer;
