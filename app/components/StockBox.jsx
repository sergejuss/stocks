import React, {Component, PropTypes} from 'react';

class StockBox extends Component {
    constructor() {
        super();
        this.handleDel = this.handleDel.bind(this);
    }

    handleDel() {        
        this.props.onDel(this.props.symName.symbol);
    }

    render() {
        return (
            <div className="col-m-6 col-4" style={{fontFamily: "Trebuchet MS, Verdana"}} >
                <div style={{backgroundColor: "#fff", height: "140px", margin: "10px", borderRadius: "6px"}} >
                    <div style={{margin: "0 0 0 90%", padding: "10px 10px 0 0", width: "20px", fontSize: "1em", cursor: "pointer"}}
                    onClick={this.handleDel} >
                        x
                    </div>
                    <div style={{padding: "0 30px 10px 30px", fontSize: "1.6em", marginBottom: "0"}}>
                        {this.props.symName.symbol}                        
                    </div>
                    <div style={{padding: "0 30px 30px 30px", fontSize: "1.1em", marginTop: "0", color: "#777"}}>
                        {this.props.symName.name}
                    </div>
                </div>
            </div>
        );
    }
}

StockBox.propTypes = {
    symName: PropTypes.object.isRequired,
    onDel: PropTypes.func.isRequired
};

export default StockBox;