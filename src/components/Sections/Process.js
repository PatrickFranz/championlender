import {
  faBalanceScaleLeft,
  faClipboard,
  faHandPointUp,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
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

const StyledProcessCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  max-width: 350px;
  max-height: 400px;

  .icon {
    padding: 35px;
    border: 10px solid var(--white);
    border-radius: 50%;
    background: #f3f3f3;
    position: relative;

    svg {
      position: absolute;
      font-size: 30px;
      top: 30%;
      left: 35%;
      color: var(--secondary-gold);
    }

    .step {
      position: absolute;
      font-family: 'Montserrat';
      top: -10px;
      right: -5px;
      color: var(--white);
      background-color: var(--primary-green);
      padding: 6px 8px;
      border-radius: 50%;
      font-size: 12px;
      font-weight: 600;
    }
  }
  .title {
    font-family: 'Mulish';
    font-weight: 700;
    font-size: 22px;
    text-transform: capitalize;
  }

  .text {
    font-family: 'Montserrat';
    font-size: 15px;
    color: #666;
    font-family: Montserrat;
    font-weight: 400;
    letter-spacing: 0px;
    font-style: normal;
  }
`

const ProcessCard = ({ icon, step, title, text }) => {
  return (
    <StyledProcessCard>
      <div className="icon">
        <FontAwesomeIcon icon={icon} />
        <span className="step">{step}</span>
      </div>
      <div className="title">{title}</div>
      <div className="text">{text}</div>
    </StyledProcessCard>
  )
}

export default function Process() {
  return (
    <StyledProcessSection>
      <Heading
        superHeading="A Quick &amp; Transparent Process"
        heading="How Champion Lender Works"
      />
      <div className="card-wrap">
        <ProcessCard
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
        <ProcessCard
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
        <ProcessCard
          icon={faBalanceScaleLeft}
          title="Compare Rates & Terms"
          text="With one form you are able to compare rates and terms from multiple accredited lenders including Champion Lenders."
          step="03"
        />
      </div>
    </StyledProcessSection>
  )
}
