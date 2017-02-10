import React, {Component, PropTypes} from 'react';
import LookupForm from '../components/LookupForm.jsx';
import LookupResults from '../components/LookupResults.jsx';

class LookupContainer extends Component {
    constructor() {
        super();
        this.handleLookup = this.handleLookup.bind(this);
        this.handleAddRef = this.handleAddRef.bind(this);
    }

    handleLookup(newTerm) {
        this.props.onLookup(newTerm);
    }

    handleAddRef(code) {
        this.props.onAddRef(code);
    }

    render() {
        return (
            <div className="col-m-12 col-12">
                <LookupForm onLookup={this.handleLookup} />
                <LookupResults lookupResult={this.props.lookupResult} onAddRef={this.handleAddRef} />
            </div>
        );
    }
}

LookupContainer.propTypes = {
    onLookup: PropTypes.func.isRequired,
    lookupResult: PropTypes.array,
    onAddRef: PropTypes.func.isRequired
};

export default LookupContainer;