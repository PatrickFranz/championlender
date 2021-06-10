import React from 'react'
import Seo from '../components/seo'

import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import PageBanner from '../components/PageBanner/PageBanner'
import styled from 'styled-components'

const StyledPremierParnersPage = styled.div`
  .content-wrap {
    display: flex;
    justify-content: space-around;
    font-family: 'Montserrat';
    font-size: 15px;
    color: #666;

    ul {
      list-style: none;
    }
  }
`

export default function TosPage() {
  const pageTitle = 'Premier Partners'
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
    <StyledPremierParnersPage>
      <Seo title={pageTitle} />
      <PageBanner bgImage={getImage(bg)}>
        <h1 className="heading">{pageTitle}</h1>
      </PageBanner>
      <div className="content-wrap">
        <ul>
          <li>AAG</li>
          <li>American Dream Mortgage</li>
          <li>Cardinal Financial</li>
          <li>Coastal Pacific Landing</li>
          <li>The Credit Pros</li>
          <li>Cross Country Mortgage</li>
          <li>Crystal Lending Group</li>
          <li>Debt.com</li>
        </ul>
        <ul>
          <li>GoodLife Reverse</li>
          <li>Great Mortgage</li>
          <li>Hallmark Mortgage</li>
          <li>HomeTap</li>
          <li>HomeTap</li>
          <li>Leap Theory</li>
          <li>Lending Tree</li>
          <li>LoanBright</li>
        </ul>
        <ul>
          <li>LoanGoal</li>
          <li>Mortgage Link</li>
          <li>New American Funding</li>
          <li>Nexa</li>
          <li>Nutter Home Loans</li>
          <li>Open Mortgage</li>
          <li>Unique Media</li>
          <li>USA Mortgage</li>
        </ul>
      </div>
    </StyledPremierParnersPage>
  )
}
