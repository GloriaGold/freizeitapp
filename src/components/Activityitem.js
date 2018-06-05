import React, { Component } from 'react'
import styled from 'react-emotion'
import { css } from 'emotion'

const quoteStyle = css`
  font-size: 1.3em;
  display: block;
  margin-bottom: 20px;
`

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
`

export default class Activityitem extends Component {
  render() {
    const { text } = this.props
    return <StyledActivity className={quoteStyle}>{text} </StyledActivity>
  }
}
