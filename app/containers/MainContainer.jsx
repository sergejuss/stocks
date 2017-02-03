import React, { PropTypes } from 'react';
import jsonp from 'jsonp';
import Main from '../components/Main.jsx';

class MainContainer extends React.Component {

  constructor() {
		super();
		this.state = {
        stocks: ["AAPL"]
			};
	}

  componentDidMount() {
    var url = "https://www.highcharts.com/samples/data/jsonp.php?filename=aapl-c.json"
    jsonp(url, null, function(err, data) {
      if (err) console.log(err);
      console.log(data);
    })
  }

  render() {
    return (
      <div>
        <Main />
      </div>
    )
  }
}

export default MainContainer;
