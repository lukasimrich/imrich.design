import React from 'react'
import './KeywordsGroup.css'
import staticdata from '../../staticdata.json'


const Keyword = props => (
    <div className="KeywordContainer">#{props.title}</div>
    )

const KeywordsGroup = () => (
  <div className="KeywordsGroup">
    {staticdata.keywords.map(keyword => (
        <Keyword title={keyword}/>
    ))}
  </div>

)

export default KeywordsGroup
