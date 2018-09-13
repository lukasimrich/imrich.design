import React from 'react'
import styled from 'styled-components'

import './Valueproposition.css'
import TextLoop from '../components/TextLoop'
import staticdata from '../../staticdata.json'



class GrabAttention extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hoverKeyword: 'nieje',
      hasHovered: false,
    }
  }

  handleHoverOn = (keyword, event) => {
    this.setState({ hoverKeyword: keyword, hasHovered: true })
  }

  handleHoverOff = () => {
    this.setState({ hasHovered: false })
  }

  render() {
    return (
      <div>
        <h1 className="Wowline">
          I can help you with
          <br className="Hide MobileShow" />
          <span className={this.state.hasHovered ? "Show WowKeyword" : "Hide WowKeyword"}>#{this.state.hoverKeyword}</span>
          <span className={this.state.hasHovered ? "Hide" : "Show"}>
          <TextLoop 
            speed={2000}>
            {staticdata.keywords.map(keyword => (
              <div className="WowKeyword">#{keyword}</div>
            ))}
          </TextLoop>
          </span>
        
        </h1>

        <div className="KeywordsGroup">
          {staticdata.keywords.map(keyword => (
            <p
              className="KeywordContainer"
              onMouseEnter={e => this.handleHoverOn(keyword, e)}
              onMouseLeave={this.handleHoverOff}
            >
              {keyword}
            </p>
          ))}
        </div>
      </div>
    )
  }
}

export default GrabAttention
