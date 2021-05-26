import { graphql, useStaticQuery } from 'gatsby'
import { BgImage } from 'gbimage-bridge'
import { getImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import { Col, Row } from 'react-bootstrap'
import Button from './button'

export default function Hero() {
  const StyledHero = styled(BgImage)`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    color: white;
    width: 100%;
    line-height: 24px;
    min-height: 90vh;
    background-position: center top;
    font-family: 'Montserrat';
    background-color: rgba(20, 30, 40, 0.5) !important;

    .text-wrap {
      max-width: 80%;
      margin: auto;
      padding: 0 5px;

      @media (max-width: 500px) {
        max-width: 90%;
      }
    }

    .top-heading {
      font-size: 18px;
      font-weight: 600;

      @media (max-width: 790px) {
        font-size: 14px;
      }
    }

    .heading {
      font-family: 'Mulish';
      font-size: 62px;
      font-weight: 400;
      @media (max-width: 790px) {
        font-size: 50px;
      }
      @media (max-width: 480px) {
        font-size: 45px;
      }
    }
    .seperator {
      border: none;
      border-bottom: 2px solid white;
      min-width: 80px;
      margin-bottom: 20px;
    }
  `
  const { hero } = useStaticQuery(graphql`
    query {
      hero: file(relativePath: { regex: "/hero/" }) {
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
  const heroImg = getImage(hero)

  return (
    <StyledHero image={heroImg} preserveStackingContext>
      <Col className="text-wrap">
        <Row>
          <span className="top-heading">Simple. Transparent. Secure</span>
        </Row>
        <Row>
          <h1 className="heading">
            <strong>Save Time &amp; Money</strong>
            <p> using Champion Lender</p>
          </h1>
        </Row>
        <Row>
          <div className="seperator"></div>
        </Row>
        <Row>
          <Button>Learn More</Button>
        </Row>
      </Col>
    </StyledHero>
  )
}
