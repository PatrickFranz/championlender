import { graphql, useStaticQuery } from 'gatsby'
import { StyledHero } from './StyledHero'
import { getImage } from 'gatsby-plugin-image'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from '../Buttons/button'

export default function Hero() {
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
