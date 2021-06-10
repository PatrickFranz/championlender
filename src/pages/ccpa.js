import React from 'react'
import Seo from '../components/seo'

import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import PageBanner from '../components/PageBanner/PageBanner'
import styled from 'styled-components'

import Heading from '../components/Heading'

const StyledTosaPage = styled.div`
  .content-wrap {
    font-family: 'Montserrat';
    font-size: 15px;
    color: #666;
  }
`

export default function TosPage() {
  const pageTitle = 'Privacy'
  const { bg } = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { regex: "/cityscape/" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            width: 2000
            webpOptions: { quality: 70 }
            jpgOptions: { quality: 60 }
          )
        }
      }
    }
  `)

  return (
    <StyledTosaPage>
      <Seo title={pageTitle} />
      <PageBanner bgImage={getImage(bg)}>
        <h1 className="heading">{pageTitle}</h1>
      </PageBanner>
      <Heading
        heading="California Consumer Privacy Act (CCPA) Disclosure"
        superHeading="Last Update: 4/7/2021"
        align="left"
        width="90%"
      />
      <div className="content-wrap">
        <p>
          In accordance with the California Financial Privacy Act, if you are a
          resident of the State of California and would like to opt-out from the
          disclosure of your personal informationto any third-party for
          marketing purposes, please contact us at marketing@championleads.co
        </p>
      </div>
    </StyledTosaPage>
  )
}
