import React from 'react'
import styled from 'styled-components'
import CopyBar from './copyBar'
import FooterLinksBar from './footerLinksBar'
import FooterNav from './footerNav'

const StyledFooter = styled.footer`
  background-color: var(--footer_bg_color);
  padding-top: 50px;

  a {
    transition: all 250ms ease;
    color: rgba(255, 255, 255, 0.6);
    &:hover {
      color: var(--secondary-gold);
    }
  }

  li,
  p {
    font-family: 'Montserrat';
    font-size: 15px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.6);
  }
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
