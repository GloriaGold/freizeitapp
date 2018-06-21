import React, { Component } from 'react'
import styled from 'react-emotion'

import favoriteIcon from '../images/favoriteIconSVG.svg'

const StyledFooter = styled('div')`
  display: flex;
  justify-content: space-evenly;
  background-color: white;
  position: fixed;
  bottom: 0;
  width: 100%;
  border-top: 1px solid lightgrey;
  padding: 4px 0;
`

export default class Footer extends Component {
  render() {
    return (
      <StyledFooter>
        <button onClick={this.props.toggleFilter}>
          <img src={favoriteIcon} alt="icon" />
        </button>
      </StyledFooter>
    )
  }
}
