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
        }, work: {
            name: '',
            title: '',
            tasks: '',
            date_start: '',
            date_end: '',
        }};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let generalInfo = this.state.generalInfo;
        let education = this.state.education;
        let work = this.state.work;
        if(e.target.name === 'general-name') {
            generalInfo.name = e.target.value;
        } else if(e.target.name === 'email') {
            generalInfo.email = e.target.value;
        } else if(e.target.name === 'phone') {
            generalInfo.phone = e.target.value;
        } else if(e.target.name === 'school') {
            education.name = e.target.value;
        } else if(e.target.name === 'education-title') {
            education.title = e.target.value;
        } else if(e.target.name === 'education-date-start') {
            education.date_start = e.target.value;
        } else if(e.target.name === 'education-date-end') {
            education.date_end = e.target.value;
        } else if(e.target.name === 'work-name') {
            work.name = e.target.value;
        } else if(e.target.name === 'work-title') {
            work.title = e.target.value;
        } else if(e.target.name === 'tasks') {
            work.tasks = e.target.value;
        } else if(e.target.name === 'work-date-start') {
            work.date_start = e.target.value;
        } else if(e.target.name === 'work-date-end') {
            work.date_end = e.target.value;
        }
        this.setState({generalInfo: generalInfo});
        this.setState({education: education});
        this.setState({work: work});
    }

    render() {
        return(
            <div>
                <div>
                    <div className='gen-container'>
                        <h3>General Info</h3>
                        <label htmlFor='general-name'>Name</label>
                        <input name='general-name' type='text' onChange={this.handleChange}></input>
                        <label htmlFor='email'>Email Address</label>
                        <input name='email' type='text' onChange={this.handleChange}></input>
                        <label htmlFor='phone'>Phone</label>
                        <input name='phone' type='text' onChange={this.handleChange}></input>
                        <h3>Education</h3>
                        <label htmlFor='school'>School</label>
                        <input name='school' type='text' onChange={this.handleChange}></input>
                        <label htmlFor='education-title'>Title of Study</label>
                        <input name='education-title' type='text' onChange={this.handleChange}></input>
                        <label htmlFor='education-date-start'>Start Date</label>
                        <input name='education-date-start' type='date' onChange={this.handleChange}></input>
                        <label htmlFor='education-date-end'>End Date</label>
                        <input name='education-date-end' type='date' onChange={this.handleChange}></input>
                        <h3>Work Experience</h3>
                        <label htmlFor='work-name'>Company Name</label>
                        <input name='work-name' type='text' onChange={this.handleChange}></input>
                        <label htmlFor='work-title'>Position Title</label>
                        <input name='work-title' type='text' onChange={this.handleChange}></input>
                        <label htmlFor='tasks'>Tasks</label>
                        <textarea name='tasks' type='text' onChange={this.handleChange}></textarea>
                        <label htmlFor='work-date-start'>Start Date</label>
                        <input name='work-date-start' type='date' onChange={this.handleChange}></input>
                        <label htmlFor='work-date-end'>End Date</label>
                        <input name='work-date-end' type='date' onChange={this.handleChange}></input>
                    </div>
                    <div className='cv-container'>
                        <div className='Bar'></div>
                        <GeneralInfo name={this.state.generalInfo.name}
                        email={this.state.generalInfo.email}
                        phone={this.state.generalInfo.phone}/>
                        <Education name={this.state.education.name}
                        title={this.state.education.title}
                        date_start={this.state.education.date_start}
                        date_end={this.state.education.date_end}/>
                        <WorkExperience name={this.state.work.name}
                        title={this.state.work.title}
                        tasks = {this.state.work.tasks}
                        date_start = {this.state.work.date_start}
                        date_end = {this.state.work.date_end}/>
                        <div className='Bar'></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
