import React, { Component } from 'react'
import uniqid from 'uniqid'
import EducationItem from './EducationItem'

import ExperienceItem from './ExperienceItem'

export default class CvFormat extends Component {
  render() {

    const { firstName, surname, position, phone, email, country, city, postcode,
        addressLine1, addressLine2, website } = this.props.data.general
    

    const statement = this.props.data.statement
    const skills = this.props.data.skills
    const experience = this.props.data.experience
    const education = this.props.data.education
    const additional = this.props.data.additional
    
    const fullname = `${firstName} ${surname}`;
    const listSkills = skills.map((item) => {
      return <li key={uniqid()}>{ item }</li>
    })
      
    return (
      <div className="cv-format-div">

        <div className="general-div">
          <div className="name-title-div">
            <h3>{ fullname }</h3>
            <h4>{ position }</h4>
          </div>
          <div className="address-div">
            <p>{ addressLine1 }</p>
            <p>{ addressLine2 !== '' ? addressLine2 : '' }</p>
            <p>{ city }</p>
            <p>{ postcode }</p>
            <p>{ country }</p>
          </div>
          <div className="contact-div">
            <p>{ phone }</p>
            <p>{ email }</p>
            <p>{ website }</p>
          </div>
        </div>

        <div className="statement-div">
          { statement }
        </div>

        <div className="skills-div">
          <h3>Skills</h3>
          <ul>
            { listSkills }
          </ul>
        </div>

        <div className="experience-div">
          <h3>Work Experience</h3>
          {experience.map((item) => 
            <ExperienceItem data={item} key={uniqid()}/>
          )}
        </div>

        <div className="education-div">
          <h3>Education</h3>
          {education.map((item) => 
            <EducationItem data={item} key={uniqid()}/>
          )}
        </div>

        <div className="additional-div">
          <h3>Additional Information</h3>
          <ul>
            {additional.map(item =>              
                <li key={uniqid()}>{item}</li>              
            )}
          </ul>
        </div>

      </div>
    )
  }
}
