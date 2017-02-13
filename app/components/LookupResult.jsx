import React, {Component, PropTypes} from 'react';

class LookupResult extends Component {
    constructor() {
        super();
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd() {        
        this.props.onAdd(this.props.result.Symbol);
    }

    render() {        
        if (this.props.result.error) {
            return (
                <div style={{margin: "10px", padding: "10px 0 10px 20px", fontFamily: "Trebuchet MS, Verdana", backgroundColor: "#ccc",
                borderRadius: "6px"}}> 
                    <div style={{padding: "20px 0 0 20px", fontFamily: "Trebuchet MS, Verdana"}}>{this.props.result.error}</div> 
                </div>
            )
        } else {
            return (
                <div style={{margin: "10px", padding: "10px 0 10px 20px", fontFamily: "Trebuchet MS, Verdana", backgroundColor: "#ccc",
                borderRadius: "6px", cursor: "pointer"}} onClick={this.handleAdd} > 
                    <div>Symbol: {this.props.result.Symbol}</div>
                    <div>Name: {this.props.result.Name}</div>
                    <div>Exchange: {this.props.result.Exchange}</div> 
                </div>
            )
        }        
    }
}

LookupResult.propTypes = {
    result: PropTypes.object.isRequired,
    onAdd: PropTypes.func.isRequired
};

export default LookupResult;