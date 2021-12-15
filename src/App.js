import React from 'react'
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import AppCSS from './styles/App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {generalInfo: {
            name: '',
            email: '',
            phone: ''
        }, education: {
            name: '',
            title: '',
            date_start: '',
            date_end: '',
        }};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let generalInfo = this.state.generalInfo;
        let education = this.state.education;
        if(e.target.name === 'name') {
            generalInfo.name = e.target.value;
        } else if(e.target.name === 'email') {
            generalInfo.email = e.target.value;
        } else if(e.target.name === 'phone') {
            generalInfo.phone = e.target.value;
        } else if(e.target.name === 'school') {
            education.name = e.target.value;
        } else if(e.target.name === 'title') {
            education.title = e.target.value;
        } else if(e.target.name === 'date-start') {
            education.date_start = e.target.value;
        } else if(e.target.name === 'date-end') {
            education.date_end = e.target.value;
        }
        this.setState({generalInfo: generalInfo});
        this.setState({education: education});
    }

    render() {
        return(
            <div>
                <div className='gen-container'>
                    <h3>General Info</h3>
                    <label htmlFor='name'>Name</label>
                    <input name='name' type='text' onChange={this.handleChange}></input>
                    <label htmlFor='email'>Email Address</label>
                    <input name='email' type='text' onChange={this.handleChange}></input>
                    <label htmlFor='phone'>Phone</label>
                    <input name='phone' type='text' onChange={this.handleChange}></input>
                    <h3>Education</h3>
                    <label htmlFor='school'>School</label>
                    <input name='school' type='text' onChange={this.handleChange}></input>
                    <label htmlFor='title'>Title of Study</label>
                    <input name='title' type='text' onChange={this.handleChange}></input>
                    <label htmlFor='date-start'>Start Date</label>
                    <input name='date-start' type='date' onChange={this.handleChange}></input>
                    <label htmlFor='date-end'>End Date</label>
                    <input name='date-end' type='date' onChange={this.handleChange}></input>
                    <h3>Work Experience</h3>
                    <WorkExperience />
                    <GeneralInfo name={this.state.generalInfo.name}
                    email={this.state.generalInfo.email}
                    phone={this.state.generalInfo.phone}/>
                    <Education name={this.state.education.name}
                    title={this.state.education.title}
                    date_start={this.state.education.date_start}
                    date_end={this.state.education.date_end}/>
                </div>
            </div>
        )
    }
}

export default App;
