import React, { PropTypes } from 'react';

const Footer = (props) => {
  return (
    <div style={{textAlign: "center", marginTop: "30px", fontFamily: "Trebuchet MS, Verdana", fontSize: ".9em", color: "#fff"}}>
      Financial data from <a href="http://www.markit.com/Product/Markit-Digital">MarkitOnDemand</a>, Graph from <a href="http://www.highcharts.com">Highcharts</a>
    </div>
  )
}

export default Footer
