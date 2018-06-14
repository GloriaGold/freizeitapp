import React, { Component } from 'react'
import { css } from 'emotion'

const imageStyle = css`
  background-position: center;
  background-size: cover;
  background-repeat: none;
  width: 100%;
  height: 300px;
`

export default class ActivityDetails extends Component {
  render() {
    const { title, description, image } = this.props

    return (
      <div>
        <span>{title}</span>
        <div>{image}</div>
        <div>{description}</div>
      </div>
    )
  }
}
