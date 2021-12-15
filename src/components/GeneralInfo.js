import React from 'react';

class GeneralInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h3>General Information</h3>
                <p>{this.props.name}</p>
                <p>{this.props.email}</p>
                <p>{this.props.phone}</p>
            </div>
        );
    }
}

export default GeneralInfo