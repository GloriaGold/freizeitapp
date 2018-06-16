import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { css } from 'emotion'
import styled from 'react-emotion'

import backArrow from '../images/backArrow.svg'
import locationIcon from '../images/locationIcon.svg'

const Header = styled('header')`
  width: 100%;
  height: 91px;
  background-color: #d6c1f5;
  color: white;
  font-size: 16px;
`
const imageStyle = css`
  background-position: center;
  background-size: 10%;
  width: 313px;
  height: 281px;
  margin: 20px 0px 0px 25px;
`
const textBox = css`
  width: 350px;
  height: 330px;
  background-color: white;
  border-radius: 18px;
  margin: -120px 10px 0px 10px;
`

const background = css`
  background-color: #d6c1f5;
`

const buttonStyle = css`
  background-color: white;
  width: 350px;
  height: 54px;
  color: grey;
  font-size: 22px;
  border-radius: 10px;
  border-color: transparent;
  margin: 35px 0px 20px 8px;
  letter-spacing: 1px;
  font-weight: 100;
`
const innerText = css`
  width: 350px;
  height: 100px;
  color: grey;
  letter-spacing: 1px;
`
export default class ActivityDetails extends Component {
  render() {
    const { activity, description, image } = this.props

    return (
      <div>
        <div className={background}>
          <Header>
            <Link to={`/`}>
              <img src={backArrow} />
            </Link>
            DETAIL
          </Header>
          <span>{activity}</span>
          <img className={imageStyle} src={image} />
          <div className={textBox}>
            <span className={innerText}>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              {description}
            </span>
          </div>
          <button className={buttonStyle}>
            find in Maps<img src={locationIcon} />
          </button>
        </div>
      </div>
    )
  }
}
