import React from 'react'
import { BgImage } from 'gbimage-bridge'
import styled from 'styled-components'

const StyledBanner = styled(BgImage)`
  padding: 100px;
  color: var(--white);
  background-color: ${props =>
    props.darken ? 'rgba(20, 30, 40, 0.6) !important' : 'initial'};
  opacity: 1 !important;
  background-position: ${props => props.position || 'center'};

  @media (max-width: 1200px) {
    padding: 75px 20px;
    .heading {
      font-size: 28px;
    }
  }
  @media (max-width: 768px) {
    padding: 20px;
    .heading {
      font-size: 28px;
    }
  }
`
export default function PageBanner({ children, bgImage, position, darken }) {
  return (
    <StyledBanner image={bgImage} alt="" position={position} darken={darken}>
      {children}
    </StyledBanner>
  )
}
