import React from 'react'
import { BgImage } from 'gbimage-bridge'
import styled from 'styled-components'

const StyledBanner = styled(BgImage)`
  padding: 150px;
  color: var(--white);

  @media (max-width: 768px) {
    padding: 75px 20px;
    .heading {
      font-size: 28px;
    }
  }
`
export default function PageBanner({ bgImage, title }) {
  return (
    <StyledBanner image={bgImage} alt="">
      <h1 className="heading">{title}</h1>
    </StyledBanner>
  )
}
