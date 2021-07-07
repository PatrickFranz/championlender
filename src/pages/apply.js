import { graphql, Link, useStaticQuery, withPrefix } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import styled from 'styled-components'
import PageBanner from '../components/PageBanner/PageBanner'
import RefiForm from '../components/Forms/RefiForm'
import Seo from '../components/seo'
import NewLoanForm from '../components/Forms/NewLoanForm'
import { useScript } from '../util/hooks'

const StyledApplyPage = styled.div``

export default function ApplyPage() {
  const pageTitle = 'Mortgage Loans'

  const application = new URLSearchParams(window.location.search).get(
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
  console.log(application)
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
