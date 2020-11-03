import React, { Component } from 'react'

export default class SkillsEdit extends Component { 

  state = {
    newSkills: this.props.data
  }

  // below methods are retarded and show you should have ids with items in arrays
  // i.e. and array of objects of id+string

  deleteSkill = (e) => {
    let index = e.target.parentNode.getAttribute('data-key')
    console.log("in delete", index)
    let copyState = this.state.newSkills
    copyState.splice(index, 1)
    this.setState({newSkills: copyState})
  }

  addSkill = () => {

  }

  dataChange = (e) => {
    let index = e.target.parentNode.getAttribute('data-key')
    let copyState = this.state.newSkills
    copyState[index] = e.target.value
    this.setState({newSkills: copyState})

  }

  render() {

    console.log("skillsEdit", this.state)

    return (
      <div className="skills-edit-div">
        {this.state.newSkills.map((item, index) => {
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
        
      </div>
    )
  }
}
