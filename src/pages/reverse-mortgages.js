import {
  faBan,
  faHistory,
  faHome,
  faUserShield,
} from '@fortawesome/free-solid-svg-icons'
import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import styled from 'styled-components'
import IconCard from '../components/Cards/IconCard'
import ZipForm from '../components/Forms/ZipForm'
import PageBanner from '../components/PageBanner/PageBanner'
import Seo from '../components/seo'

const StyledReverseMortgagesPage = styled.div`
  overflow: hidden;
  .text-wrap {
    position: relative;
    min-width: 320px;
    .seperator {
      position: absolute;
      bottom: -15px;
      width: 100px;
      border-bottom: solid 2px var(--white);
    }
  }
  .bullets {
    margin-top: 40px;
    font-size: 16px;
    a {
      color: white;
    }
  }
  .card-col {
    margin: 50px 0;
    padding: 0;

    .card-row {
      gap: 40px;
      justify-content: center;
    }

    .card-wrap {
      background: var(--seafoam);
      padding: 50px 100px;
    }
  }
`

export default function ReverseMortgagesPage() {
  const pageTitle = 'Reverse Mortgages'
  const { bg } = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { regex: "/c-reverse/" }) {
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
    <StyledReverseMortgagesPage>
      <Seo title={pageTitle} />

      <PageBanner bgImage={getImage(bg)} darken>
        <Row>
          <Col>
            <div className="text-wrap">
              <h1 className="heading">{pageTitle}</h1>
              <span className="seperator"></span>
            </div>
            <div className="bullets">
              <p>Is a Reverse Mortgage Right for You?</p>
              <p>No Login, No Registration</p>
            </div>
          </Col>
          <Col>
            <div className="form-wrapper">
              <ZipForm />
            </div>
          </Col>
        </Row>
      </PageBanner>

      <Col className="card-col">
        <Row className="card-row">
          <div className="card-wrap">
            <IconCard
              background="var(--seafoam)"
              borderColor="var(--primary-green)"
              title="5 Minutes = 5 Quotes!"
              text="Champion Lender helps you to start securing a loan, for free, from some of the most trusted lenders in the U.S. Complete our quick online form, and based on your provided information, you will be instantly matched with multiple companies that are eager to earn your business. You’ll have the upper hand in negotiating the deal you want, armed with several competing offers!"
              icon={faHistory}
            />
          </div>
          <div className="card-wrap">
            <IconCard
              background="var(--seafoam)"
              borderColor="var(--primary-green)"
              title="Personal Information = Safe & Secure"
              text="Your information is safeguarded with advanced security measures. Our matching system keeps your information entirely confidential and provides you a customized rate quote so our providers can offer you world-class service."
              icon={faUserShield}
            />
          </div>
          <div className="card-wrap">
            <IconCard
              background="var(--seafoam)"
              borderColor="var(--primary-green)"
              title="No Obligations = No Pressure"
              text="We take pride in working exclusively with professional lenders that are here to provide you with exceptional service to earn your business. Our rate providers will help you find the perfect deal by answering your questions, going over your available options, & offering you competitive rate quotes."
              icon={faBan}
            />
          </div>
          <div className="card-wrap">
            <IconCard
              background="var(--seafoam)"
              borderColor="var(--primary-green)"
              title="What is a reverse mortgage?"
              text="A reverse mortgage is a loan. You are borrowing against your home equity. However, unlike traditional mortgages, with a reverse mortgage you do not have to pay back the money borrowed as long as you are living in the home. Just need to be 62 years or older, the value of the home must be at least 100k and Loan to value ratio less than 50%."
              icon={faHome}
            />
          </div>
        </Row>
        <Row className="product-disclaimer">
          <h6>Disclaimer:</h6>
          <p>
            We are not a loan provider. Rather, we match you with loan
            providers, banks, financial institutions and affiliates
            (collectively, “partners”) to give you, the consumer, an opportunity
            to get information about mortgage products and connect with licensed
            partners that may extend a mortgage product to you. All loan
            approval decisions and terms are determined by our partners at the
            time of your application with them, and there is no guarantee that
            you will be approved for a mortgage product or that you will qualify
            for the advertised rates. By completing the form or calling the
            number listed above, you will be directed to a partner that can
            discuss these mortgage opportunities with you.
          </p>
          <p>
            Products and services are provided exclusively by our partners, and
            rates and terms are subject to change by the partners without
            warranty or notice. Not all offer the same products, rates, or
            options. We encourage you to shop around and explore all of your
            options. We are not affiliated with or endorsed by any government
            entity or agency.
          </p>
          <p>
            By using this site, you acknowledge that you have read and agree to
            the Privacy Policy and Terms & Conditions.
          </p>
        </Row>
      </Col>
    </StyledReverseMortgagesPage>
  )
}
