import React, { Component } from 'react'
import styled from 'react-emotion'
import bookmarkImage from '../images/bookmark_icon.svg'
import bookmarkClickedImage from '../images/bookmark__clicked.svg'

const StyledActivity = styled('div')`
  display: flex;
  font-family: sans-serif;
  align-items: center;
  justify-content: space-between;
  height: 65px;
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
  text-align: center;
  font-size: 1.3em;
  display: block;
  margin-bottom: 20px;
  color: grey;
  box-shadow: 10px 5px 5px #f1dcf1;
`

export default class ActivityItem extends Component {
  render() {
    const { text, isBookmarked } = this.props
    const StyledButton = styled('button')`
      height: 20px;

      background-image: url(${isBookmarked
        ? bookmarkClickedImage
        : bookmarkImage});
      background-color: transparent;
      background-size: cover;
      border: none;
      color: white;
      &:not(:last-child) {
        margin-right: 2px;
      }
    `

    return (
      <StyledActivity>
        <StyledButton
          isBookmarked={isBookmarked}
          onClick={e => this.props.onBookmark()}
        />{' '}
        {text}
      </StyledActivity>
    )
  }
}
