import * as React from "react"
import styled from "styled-components"

const StyledHeader = styled.div``

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <h1>{siteTitle}</h1>
  </StyledHeader>
)

export default Header
