import React, { Component } from 'react'

export default class ExperienceEdit extends Component {

  copyProps = this.props.data

  // Below methods nested arrays in objects in arrays seems ridiculous
  // should be subcomponents

  dataChange = (e) => {
    let index = e.target.parentNode.getAttribute('data-key')
    this.copyProps[index][e.target.name] = e.target.value
    this.props.updateAppState('experience', this.copyProps)
  }

  dutyDataChange = (e) => {
    let parentIndex =  e.target.parentNode.parentNode.getAttribute('data-key')
    let index = e.target.parentNode.getAttribute('data-key')
    this.copyProps[parentIndex].duties[index] = e.target.value
    this.props.updateAppState('experience', this.copyProps)
  }

  deleteDuty = (e) => {
    let parentIndex =  e.target.parentNode.parentNode.getAttribute('data-key')
    let index = e.target.parentNode.getAttribute('data-key')
    this.copyProps[parentIndex].duties.splice(index, 1)
    this.props.updateAppState('experience', this.copyProps)
  }

  addDuty = () => {

    this.props.updateAppState('experience', this.copyProps)
  }

  

  addNewExp = () => {

    this.props.updateAppState('experience', this.copyProps)
  }

  deleteExp = (e) => {

    this.props.updateAppState('experience', this.copyProps)
  }

  render() {
    return (

      <div className="experience-edit-div">        
        <h3>Experience</h3>
        
        { this.props.data.map((item, index) => {

          return (
            <div key={index} data-key={index}>
        
              <label htmlFor="companyName">Company:</label>
              <input 
                type="text"
                id="companyName" 
                name="companyName" 
                value={item.companyName}
                onChange={this.dataChange}
              />
              <label htmlFor="position">Position:</label>
              <input 
                type="text" 
                name="position"
                id="position" 
                value={item.position}
                onChange={this.dataChange}
              />
              <label htmlFor="startDate">Start Date:</label>
              <input 
                type="text" 
                name="startDate"
                id="startDate" 
                value={item.startDate}
                onChange={this.dataChange}
              />
              <label htmlFor="endDate">End Date:</label>
              <input 
                type="text" 
                id="endDate" 
                name="endDate" 
                value={item.endDate}
                onChange={this.dataChange}
              />
              <h5>Duties:</h5>
              {item.duties.map((itemSk, indexSk) => {
                return (
                  <div key={indexSk} data-key={indexSk}>
                    <input 
                      type="text" 
                      value={itemSk}
                      onChange={this.dutyDataChange}
                    />
                    <input 
                      type="button" 
                      value="x"
                      onClick={this.deleteDuty}
                    />
                  </div>
                )
              })}
              <input
                type="button"
                value="+"
                onClick={this.addDuty}
              />

            </div>
          )        
        })}         
      </div>
    )
  }
}
