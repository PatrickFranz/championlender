import {
  faFileInvoiceDollar,
  faHandHoldingUsd,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import ImageCard from '../ImageCard'

const StyledDebtSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  flex-wrap: wrap;
  margin: 0 50px;

  @media (max-width: 480px) {
    margin: 0 5px;
  }
`
export default function Debt() {
  const { creditRepair, debtSettle } = useStaticQuery(graphql`
    query {
      creditRepair: file(relativePath: { regex: "/credit-repair/" }) {
        id
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      debtSettle: file(relativePath: { regex: "/debt-settlement/" }) {
        id
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `)
  return (
    <StyledDebtSection>
      <ImageCard
        image={<GatsbyImage image={getImage(creditRepair)} alt="" />}
        title="Credit Repair"
        glyph={<FontAwesomeIcon icon={faHandHoldingUsd} alt="" />}
      />
      <ImageCard
        image={<GatsbyImage image={getImage(debtSettle)} alt="" />}
        title="Debt Settlement"
        glyph={<FontAwesomeIcon icon={faFileInvoiceDollar} alt="" />}
      />
    </StyledDebtSection>
  )
}
