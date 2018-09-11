import React from 'react'
import styled from 'styled-components'

const KeywordContainer = styled.h2`
  font-size: 16px;
  font-weight: 400;
  color: #90939b;
  text-transform: uppercase;
  display: inline-block;
  padding: 0 16px 16px 0;
  margin: 0;
`

const Keyword = props => (
<KeywordContainer>#{props.title}</KeywordContainer>
)

export default Keyword
