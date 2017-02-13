import React, { PropTypes } from 'react';
import ReactHighstock from 'react-highcharts/ReactHighstock.src';
import theme from 'highcharts/themes/dark-unica.js';
let chartReflow = undefined; //suspend reflow to allow animation

theme(ReactHighstock.Highcharts);

var config = {
  chart: {
    height: 500,
    backgroundColor: "#383839"
  },
  rangeSelector: {
    selected: 1
  },
  title: {
    text: 'Stock Price'
  }
};

class Chart extends React.Component {
  //temporarily suspend reflow to allow animation - it seems that reflow suspends animation, but on the other side it is needed for page resizing
  componentDidUpdate(prevProps) {
      if (prevProps.chartData.length !== this.props.chartData.length) {
        let chart = this.refs.chart.getChart();
        const chartReflow = chart.reflow;
        chart.reflow = () => {};
        setTimeout(() => (chart.reflow = chartReflow));
      }    
  }
  
  render() {
    if (this.props.chartData.length === 0) {      
      config.series = [{
        name: '',
        data: [],
        tooltip: {
          valueDecimals: 2
        }  
      }];      
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
          <ReactHighstock config={config} ref="chart"></ReactHighstock>
      </div>
    )
  }
}

Chart.propTypes = {
  chartData: PropTypes.array
}

export default Chart
