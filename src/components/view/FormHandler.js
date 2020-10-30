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
          <GeneralEdit data={this.props.info.general}/>
          <StatementEdit data={this.props.info.statement}/>
          <SkillsEdit data={this.props.info.skills}/>
          <ExperienceEdit data={this.props.info.experience}/>
          <EducationEdit data={this.props.info.education}/>
          <AdditionalEdit data={this.props.info.additional}/>

        </form>
        
      </div>
    )
  }
}
