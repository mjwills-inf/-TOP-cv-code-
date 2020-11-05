import React, { Component } from 'react'

export default class ExperienceEdit extends Component {

  copyProps = this.props.data

  getIndex = (e) => e.target.parentNode.getAttribute('data-key')
  getParentIndex = (e) => e.target.parentNode.parentNode.getAttribute('data-key')
  
  // Below methods nested arrays in objects in arrays seems ridiculous
  // should be subcomponents

  dataChange = (e) => {
    this.copyProps[this.getIndex(e)][e.target.name] = e.target.value
    this.props.updateAppState('experience', this.copyProps)
  }
  dutyDataChange = (e) => {
    this.copyProps[this.getParentIndex(e)].duties[this.getIndex(e)] = e.target.value
    this.props.updateAppState('experience', this.copyProps)
  }
  deleteDuty = (e) => {    
    this.copyProps[this.getParentIndex(e)].duties.splice(this.getIndex(e), 1)
    this.props.updateAppState('experience', this.copyProps)
  }
  addDuty = (e) => {
    this.copyProps[this.getIndex(e)].duties.push('')

    this.props.updateAppState('experience', this.copyProps)
  }

  addNewExp = () => { 
    const newObj = {
      companyName: '',
      position: '',
      startDate: ' ',
      endDate: '',
      duties: []
    }
    this.copyProps.push(newObj)
    this.props.updateAppState('experience', this.copyProps)
  }
  deleteExp = (e) => {
    this.copyProps.splice(this.getParentIndex(e), 1)
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
                value="+ Duty"
                onClick={this.addDuty}
              />
               <input
                type="button"
                value="Delete Workplace"
                onClick={this.deleteExp}
              />

            </div>
          )        
        })}
        <input
          type="button"
          value="Add Workplace"
          onClick={this.addNewExp}
        />         
      </div>
    )
  }
}
