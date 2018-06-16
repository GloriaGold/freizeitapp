import React, { Component } from 'react'
import styled from 'react-emotion'
import css from 'react-emotion'
import favoriteIcon from '../images/favoriteIconSVG.svg'

const StyledFooter = styled('div')`
  grid-row: 3;
  display: flex;
  justify-content: space-evenly;
  background-color: white;
`

export default class Footer extends Component {
  render() {
    return (
      <StyledFooter>
        <button onClick={this.props.toggleFilter}>
          <img src={favoriteIcon} />
        </button>
      </StyledFooter>
    )
  }
}
