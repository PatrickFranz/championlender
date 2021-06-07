import React from 'react'
import Seo from '../components/seo'

import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import PageBanner from '../components/PageBanner/PageBanner'
import { Col, Row } from 'react-bootstrap'
import Heading from '../components/Heading'
import styled from 'styled-components'
import PartnerForm from '../components/Forms/PartnerForm'

const StyledPartnerPage = styled.div`
  .col {
    .row {
      margin: 50px 200px;
      justify-content: center;
      align-items: center;

      @media (max-width: 1024px) {
        margin: 50px 100px;
      }
      @media (max-width: 612px) {
        margin: 50px;
      }
      @media (max-width: 425px) {
        margin: 5px;
      }

      .subHeading {
        font-family: 'Montserrat';
        text-align: justify;
        font-size: 16px;
        margin-bottom: 30px;

        @media (max-width: 425px) {
          font-size: 14px;
        }
      }
    }
  }
`

export default function PartnerPage() {
  const pageTitle = 'Partner With Us'
  const { bg } = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { regex: "/cityscape1/" }) {
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
    <StyledPartnerPage>
      <Seo title={pageTitle} />
      <PageBanner bgImage={getImage(bg)}>
        <h1 className="heading">{pageTitle}</h1>
      </PageBanner>
      <Col>
        <Row>
          <Heading
            heading="Join Champion Lender and earn money helping people save money."
            width="90%"
          />
          <p className="subHeading">
            If you are a lender and would like to help our clients with real
            time quotes and ultimately their funding needs please fill the form
            out below and we will contact you shortly on how to get started.
          </p>
        </Row>
        <Row>
          <PartnerForm />
        </Row>
      </Col>
    </StyledPartnerPage>
  )
}
