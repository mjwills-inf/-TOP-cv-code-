import React, { Component } from 'react'

export default class GeneralEdit extends Component {


  
  dataChange = (e) => {
    let propsCopy = this.props.data
    propsCopy[e.target.name] = e.target.value   
    this.props.updateAppState('general', propsCopy)  
  }
  
  render() {
    
    return (
      
      <div className = 'general-edit-div'>
        <input 
          type="text" 
          name="firstName" 
          value={this.props.data.firstName}
          onChange={this.dataChange}
        />
         <input 
          type="text" 
          name="surname" 
          value={this.props.data.surname}
          onChange={this.dataChange}
        />
         <input 
          type="text" 
          name="position" 
          value={this.props.data.position}
          onChange={this.dataChange}
        />
         <input 
          type="text" 
          name="phone" 
          value={this.props.data.phone}
          onChange={this.dataChange}
        />
         <input 
          type="text" 
          name="email" 
          value={this.props.data.email}
          onChange={this.dataChange}
        />
         <input 
          type="text" 
          name="website" 
          value={this.props.data.website}
          onChange={this.dataChange}
        /> 
        <input 
          type="text" 
          name="addressLine1" 
          value={this.props.data.addressLine1}
          onChange={this.dataChange}
        />
         <input 
          type="text" 
          name="addressLine2" 
          value={this.props.data.addressLine2}
          onChange={this.dataChange}
        />
         <input 
          type="text" 
          name="postcode" 
          value={this.props.data.postcode}
          onChange={this.dataChange}
        />
        <input 
          type="text" 
          name="city" 
          value={this.props.data.city}
          onChange={this.dataChange}
        />
        <input 
          type="text" 
          name="country" 
          value={this.props.data.country}
          onChange={this.dataChange}
        />
        

      </div>
    )
  }
}
