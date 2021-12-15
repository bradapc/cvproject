import React from 'react'
import GeneralInfo from './components/GeneralInfo';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {generalInfo: {
            name: '',
            email: '',
            phone: ''
        }};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let generalInfo = this.state.generalInfo;
        if(e.target.name === 'name') {
            generalInfo.name = e.target.value;
        } else if(e.target.name === 'email') {
            generalInfo.email = e.target.value;
        } else if(e.target.name === 'phone') {
            generalInfo.phone = e.target.value;
        }
        this.setState({generalInfo: generalInfo});
    }

    render() {
        return(
            <div>
                <label htmlFor='name'>Name</label>
                <input name='name' type='text' onChange={this.handleChange}></input>
                <label htmlFor='email'>Email Address</label>
                <input name='email' type='text' onChange={this.handleChange}></input>
                <label htmlFor='phone'>Phone</label>
                <input name='phone' type='text' onChange={this.handleChange}></input>
                <GeneralInfo name={this.state.generalInfo.name}
                email={this.state.generalInfo.email}
                phone={this.state.generalInfo.phone}/>
            </div>
        )
    }
}

export default App;
