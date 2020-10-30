import React, { Component } from 'react'

import GeneralEdit from '../GeneralEdit'
import StatementEdit from '../StatementEdit'
import SkillsEdit from '../SkillsEdit'
import EducationEdit from '../EducationEdit'
import ExperienceEdit from '../ExperienceEdit'
import AdditionalEdit from '../AdditionalEdit';

export default class FormHandler extends Component {

  

  render() {
    console.log("form handler", this.props)

    return (
      <div className='form-div'>
        <form>
          <GeneralEdit data={this.props.data.general}/>
          <StatementEdit data={this.props.data.statement}/>
          <SkillsEdit data={this.props.data.skills}/>
          <ExperienceEdit data={this.props.data.experience}/>
          <EducationEdit data={this.props.data.education}/>
          <AdditionalEdit data={this.props.data.additional}/>

        </form>
        
      </div>
    )
  }
}
