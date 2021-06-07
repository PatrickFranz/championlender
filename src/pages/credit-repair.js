import {
  faSearchDollar,
  faComment,
  faEnvelopeOpenText,
} from '@fortawesome/free-solid-svg-icons'
import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import styled from 'styled-components'
import IconCard from '../components/Cards/IconCard'
import ZipForm from '../components/Forms/ZipForm'
import Heading from '../components/Heading'
import PageBanner from '../components/PageBanner/PageBanner'
import Seo from '../components/seo'

const StyledCreditRepairPage = styled.div`
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
      padding: 20px;
    }
  }
`

export default function CreditRepairPage() {
  const pageTitle = 'Credit Repair'
  const { bg } = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { regex: "/c-credit/" }) {
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
    <StyledCreditRepairPage>
      <Seo title={pageTitle} />
      <PageBanner bgImage={getImage(bg)} darken>
        <Row>
          <Col>
            <div className="text-wrap">
              <h1 className="heading">{pageTitle}</h1>
              <span className="seperator"></span>
            </div>
            <div className="bullets">
              <p>Become Debt Free Sooner</p>
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
        <Heading heading="Find The Best Credit Repair Expert To Help You With The Following Services." />
        <Row className="card-row">
          <div className="card-wrap">
            <IconCard
              borderColor="var(--primary-green)"
              title="No Obligations = No Pressure"
              text="We take pride in working exclusively with professional lenders that are here to provide you with exceptional service to earn your business. Our rate providers will help you find the perfect deal by answering your questions, going over your available options, & offering you competitive rate quotes."
              icon={faComment}
            />
          </div>
          <div className="card-wrap">
            <IconCard
              borderColor="var(--primary-green)"
              title="Should I refinance my existing loan?"
              text="If you’re planning to stay in your home for a while and are refinancing at a lower interest rate, switching off an adjustable rate mortgage, or looking to eliminate private mortgage insurance. You’re a good candidate to refinance. With Today’s rates accessing cash from your equity may give you a better interest rate than getting other loan products such as personal or auto."
              icon={faEnvelopeOpenText}
            />
          </div>
          <div className="card-wrap">
            <IconCard
              borderColor="var(--primary-green)"
              title="Personal Information = Safe & Secure"
              text="Your information is safeguarded with advanced security measures. Our matching system keeps your information entirely confidential and provides you a customized rate quote so our providers can offer you world-class service."
              icon={faSearchDollar}
            />
          </div>
        </Row>
        <Row className="product-disclaimer">
          <h6>Disclaimer:</h6>
          <p>
            If we cannot provide a loan for you in house we will match you with
            loan providers, banks, financial institutions and affiliates
            (collectively, “partners”) to give you, the consumer, an opportunity
            to get information about mortgage products and connect with licensed
            partners that may extend a mortgage product to you. All loan
            approval decisions and terms are determined by our partners at the
            time of your application with them, and there is no guarantee that
            you will be approved for a mortgage product or that you will qualify
            for the advertised rates. By completing the form or calling the
            number listed above, you will be directed to our in house team or
            partner that can discuss these mortgage opportunities with you.
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
            the Privacy Policy and Terms &amp; Conditions.
          </p>
        </Row>
      </Col>
    </StyledCreditRepairPage>
  )
}
