import React, { Component } from 'react'

import General from './General'
import Statement from './Statement'
import Skills from './Skills'
import Education from './Education'
import Experience from './Experience'
import Additional from './Additional';

export default class FormHandler extends Component {

  

  render() {
    console.log(this.props)

    return (
      <div className='form-div'>
        <form>
          <General data={this.props.general}/>
          <Statement data={this.props.statement}/>
          <Skills data={this.props.skills}/>
          <Experience data={this.props.experience}/>
          <Education data={this.props.education}/>
          <Additional data={this.props.additional}/>

        </form>
        
      </div>
    )
  }
}
