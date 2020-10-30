import { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';

import FormHandler from './components/view/FormHandler';
import CvFormat from './components/view/CvFormat';

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      edit: false,
      statement: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolorem rerum aperiam, 
          ab corrupti tempora sit natus modi sed incidunt deleniti voluptas? Atque eligendi ea laborum eius 
          sit facilis, nisi ad illum corporis eveniet quisquam reiciendis delectus ipsam nobis officia, 
          provident corrupti repellendus mollitia obcaecati repellat cupiditate necessitatibus aliquam labore. 
          Perspiciatis doloribus deleniti atque magni laborum, soluta blanditiis fuga placeat repudiandae 
          dolorem modi porro saepe. Fuga explicabo quia deleniti atque eaque cupiditate, natus, nobis labore 
          ipsa sit facere rerum. Ullam!`,
      general: {
        firstName: 'Satoshi',
        surname: 'Nakamoto',
        position: 'Learner',
        phone: '01909-657422',
        email: 'noreply@anon.com',
        website: ' www.iNeedToGetSite.com',
        addressLine1: '420 The Avenue',
        addressLine2: '',
        postcode: '0x 2D50',
        city: 'Nobis Labore',
        country: 'Doloribus'
      },
      skills: [
        'Prolific tea maker',
        'Everyones favourite Colleague',
        'Can speak 5 different words in Japanese',
        `Completed 72% of a beginner's javascript course`,
        'Code Flounderer'
      ],
      experience: [{
        companyName: 'The Edo Period',
        position: 'Samurai',
        startDate: 'Jan 1600',
        endDate: '',
        duties: [
          'do',
          'bushi',
          'melodrama'
        ]
      }],
      education: [{
        school: 'A university',
        subject: 'Market Making',
        yearGraduate: 2020,
        qualification: 'Desmond',
  
      }],
      additional: ['Nope']
    }
  }
  
  handleChange = () => {
    this.setState({})
  }
  

  render() {
   
    return (
      <div className='app-div'>
        <Header />
        
        { this.state.edit ? 
          <FormHandler 
            data={this.state}

          /> : 
          <CvFormat 
            data={this.state}
          /> }
        
      </div>
    )
  }
}

export default App;
