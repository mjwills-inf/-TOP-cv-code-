import React, { Component } from 'react'

export default class CvFormat extends Component {
  render() {
    console.log("cv format", this.props)

    const { firstName, surname, position, phone, email, country, city, postcode,
        addressLine1, addressLine2, website } = this.props.data.general

    const statement = this.props.data.statement
    const skills = this.props.data.skills
    
    const fullname = `${firstName} ${surname}`;

    return (
      <div className="cv-format-div">

        <div className="general">
          <div className="name-title-div">
            <h3>{ fullname }</h3>
            <h4>{ position }</h4>
          </div>
          <div className="address-div">
            <p>{ addressLine1 }</p>
            <p>{ addressLine2 !== '' ? addressLine2 : '' }</p>
            <p>{ city }</p>
            <p>{ postcode }</p>
            <p>{ country }</p>
          </div>
          <div className="contact-div">
            <p>{ phone }</p>
            <p>{ email }</p>
            <p>{ website }</p>
          </div>
        </div>

        <div className="statement-div">
          { statement }
        </div>

        <div className="skills-div">

        </div>

      </div>
    )
  }
}
