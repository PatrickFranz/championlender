import React from 'react'
import Seo from '../components/seo'

import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import PageBanner from '../components/PageBanner/PageBanner'
import styled from 'styled-components'
import { Col, Row } from 'react-bootstrap'

const StyledThankYouPage = styled.div`
  .row {
    justify-content: center;
  }

  .form-col {
    flex: 2;
  }

  @media (max-width: 525px) {
    .row {
      margin: 20px 10px 0;
    }
  }
`

export default function ThankYouPage() {
  const pageTitle = 'Thank You'
  const { bg } = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { regex: "/contact-banner/" }) {
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
    <StyledThankYouPage>
      <Seo title={pageTitle} />
      <PageBanner bgImage={getImage(bg)}>
        <h1 className="heading">{pageTitle}</h1>
      </PageBanner>
      <Col className="content-wrap">
        <Row>
          <p>Thank you for reaching out. Someone will be in touch shortly.</p>
        </Row>
      </Col>
    </StyledThankYouPage>
  )
}
