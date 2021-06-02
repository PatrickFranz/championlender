import React from 'react'
import Seo from '../components/seo'

import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import PageBanner from '../components/PageBanner/PageBanner'
import Heading from '../components/Heading'
import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'
import {
  faCommentDollar,
  faMedal,
  faMoneyCheck,
  faSearchDollar,
} from '@fortawesome/free-solid-svg-icons'
import IconCard from '../components/Cards/IconCard'
import { Col, Row } from 'react-bootstrap'
import TeamSection from '../components/Sections/teamSection'

const StyledAboutPage = styled.div`
  overflow: hidden;
  .about {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 50px;
    padding: 0 5px;
    gap: 20px;

    @media (max-width: 768px) {
      margin: 10px;
    }

    .about-image {
      flex: 1;
    }
    .about-text {
      flex: 1;
      min-width: 50%;

      p {
        font-family: 'Montserrat';
        font-size: 16px;
        padding: 0 40px;

        @media (max-width: 768px) {
          padding: 0 10px;
        }
      }
      p.first {
        margin-top: 20px;
      }
    }
  }
  .no-stress {
    background-color: var(--seafoam);
    padding: 70px;

    @media (max-width: 768px) {
      padding: 10px;
    }

    .subHeading {
      font-family: 'Montserrat';
      text-align: center;
      font-size: 16px;
      margin: 0;
    }

    .card-wrap {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;

      .row {
        justify-content: center;
      }
      .card-frame {
        background-color: var(--white);
        padding: 40px 50px;
        margin: 20px;
        border-radius: 5px;

        @media (max-width: 768px) {
          padding: 40px 20px;
        }
      }
    }
  }
`
export default function AboutPage() {
  const pageTitle = 'About Us'
  const { bg, aboutImg } = useStaticQuery(graphql`
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
      aboutImg: file(relativePath: { regex: "/about-page/" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `)

  return (
    <StyledAboutPage>
      <Seo title={pageTitle} />
      <PageBanner bgImage={getImage(bg)} title={pageTitle} />
      <div className="about">
        <div className="about-img">
          <GatsbyImage image={getImage(aboutImg)} alt="" />
        </div>
        <div className="about-text">
          <Heading
            superHeading="ABOUT CHAMPION LENDER"
            heading="Champion Lender was created to help people find the best loan for them while saving them time and money."
            align="left"
            width="90%"
            margin="0 auto"
          />
          <p className="first">
            We understand how complicated it is to pick the right lender for
            your loan needs. That’s why we simplified the process of finding a
            lender to get the money you need. You no longer have to visit dozens
            of websites, fill out numerous requests or stand in line at a local
            store. If we cannot help you with your loan in house, we will submit
            your information through our secure form to one of the participating
            lenders in our network that meet the same quality and security
            standards and guidelines we’ve set. The lenders we work with are
            willing to help you get the money you need. Each lender in our
            network has made the loan decision process quick and simple, and a
            loan agreement that you can review and sign online in most cases.
          </p>
          <p>
            We look forward to helping you with your personal lending needs. Let
            us be your Champion.
          </p>
        </div>
      </div>
      <div className="no-stress">
        <Heading
          heading="Getting A Loan Doesn’t Have To Be Stressful"
          align="center"
          margin="20px auto"
        />
        <p className="subHeading">
          If you are shopping for a loan, ask yourself these questions to help
          you find the right loan:
        </p>
        <div className="card-wrap">
          <Col>
            <Row>
              <div className="card-frame">
                <IconCard
                  icon={faMedal}
                  title="What do I hope to accomplish?"
                  text="If you want to consolidate or refinance existing debt, for example, then it is important that your new loan is at a lower interest rate than your current loan(s) so you save money in the long run. If you are shopping for a new loan, you will want to make sure the payments on your new loan are affordable."
                  background="var(--white)"
                  borderColor="var(--primary-green)"
                  width="500px"
                />
              </div>
              <div className="card-frame">
                <IconCard
                  icon={faSearchDollar}
                  title="How much will it cost?"
                  text="Compare interest rates, but don’t forget to check out fees as well. Also make sure you are comparing loans of a similar length. With a car loan, for example, the shorter the term, the lower the interest rate."
                  background="var(--white)"
                  borderColor="var(--primary-green)"
                  width="500px"
                />
              </div>
            </Row>
            <Row>
              <div className="card-frame">
                <IconCard
                  icon={faCommentDollar}
                  title="How will I pay it off?"
                  text="Before you borrow, make sure your payment is affordable and that you have room in your budget to make that payment each month.
            Typically, unsecured loans (such as personal loans and debt consolidation loans) carry higher interest rates than secured loans (such as car or mortgage loans). The interest rate you’ll pay will depend in part on your credit scores. But that doesn’t mean you can’t get a loan if you have poor credit. Some lenders offer financing to consumers with bad credit, though the interest rate will be higher."
                  background="var(--white)"
                  borderColor="var(--primary-green)"
                  width="500px"
                />
              </div>
              <div className="card-frame">
                <IconCard
                  icon={faMoneyCheck}
                  title="What is my credit score?"
                  text="It’s a good idea to check your credit score before you apply so you’ll have an idea where you stand. Then try to avoid applying for loans you aren’t likely to get. With Credit.com’s Free Credit Report Card, you will get your credit score for free, and be matched with offers from lenders.
                  Once you get you get your loan, make sure you make your payments on time to avoid late fees and to keep your credit rating strong."
                  background="var(--white)"
                  borderColor="var(--primary-green)"
                  width="500px"
                />
              </div>
            </Row>
          </Col>
        </div>
      </div>
      <TeamSection />
    </StyledAboutPage>
  )
}
