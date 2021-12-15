import React from 'react';

class Education extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='education'>
                <h3>Education</h3>
                <p>{this.props.name}</p>
                <p>{this.props.title}</p>
                <p>Attended from <strong>{this.props.date_start}</strong> to <strong>{this.props.date_end}</strong></p>
            </div>
        );
    }
}

export default Education;