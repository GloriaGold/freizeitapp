import React, { Component } from 'react'
import styled from 'react-emotion'
import { css } from 'emotion'

const StyledActivity = styled('div')`
  display: flex;
  font-family: sans-serif;
  align-items: center;
  justify-content: space-between;
  height: 65px;
  background: #cbe0e8;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
  text-align: center;
  font-size: 1.3em;
  display: block;
  margin-bottom: 20px;
`

export default class ActivityItem extends Component {
  render() {
    const { text } = this.props
    return <StyledActivity>{text} </StyledActivity>
  }
}
