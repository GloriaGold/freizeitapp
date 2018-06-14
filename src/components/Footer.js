import React, { Component } from 'react'
import styled from 'react-emotion'

const StyledFooter = styled('div')`
  grid-row: 3;
  display: flex;
  justify-content: space-evenly;
  background-color: #d6c1f5;
`

export default class Footer extends Component {
  render() {
    return (
      <StyledFooter>
        <button onClick={this.props.toggleFilter}>show favorites</button>
      </StyledFooter>
    )
  }
}
