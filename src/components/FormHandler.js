import React, { Component } from 'react'

import General from './General'
import Statement from './Statement'
import Skills from './Skills'
import Education from './Education'
import Experience from './Experience'
import Additional from './Additional';

export default class FormHandler extends Component {

  

  render() {
    console.log("form handler", this.props)

    return (
      <div className='form-div'>
        <form>
          <General data={this.props.info.general}/>
          <Statement data={this.props.info.statement}/>
          <Skills data={this.props.info.skills}/>
          <Experience data={this.props.info.experience}/>
          <Education data={this.props.info.education}/>
          <Additional data={this.props.info.additional}/>

        </form>
        
      </div>
    )
  }
}
