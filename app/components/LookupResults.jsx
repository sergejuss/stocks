import React, {Component, PropTypes} from 'react';
import LookupResult from './LookupResult.jsx';

class LookupResults extends Component {
    constructor() {
        super();
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd(code) {
        this.props.onAdd(code);
    }

    render() {
        var resultsArray = this.props.lookupResult;
        if (resultsArray.length === 0) {
            return (
                <div className="col-m-6 col-6" style={{height: "10px"}}></div>
            )
        } else {
            var results = resultsArray.map(function(r, i) {
                return (
                    <LookupResult key={i} result={r} onAdd={this.handleAdd} />
                )
            }.bind(this));
            return (
                <div className="col-m-6 col-6">
                    { results }                                      
                </div>
            )
        }
    }
}

LookupResults.propTypes = {
    lookupResult: PropTypes.array,
    onAdd: PropTypes.func.isRequired
};

export default LookupResults;