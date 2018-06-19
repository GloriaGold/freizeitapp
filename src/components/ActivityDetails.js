import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { css } from 'emotion'
import styled from 'react-emotion'

import backArrow from '../images/backArrow.svg'
import FooterView from '../containers/FooterView'

const Grid = styled('div')`
  display: grid;
  grid-template-rows: 104px auto 47px;
  background-color: #d6c1f5;
  height: 100vh;
  font-family: 'HelveticaNeue-Regular', sans-serif;
`

const Section = styled('section')`
  background-color: #d6c1f5;
  padding: 0 12px;
  margin-bottom: 12px;
`
const Header = styled('header')`
  grid-row: 1;
  margin: 25px 37px;
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  background-color: #d6c1f5;
  color: white;
  font-size: 16px;
`
const Title = styled('div')`
  font-size: 28px;
  margin: 6px auto;
  text-align: center;
  text-transform: uppercase;
`
const imageStyle = css`
  background-size: 10%;
  width: 100%;
  height: auto;
  margin-top: -126px;
`
const textBox = css`
  grid-row: 2;
  height: 330px;
  background-color: white;
  border-radius: 18px;
  margin: 140px 10px 0 10px;
  padding: 0 18px;
`
const innerText = css`
  font-size: 18;
  line-height: 1.6em;
  font-weight: 200;
  margin-top: 20px;
  height: 100px;
  color: #9b9b9b;
`
const subtitleStyling = css`
  margin-top: 26px;
  font-weight: Medium;
  color: #4a4a4a;
  font-size: 24px;
`

export default class ActivityDetails extends Component {
  render() {
    const { activity, subtitle, description, image } = this.props

    return (
      <div>
        <Grid>
          <Header>
            <Link to={`/`}>
              <img src={backArrow} alt="backArrow" />
            </Link>
            <Title>{activity}</Title>
          </Header>
          <Section>
            <div className={textBox}>
              <img className={imageStyle} src={image} alt="activity" />
              <div className={subtitleStyling}>ich bin ein Untertitel </div>
              <div className={innerText}>{description}</div>
            </div>
          </Section>
          <FooterView />
        </Grid>
      </div>
    )
  }
}
