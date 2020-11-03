import React, { Component } from 'react'

export default class StatementEdit extends Component {

  state = {
    newStatement: this.props.data
  }

  dataChange = (e) => {
    this.setState({newStatement: e.target.value})
    // this.props.updateAppState('statement', this.state.newStatement)  
  }  

  render() {

    return (
      <div className="statement-edit-div">
        <input 
          type="textarea"
          name="statement"
          value={this.state.newStatement}
          onChange={this.dataChange}
        />
        
      </div>
    )
  }
}
