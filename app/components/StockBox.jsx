import React, {Component, PropTypes} from 'react';

class StockBox extends Component {
    render() {
        return (
            <div className="col-m-6 col-4" style={{}} >
                <div style={{backgroundColor: "#fff", height: "200px", margin: "10px", borderRadius: "6px"}} >
                    <p style={{padding: "30px 30px 10px 30px", fontSize: "1.6em", fontFamily: "Verdana", marginBottom: "0"}}>AAPL</p>
                    <p style={{padding: "0 30px 30px 30px", fontSize: "1.1em", fontFamily: "Verdana", marginTop: "0", color: "#777"}}>StockBox text</p>
                </div>
            </div>
        );
    }
}

StockBox.propTypes = {

};

export default StockBox;