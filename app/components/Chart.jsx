import React, { PropTypes } from 'react';
// import styles from '../styles';
import ReactHighstock from 'react-highcharts/ReactHighstock.src';
import theme from 'highcharts/themes/dark-unica.js';

theme(ReactHighstock.Highcharts);

var config = {
  chart: {
    height: 500
  },
  rangeSelector: {
    selected: 1
  },
  title: {
    text: 'Stock Price'
  }
};

class Chart extends React.Component {
  render() {
    if (this.props.chartData.length === 0) {      
      config.series = [{
        name: '',
        data: [],
        tooltip: {
          valueDecimals: 2
        }  
      }]
    } else {      
      config.series = this.props.chartData.map(function(stock) {
        return {
          name: stock.symbol,
          data: stock.data,
          tooltip: {
            valueDecimals: 2
          }
        }
      });
    }
    
    return (       
      <div style={{height: "500px"}}>
          <ReactHighstock config={config}></ReactHighstock>
      </div>
    )
  }
}

Chart.propTypes = {
  chartData: PropTypes.array
}

export default Chart
