import React, { Component } from 'react'

import GeneralEdit from '../GeneralEdit'
import StatementEdit from '../StatementEdit'
import SkillsEdit from '../SkillsEdit'
import EducationEdit from '../EducationEdit'
import ExperienceEdit from '../ExperienceEdit'
import AdditionalEdit from '../AdditionalEdit';

export default class FormHandler extends Component {

  

  render() {

    return (
      <div className='form-div'>
        <form>
          <GeneralEdit 
            data={this.props.data.general}
            updateAppState={this.props.update}
          />
          <StatementEdit 
            data={this.props.data.statement}
            updateAppState={this.props.update}
          />
          <SkillsEdit 
            data={this.props.data.skills}
          />
          <ExperienceEdit 
            data={this.props.data.experience}
          />
          <EducationEdit 
            data={this.props.data.education}
          />
          <AdditionalEdit 
            data={this.props.data.additional}
          />

        </form>
        
      </div>
    )
  }
}
