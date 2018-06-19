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
  margin-left: 80px;
`
const imageStyle = css`
  background-size: 10%;
  width: 100%;
  height: auto;
  margin-top: -100px;
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
  margin-top: 20px;
  height: 100px;
  color: grey;
  letter-spacing: 1px;
`
const subtitle = css`
  margin-top: 26px;
  color: #313944;
  font-weight: 300;
  font-size: 24px;
`

export default class ActivityDetails extends Component {
  render() {
    const { activity, description, image } = this.props

    return (
      <div>
        <Grid>
          <Header>
            <Link to={`/`}>
              <img src={backArrow} alt="backArrow" />
            </Link>
            <Title>DETAIL</Title>
          </Header>
          <Section>
            <div className={textBox}>
              <img className={imageStyle} src={image} alt="activity" />
              <div className={subtitle}>Ich bin die Teilüberschrift</div>
              <div className={innerText}>{description}</div>
            </div>
          </Section>
          <FooterView />
        </Grid>
      </div>
    )
  }
}
