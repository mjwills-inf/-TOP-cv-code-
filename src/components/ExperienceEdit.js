import React, { Component } from 'react'

export default class ExperienceEdit extends Component {

  copyProps = this.props.data

  dataChange = (e) => {
    let index = e.target.parentNode.getAttribute('data-key')
    this.copyProps[index][e.target.name] = e.target.value
    this.props.updateAppState('experience', this.copyProps)

  }

  deleteDuty = () => {

  }

  addNewExp = () => {

  }

  deleteExp = () => {

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
            {/* {item.duties.map((itemSk, index) => {
              return (
                <div key={index} data-key={index}>
                  <input 
                    type="text" 
                    value={itemSk}
                    onChange={this.dataChange}
                  />
                  <input 
                    type="button" 
                    value="x"
                    onClick={this.deleteDuty}
                  />
                </div>
              )
            })} */}

            </div>
          )        
        })}         
      </div>
    )
  }
}
