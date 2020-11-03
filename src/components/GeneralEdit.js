import React, { Component } from 'react'

export default class GeneralEdit extends Component {
  
  state={
    newGeneral: this.props.data
  }

  dataChange = (e) => {
    let targetState = this.state.newGeneral    
    targetState[e.target.name] = e.target.value
    this.setState({targetState})
    // this.props.updateAppState('general', this.state.newGeneral)  
  }
  
  render() {


    
    
    return (
      
      <div className = 'general-edit-div'>
        <input 
          type="text" 
          name="firstName" 
          value={this.state.newGeneral.firstName}
          onChange={this.dataChange}
        />
         <input 
          type="text" 
          name="surname" 
          value={this.state.newGeneral.surname}
          onChange={this.dataChange}
        />
         <input 
          type="text" 
          name="position" 
          value={this.state.newGeneral.position}
          onChange={this.dataChange}
        />
         <input 
          type="text" 
          name="phone" 
          value={this.state.newGeneral.phone}
          onChange={this.dataChange}
        />
         <input 
          type="text" 
          name="email" 
          value={this.state.newGeneral.email}
          onChange={this.dataChange}
        />
         <input 
          type="text" 
          name="website" 
          value={this.state.newGeneral.website}
          onChange={this.dataChange}
        /> 
        <input 
          type="text" 
          name="addressLine1" 
          value={this.state.newGeneral.addressLine1}
          onChange={this.dataChange}
        />
         <input 
          type="text" 
          name="addressLine2" 
          value={this.state.newGeneral.addressLine2}
          onChange={this.dataChange}
        />
         <input 
          type="text" 
          name="postcode" 
          value={this.state.newGeneral.postcode}
          onChange={this.dataChange}
        />
        <input 
          type="text" 
          name="city" 
          value={this.state.newGeneral.city}
          onChange={this.dataChange}
        />
        <input 
          type="text" 
          name="country" 
          value={this.state.newGeneral.country}
          onChange={this.dataChange}
        />
        

      </div>
    )
  }
}
