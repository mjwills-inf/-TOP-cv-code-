import React, { Component } from 'react'

export default class StatementEdit extends Component {

  dataChange = (e) => {
    // this.props.updateAppState('statement', this.state.newStatement)  
  }  

  render() {

    return (
      <div className="statement-edit-div">
        <input 
          type="textarea"
          name="statement"
          value={this.props.data}
          onChange={this.dataChange}
        />
        
      </div>
    )
  }
}
