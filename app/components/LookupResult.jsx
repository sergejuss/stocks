import React, {Component, PropTypes} from 'react';

class LookupResult extends Component {
    constructor() {
        super();
        this.handleAddRef = this.handleAddRef.bind(this);
    }

    handleAddRef() {        
        this.props.onAddRef(this.props.result.Symbol);
    }

    render() {        
        if (this.props.result.error) {
            return (
                <div style={{margin: "10px", padding: "10px 0 10px 20px", fontFamily: "Verdana", backgroundColor: "#ccc",
                borderRadius: "6px"}}> 
                    <div style={{padding: "20px 0 0 20px", fontFamily: "Verdana"}}>Error: {this.props.result.error}</div> 
                </div>
            )
        } else if (this.props.result.none) {
            return (
                <div style={{margin: "10px", padding: "10px 0 10px 20px", fontFamily: "Verdana", backgroundColor: "#ccc",
                borderRadius: "6px"}}> 
                    <div style={{padding: "20px 0 0 20px", fontFamily: "Verdana"}}>No results found</div>
                </div>
            )
        } else {
            return (
                <div style={{margin: "10px", padding: "10px 0 10px 20px", fontFamily: "Verdana", backgroundColor: "#ccc",
                borderRadius: "6px", cursor: "pointer"}} onClick={this.handleAddRef} > 
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
    onAddRef: PropTypes.func.isRequired
};

export default LookupResult;