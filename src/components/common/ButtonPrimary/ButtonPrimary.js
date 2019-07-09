import React, { Component } from 'react'

export default class ButtonPrimary extends Component {
  render() {
    return (
      <button style={{ width: '200px', height: '50px' }} className="btn btn-primary btn-lg">
        {this.props.childern}
      </button>
    )
  }
}

