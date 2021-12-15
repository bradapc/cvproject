import React from 'react';

class WorkExperience extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='work-experience'>
                <h3>Work Experience</h3>
                <p>{this.props.name}</p>
                <p>{this.props.title}</p>
                <p>{this.props.tasks}</p>
                <p>Attended from <strong>{this.props.date_start}</strong> to <strong>{this.props.date_end}</strong></p>
            </div>
        );
    }
}

export default WorkExperience;