import React, { Component } from 'react'

export default class General extends Component {
  
  
  render() {

    const { firstName, surname, phone, email, country, city, addressLine1, addressLine2 } = this.props.info.general
    
    const fullname = `${firstName} ${surname}`;

    
    
    return (
      
      <div className = 'general-div'>
        

      </div>
    )
  }
}
