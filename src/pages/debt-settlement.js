import {
  faCalendarCheck,
  faDollarSign,
  faHandHoldingUsd,
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

const StyledDebtSettlementPage = styled.div`
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
export default function DebtSettlementPage() {
  const pageTitle = 'Debt Settlement'
  const { bg } = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { regex: "/c-debt/" }) {
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
    <StyledDebtSettlementPage>
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
        <Heading heading="We Help Tens Of Thousands Of People Each Month" />
        <Row className="card-row">
          <div className="card-wrap">
            <IconCard
              borderColor="var(--primary-green)"
              title="No Obligations = No Pressure"
              text="Our network of partners can help reduce your debt to up to 50% of current outstanding balances."
              icon={faDollarSign}
            />
          </div>
          <div className="card-wrap">
            <IconCard
              borderColor="var(--primary-green)"
              title="Should I refinance my existing loan?"
              text="With the right settlement program you could accelerate the reduction of your debt faster than making your current payments."
              icon={faHandHoldingUsd}
            />
          </div>
          <div className="card-wrap">
            <IconCard
              borderColor="var(--primary-green)"
              title="Personal Information = Safe & Secure"
              text="Consolidate multiple payments into one low monthly payment to reduce and eventually eliminate your debt faster."
              icon={faCalendarCheck}
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
            Marketing Partners: Debt.com, Consolidated Credit and Lighthouse
            Finance Solutions
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
    </StyledDebtSettlementPage>
  )
}
