import React, { Component } from 'react'

export default class General extends Component {
  
  state = {
    edit: false
  }

  render() {

    const { firstName, surname, phone, email, country, city, addressLine1, addressLine2 } = this.props.info
    
    const fullname = `${firstName} ${surname}`;

    
    
    return (
      
      <div className = 'general-div'>
        <h3>Contact Information</h3>
        <div className='general-left'>
          <div className='fullname-div'>{ fullname }</div>
          <div className='email-div'>{ email }</div>
          <div className='phone-div'>{ phone }</div>
        </div>
        <div className='general-right'>
          <h5>Address:</h5>
          <div className='address1-div'>{ addressLine1 }</div>
          
          <div className='address2-div'>{ addressLine2 }</div>
          <div className='city-div'>{ city }</div>
          <div className='country-div'>{ country }</div>

        </div>


      </div>
    )
  }
}
