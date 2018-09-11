import React from 'react'

import logo from '../images/logo.svg'

import KeywordsGroup from '../components/KeywordsGroup'

import ValueProposition from '../components/ValueProposition'

import Brand from '../components/Brand'

import CallToAction from '../components/CallToAction'
import Address from '../components/Address'
import FinalWords from '../components/FinalWords'

const IndexPage = () => (
  <div>
    <div className="HeroContainer">
      <section className="Header">
        <img src={logo} />
      </section>
      <section className="Hero">
        <ValueProposition />
        <KeywordsGroup />
        <CallToAction />
      </section>
    </div>
    <section className="Footer">
      <div className="GridContainer">
        <Address />
        <Brand />
      </div>
      <FinalWords />
    </section>
  </div>
)

export default IndexPage
