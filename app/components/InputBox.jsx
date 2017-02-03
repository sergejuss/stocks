import React, {Component, PropTypes} from 'react';

class InputBox extends Component {    
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.state = {
            newCode: ""
        }
    }

    handleChange(e) {
        this.setState({
            newCode: e.target.value
        });
    }

    handleAdd(e) {
        e.preventDefault();        
        this.props.onAdd(this.state.newCode);
    }

    render() {
        return (
            <div className="col-m-6 col-4" style={{}} >
                <div style={{backgroundColor: "#fff", height: "200px", margin: "10px", borderRadius: "6px"}} >
                    <p style={{padding: "20px 0 0 20px", fontFamily: "Verdana"}}>Syncs in realtime across clients</p>                    
                    <input placeholder="Stock code" type="text" value={this.state.newCode} onChange={this.handleChange} style={{margin: "0 0 0 20px", height: "40px",
                    fontSize: "1.1em", fontFamily: "Verdana", borderRadius: "6px"}} />
                    <button style={{margin: "0 0 0 20px", width: "60px", height: "40px",
                    fontSize: "1em", fontFamily: "Verdana", borderRadius: "6px", backgroundColor: "#5CB85C",
                    color: "#fff"}} onClick={this.handleAdd}>Add</button>                    
                </div>
            </div>
        );
    }
}

InputBox.propTypes = {    
    onAdd: PropTypes.func.isRequired
};

export default InputBox;