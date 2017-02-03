import React, {Component, PropTypes} from 'react';

class InputBox extends Component {
    render() {
        return (
            <div className="col-m-6 col-4" style={{}} >
                <div style={{backgroundColor: "#fff", height: "200px", margin: "10px", borderRadius: "6px"}} >
                    <p style={{padding: "20px 0 0 20px", fontFamily: "Verdana"}}>Syncs in realtime across clients</p>
                    <input placeholder="Stock code" type="text" style={{margin: "0 0 0 20px", height: "40px",
                    fontSize: "1.1em", fontFamily: "Verdana", borderRadius: "6px"}} />
                    <button style={{margin: "0 0 0 20px", width: "60px", height: "40px", fontSize: "1em", fontFamily: "Verdana",
                    borderRadius: "6px", backgroundColor: "#5CB85C", color: "#fff"}}>Add</button>
                </div>
            </div>
        );
    }
}

InputBox.propTypes = {

};

export default InputBox;