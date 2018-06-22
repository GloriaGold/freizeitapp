import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import styled from 'react-emotion'
import { css } from 'emotion'

import bookmarkImage from '../images/bookmark_icon.svg'
import bookmarkClickedImage from '../images/bookmark__clicked.svg'

const StyledActivity = styled('div')`
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  background: white;
  border-radius: 18px;
  overflow: hidden;
  margin: 30px 14px;
  padding: 10px;
  box-shadow: 3px 2px 40px 0.1px rgba(165, 128, 207, 0.32);
`
const textStyle = css`
  font-family: sans-serif;
  text-align: left;
  font-size: 24px;
  letter-spacing: 0.02em;
  text-decoration: none;
  color: #9b9b9b;
`
export default class ActivityItem extends Component {
  render() {
    const { text, isBookmarked, id } = this.props

    const StyledButton = styled('button')`
      height: 20px;
      background-image: url(${isBookmarked
        ? bookmarkClickedImage
        : bookmarkImage});
      background-color: transparent;
      background-size: cover;
      border: none;
      color: white;
    `

    return (
      <StyledActivity>
        <Link className={textStyle} to={`/information/${id}`}>
          {text}
        </Link>
        <StyledButton onClick={e => this.props.bookmark(this.props.id)} />
      </StyledActivity>
    )
  }
}
