import React from 'react'

import logo from '../images/logo.svg'

import ValueProposition from '../components/ValueProposition'

import Brand from '../components/Brand'

import CallToAction from '../components/CallToAction'
import Address from '../components/Address'
import FinalWords from '../components/FinalWords'



class IndexPage  extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hoeverKeyword: true,
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 350) {
      this.setState({ hasScrolled:true})
    } else {
      this.setState({ hasScrolled: false})
    }
  }
  render() {
    return (
  <div>
    <div className="HeroContainer">
      <section className="Header">
        <img src={logo} />
      </section>
      <section className="Hero">
        <ValueProposition />
        <CallToAction />
      </section>
    </div>
    <section className={this.state.hasScrolled ? "Footer FooterScrolled" : "Footer" }>
      <div className="GridContainer">
        <Address />
        <Brand />
      </div>
      <FinalWords />
    </section>
  </div>
)}
}

export default IndexPage
