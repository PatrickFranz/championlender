import React from 'react'
import styled from 'styled-components'
import CopyBar from './copyBar'
import FooterLinksBar from './footerLinksBar'
import FooterNav from './footerNav'

const StyledFooter = styled.footer`
  background-color: var(--footer_bg_color);
  padding-top: 50px;
`

export default function footer() {
  return (
    <StyledFooter>
      <FooterNav />
      <FooterLinksBar />
      <CopyBar />
    </StyledFooter>
  )
}
