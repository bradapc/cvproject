import React from 'react';

class GeneralInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='gen-info'>
                <h3>Personal Information</h3>
                <p>{this.props.name}</p>
                <p>{this.props.email}</p>
                <p>{this.props.phone}</p>
            </div>
        );
    }
}

export default GeneralInfo