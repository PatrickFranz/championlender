import React from 'react'
import styled from 'styled-components'
import { BgImage } from 'gbimage-bridge'
import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import Button from '../Buttons/button'

const StyledPartner = styled(BgImage)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 75px 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(4, 95, 79, 0.3) !important;

  .title {
    font-family: 'Mulish';
    color: white;
    font-size: 42px;
    font-weight: 500;
  }
  .text {
    font-family: 'Montserrat';
    color: white;
    font-size: 14px;
    font-weight: 400;
  }
`

export default function PartnerUp() {
  const { bg } = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { regex: "/partnerUp/" }) {
        id
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `)
  return (
    <StyledPartner image={getImage(bg)} alt="" preserveStackingContext>
      <div className="title">
        <p>Partner With Us</p>
      </div>
      <div className="text">
        <p>Join Champion Lender and earn money helping people save money.</p>
      </div>
      <Button text="Request for Partnership" />
    </StyledPartner>
  )
}
