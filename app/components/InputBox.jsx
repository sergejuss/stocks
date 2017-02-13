import React, {Component, PropTypes} from 'react';

class InputBox extends Component {    
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.state = {
            newCode: "",
            status: ""            
        }
    }

    handleChange(e) {
        this.setState({
            newCode: e.target.value,
            status: ""
        });
    }

    handleAdd(e) {
        e.preventDefault();
        this.props.onAdd(this.state.newCode.trim());
        if (this.state.newCode.trim().length === 0) {            
            this.setState({
                status: "Should not be empty"
            });         
        } else {            
            this.setState({
                newCode:"",
                status: ""
            });
        }        
    }

    render() {                
        return (
            <div className="col-m-6 col-4">
                <div style={{backgroundColor: "#fff", height: "140px", margin: "10px", borderRadius: "6px"}} >
                    <div style={{padding: "20px 0 20px 20px", fontFamily: "Trebuchet MS, Verdana"}}>Syncs in realtime across clients</div>                    
                    <input placeholder="Stock code" type="text" value={this.state.newCode} onChange={this.handleChange} 
                    style={{margin: "0 0 0 20px", height: "40px", maxWidth: "50%",
                    fontSize: "1.1em", fontFamily: "Trebuchet MS, Verdana", borderRadius: "6px"}} />
                    <button style={{margin: "0 0 0 20px", width: "60px", height: "40px",
                    fontSize: "1em", fontFamily: "Trebuchet MS, Verdana", borderRadius: "6px", backgroundColor: "#5CB85C",
                    color: "#fff"}} onClick={this.handleAdd}>Add</button>
                    <div style={{padding: "10px 0 0 20px", fontFamily: "Trebuchet MS, Verdana", color: "#f00"}}>{this.state.status}</div>                
                    <div style={{padding: "0 0 0 20px", fontFamily: "Trebuchet MS, Verdana", color: "#f00"}}>{this.props.addErr}</div>
                </div>
            </div>
        );
    }
}

InputBox.propTypes = {    
    onAdd: PropTypes.func.isRequired,
    addErr: PropTypes.string
};

export default InputBox;