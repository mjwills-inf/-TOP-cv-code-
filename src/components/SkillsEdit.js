import React, { Component } from 'react'

export default class SkillsEdit extends Component {   

  // below methods are retarded and show you should have ids with items in arrays
  // i.e. and array of objects of id+string

  copyProps = this.props.data

  deleteSkill = (e) => {
    let index = e.target.parentNode.getAttribute('data-key')
    this.copyProps.splice(index, 1)
    this.props.updateAppState('skills', this.copyProps)
  }

  addSkill = () => {
    this.copyProps.push('')
    this.props.updateAppState('skills', this.copyProps)
  }

  dataChange = (e) => {
    let index = e.target.parentNode.getAttribute('data-key')
    this.copyProps[index] = e.target.value
    this.props.updateAppState('skills', this.copyProps)
  }

  render() {

    return (
      <div className="skills-edit-div">
        <h3>Skills:</h3>
        {this.props.data.map((item, index) => {
          return (
            <div key={index} data-key={index}>
              <input 
                type="text" 
                value={item}
                onChange={this.dataChange}
              />
              <input 
                type="button" 
                value="x"
                onClick={this.deleteSkill}
              />
            </div>
          )
        })}
        <div className="new-skill-button">
          <input
            type="button"
            value="+"
            onClick={this.addSkill}
          />
        </div>
        
      </div>
    )
  }
}
