import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  padding: 10px;
  -webkit-box-shadow: 0px 10px 15px -10px #000000;
  box-shadow: 0px 10px 15px -10px #bcbcbc;
  z-index: 1;
  h1 {
    color: var(--secondary);
  }
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <StaticImage
      src="../images/champion-logo.png"
      alt="Champion Group logo"
      placeholder="blurred"
      width={100}
      height={100}
    />
    <h1>The Champion Group</h1>
  </StyledHeader>
)

export default Header
