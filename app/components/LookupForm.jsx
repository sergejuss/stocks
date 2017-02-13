import React, {Component, PropTypes} from 'react';

class LookupForm extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleLookup = this.handleLookup.bind(this);
        this.state = {
            newTerm: "",
            status: ""
        };
    }

    handleChange(e) {
        this.setState({
            newTerm: e.target.value,
            status: ""
        });
    }

    handleLookup(e) {
        e.preventDefault();
        if (this.state.newTerm.trim().length === 0) {
            this.setState({
                status: "Should not be empty"
            });
        } else {
            this.props.onLookup(this.state.newTerm);
            this.setState({
                newTerm:"",
                status: ""
            });
        }
    }

    render() {
        return (
            <div className="col-m-6 col-6">
                <div style={{backgroundColor: "#fff", height: "140px", margin: "10px", borderRadius: "6px"}} >
                    <div style={{padding: "20px 0 20px 20px", fontFamily: "Trebuchet MS, Verdana"}}>Code Lookup</div>                    
                    <input placeholder="Term, e.g. Netflix" type="text" value={this.state.newTerm} onChange={this.handleChange} 
                    style={{margin: "0 0 0 20px", height: "40px", maxWidth: "60%",
                    fontSize: "1.1em", fontFamily: "Trebuchet MS, Verdana", borderRadius: "6px"}} />
                    <button style={{margin: "0 0 0 20px", width: "80px", height: "40px",
                    fontSize: "1em", fontFamily: "Trebuchet MS, Verdana", borderRadius: "6px", backgroundColor: "#5CB85C",
                    color: "#fff"}} onClick={this.handleLookup}>Lookup</button>
                    <div style={{padding: "10px 0 0 20px", fontFamily: "Trebuchet MS, Verdana", color: "#f00"}}>{this.state.status}</div>                
                </div>
            </div>
        );
    }
}

LookupForm.propTypes = {
    onLookup: PropTypes.func.isRequired
};

export default LookupForm;