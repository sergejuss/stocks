import React, { PropTypes } from 'react';
import styles from '../styles';
import Chart from './Chart.jsx';
import StockContainer from '../containers/StockContainer.jsx';
import Footer from './Footer.jsx';

const Main = (props) => {
  return (
    <div className="main-container">
      <Chart />
      <StockContainer />
      <Footer />
    </div>
  )
}

export default Main
