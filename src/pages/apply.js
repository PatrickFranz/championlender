import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import { Col, Row } from 'react-bootstrap'
import styled from 'styled-components'
import { useLocation } from '@reach/router'
import PageBanner from '../components/PageBanner/PageBanner'
import RefiForm from '../components/Forms/RefiForm'
import Seo from '../components/seo'
import NewLoanForm from '../components/Forms/NewLoanForm'

const StyledApplyPage = styled.div``

export default function ApplyPage() {
  const pageTitle = 'Mortgage Loans'

  const application = new URLSearchParams(useLocation().search).get(
    'application'
  )

  const { bg } = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { regex: "/c-home/" }) {
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
    <StyledApplyPage>
      <Seo title={pageTitle} />
      <PageBanner bgImage={getImage(bg)} darken>
        <h2>Apply</h2>
      </PageBanner>
      <Col>
        <Row>{application === 'refi' && <RefiForm />}</Row>
        <Row>{application === 'new' && <NewLoanForm />}</Row>
      </Col>
    </StyledApplyPage>
  )
}
