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
        <h3>General Informatoin</h3>
        <label htmlFor="firstName">First Name:</label>
        <input
          id="firstName" 
          type="text" 
          name="firstName" 
          value={this.props.data.firstName}
          onChange={this.dataChange}
        />
        <label htmlFor="surname">Surname:</label>
        <input
          id="surname" 
          type="text" 
          name="surname" 
          value={this.props.data.surname}
          onChange={this.dataChange}
        />
        <label htmlFor="surname">Position:</label>
        <input
          id="surname" 
          type="text" 
          name="position" 
          value={this.props.data.position}
          onChange={this.dataChange}
        />
        <label htmlFor="phone">Phone:</label>
        <input
          id="phone" 
          type="text" 
          name="phone" 
          value={this.props.data.phone}
          onChange={this.dataChange}
        />
        <label htmlFor="email">Email:</label> 
        <input
          id="email" 
          type="text" 
          name="email" 
          value={this.props.data.email}
          onChange={this.dataChange}
        />
        <label htmlFor="website">Website:</label>
        <input
          id="website" 
          type="text" 
          name="website" 
          value={this.props.data.website}
          onChange={this.dataChange}
        />
        <label htmlFor="addressLine1">Address:</label> 
        <input
          id="addressLine1" 
          type="text" 
          name="addressLine1" 
          value={this.props.data.addressLine1}
          onChange={this.dataChange}
        />
        <label htmlFor="addressLine2"></label>
        <input
          id="addressLine2" 
          type="text" 
          name="addressLine2" 
          value={this.props.data.addressLine2}
          onChange={this.dataChange}
        />
        <label htmlFor="postcode">Postcode:</label>
        <input
          id="postcode" 
          type="text" 
          name="postcode" 
          value={this.props.data.postcode}
          onChange={this.dataChange}
        />
        <label htmlFor="city">City:</label>
        <input
          id="city" 
          type="text" 
          name="city" 
          value={this.props.data.city}
          onChange={this.dataChange}
        />
        <label htmlFor="country">Country:</label>
        <input
          id="country" 
          type="text" 
          name="country" 
          value={this.props.data.country}
          onChange={this.dataChange}
        />
      </div>
    )
  }
}
