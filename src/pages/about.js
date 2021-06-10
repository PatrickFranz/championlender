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
  faQuestion,
  faSearchDollar,
  faThumbsUp,
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
      <PageBanner bgImage={getImage(bg)}>
        <h1 className="heading">{pageTitle}</h1>
      </PageBanner>
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
            We understand how complicated and fragmented it is to pick the right
            lender for your home loan needs. We also understand how confusing it
            can be to go through the refinance or home buying process. That’s
            why we created Champion Lender. We give you the valuable tools you
            need to remove the traditional barriers to home ownership. We
            simplified the process of finding a lender to get the money you
            need. You no longer have to visit dozens of websites, fill out
            numerous requests or stand in line at a local branch. If we cannot
            help you with your loan in house, we will submit your information
            through our secure form to one of the participating lenders in our
            network that meet the same quality and security standards and
            guidelines we’ve set. The lenders we work with are willing to help
            you . Each lender in our network has made the loan decision process
            quick and simple.
          </p>
          <p>
            We look forward to helping you with your Home lending needs. Let us
            be your Champion.
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
                  title="How do I choose the right lender?"
                  text="It all starts with our Affordability Calculator. Just fill out some basic information and we will be able to tell you how much you qualify for. Once we have that information we will give you a few options that are right for your profile, yes even if it’s not with us. We partner with hundreds of lenders that can service your loan that are held to the same Champion Standards."
                  background="var(--white)"
                  borderColor="var(--primary-green)"
                  width="500px"
                />
              </div>
              <div className="card-frame">
                <IconCard
                  icon={faSearchDollar}
                  title="What if I don't have the credit?"
                  text="It’s a good idea to check your credit score before you apply so you’ll have an idea where you stand.  With <a href='https://www.credit.com'>Credit.com’s</a> Free Credit Report Card, you will get your credit score for free. We can help you analyze your credit and give you the exact steps you need to take to improve your credit enough to qualify for a home loan. We provide you a credit road map and help you along the way. We also partnered with experts in credit repair and debt settlement to guide you along the way."
                  background="var(--white)"
                  borderColor="var(--primary-green)"
                  width="500px"
                />
              </div>
            </Row>
            <Row>
              <div className="card-frame">
                <IconCard
                  icon={faQuestion}
                  title="Home Buying is Confusing."
                  text="We believe the biggest pain point to home ownership or refinancing is knowledge. The time to learn is NOT in the middle of the process but BEFORE! We’ve created a library of Common Definitions and Frequently Asked Questions to give you as much information as possible. If you cannot find what you are looking for using those resources, do not worry you can Chat with an Expert via Chat or phone call to answer any and all of your questions. No Obligation Necessary! Our goal is to get you as knowledgeable and prepared prior to purchasing a home or refinancing your existing home."
                  background="var(--white)"
                  borderColor="var(--primary-green)"
                  width="500px"
                />
              </div>
              <div className="card-frame">
                <IconCard
                  icon={faThumbsUp}
                  title="I got my pre-approval. How can I find a home?"
                  text="Congrats on your pre-approval! In today’s market most Real Estate agents require you to have a pre-approval letter before they start showing you homes. In the same way we partner with lenders if we cannot service your loan in house, we’ve partnered with hundreds of real estate agents. We will present you a few options of real estate agents that meet our Champion Standards to help you find the home of your dreams and within your budget. Simply choose the agent that feels right for you. We work hand and hand with our agents to make sure this process is as smooth as possible for you."
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
