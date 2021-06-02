import {
  faBalanceScaleLeft,
  faClipboard,
  faHandPointUp,
} from '@fortawesome/free-solid-svg-icons'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import IconCard from '../Cards/IconCard'
import Heading from '../Heading'

const StyledProcessSection = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #e8f9f6;
  margin: 50px auto;
  padding-bottom: 75px;
  width: 100%;

  .card-wrap {
    flex-wrap: wrap;
    position: relative;
    display: flex;
    justify-content: center;
    gap: 30px;
    padding: 5px;

    .next-arrow-wrap {
      position: relative;
      overflow: visible;

      @media (max-width: 1220px) {
        display: none;
      }

      .next-arrow {
        position: absolute;
        width: 150px;
        left: -75px;
        top: 10px;
      }
    }
  }
`

export default function Process() {
  return (
    <StyledProcessSection>
      <Heading
        superHeading="A Quick &amp; Transparent Process"
        heading="How Champion Lender Works"
      />
      <div className="card-wrap">
        <IconCard
          icon={faHandPointUp}
          title="Choose Your Loan Type"
          text="Whether you need a new home loan, refinance an existing loan, or help with your debt, Champion Lender is here to help you."
          step="01"
        />
        <div className="next-arrow-wrap">
          <StaticImage
            className="next-arrow"
            src="../../images/arrow-arc.png"
            alt="Next step arrow"
            backgroundColor="#e8f9f6"
            objectFit="contain"
            objectPosition="absolute"
          />
        </div>
        <IconCard
          icon={faClipboard}
          title="Answer A Few Questions"
          text="In under 2 minutes you can be on your way to getting the help you need. Our website is secure and protects your data."
          step="02"
        />
        <div className="next-arrow-wrap">
          <StaticImage
            className="next-arrow"
            src="../../images/arrow-arc.png"
            alt="Next step arrow"
            objectFit="contain"
            blurredOptions="BLURRED"
            backgroundColor="#e8f9f6"
            transformOptions={{ scaleY: -1 }}
          />
        </div>
        <IconCard
          icon={faBalanceScaleLeft}
          title="Compare Rates & Terms"
          text="With one form you are able to compare rates and terms from multiple accredited lenders including Champion Lenders."
          step="03"
        />
      </div>
    </StyledProcessSection>
  )
}
