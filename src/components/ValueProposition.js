import React from 'react'
import styled from 'styled-components'
import TextLoop from 'react-text-loop'
import staticdata from '../../staticdata.json'

const WowKeyword = styled.h1`
  font-size: 48px;
  font-weight: 900;
  line-height: 1.4;
  color: transparent;
  -webkit-background-clip: text; /* Seems we can't rely on autoprefixer for this */
  background-clip: text;
  position: relative;
  background-image: linear-gradient(30deg, #fee140, #fa709a);
  display: inline-block;
  margin: 0;
  padding-left: 24px;
  @media (max-width: 1050px) {
    padding-left: 0px;
  }
  @media (max-width: 600px) {
    font-size: 34px;
    display: block;

  }
`

const WowLine = styled.h1`
  ${'' /* display: inline-block;  */} font-size: 48px;
  font-weight: 900;
  @media (max-width: 1050px) {
    max-width: 520px;
  }
  @media (max-width: 600px) {
    font-size: 34px;
  }
`

const GrabAttention = props => (
  <div>
    <WowLine>I can help you with
    <br className="Hide MobileShow"/>
    <TextLoop speed={2000}>
      {staticdata.keywords.map(keyword => <WowKeyword>#{keyword}</WowKeyword>)}
    </TextLoop>
    </WowLine>
  </div>
)

export default GrabAttention
