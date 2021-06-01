import { Carousel, Row } from 'react-bootstrap'
import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import { BgImage } from 'gbimage-bridge'
import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

import Button from '../Buttons/button'

const StyledCarouselWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0 100px;

  .carousel {
    width: 80%;

    @media (max-width: 768px) {
      width: 100%;
    }

    .carousel-item {
      position: relative;
      height: 400px;
      width: 100%;

      .carousel-caption {
        display: flex;
        flex-direction: column;
        font-family: 'Montserrat';
        font-size: 15px;
        align-items: flex-start;

        @media (max-width: 375px) {
          font-size: 12px;
        }

        h1 {
          font-family: 'Mulish';
          margin-bottom: 10px;
          font-weight: bold;
          @media (max-width: 768px) {
            font-size: 25px;
          }
          @media (max-width: 375px) {
            font-size: 22px;
          }
        }

        svg {
          margin-right: 10px;
          font-size: 20px;
        }

        .row {
          text-align: left;
          margin: 10px 0;
          flex-wrap: nowrap;
        }
      }
    }
  }
`

const StyledBgImage = styled(BgImage)`
  background-position: center top;
  width: 100%;
  height: 100%;
  opacity: 1 !important;
  background-color: rgba(20, 30, 40, 0.7) !important;
`

export default function ProductCarousel() {
  const { home, reverse, credit, debt } = useStaticQuery(graphql`
    query {
      home: file(relativePath: { regex: "/c-home/" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      reverse: file(relativePath: { regex: "/c-reverse/" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      credit: file(relativePath: { regex: "/c-credit/" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      debt: file(relativePath: { regex: "/c-debt/" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `)

  return (
    <StyledCarouselWrap>
      <Carousel>
        <Carousel.Item>
          <Carousel.Caption>
            <h1>Mortgage Loans</h1>
            <Row>
              <FontAwesomeIcon icon={faCheckCircle} />
              <span>
                Purchase a new home, whether it's your first home or your dream
                home
              </span>
            </Row>
            <Row>
              <FontAwesomeIcon icon={faCheckCircle} />
              <span>
                Refinance an existing home to get a lower rate or to consolidate
                your bills
              </span>
            </Row>
            <Row>
              <FontAwesomeIcon icon={faCheckCircle} />
              <span>Tap into your home's equity and get cash on hand</span>
            </Row>
            <Row>
              <Button text="Get Started" />
            </Row>
          </Carousel.Caption>
          <StyledBgImage image={getImage(home)} alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
            <h1>Reverse Mortgages</h1>
            <Row>
              <FontAwesomeIcon icon={faCheckCircle} />
              <span>
                Tap into your home's equity to eliminate your monthly mortgage
                payments
              </span>
            </Row>
            <Row>
              <FontAwesomeIcon icon={faCheckCircle} />
              <span>
                Have access to addition cash to help you live a better
                retirement
              </span>
            </Row>
            <Row>
              <FontAwesomeIcon icon={faCheckCircle} />
              <span>Continue living in your home for as long as you like</span>
            </Row>
            <Row>
              <Button text="Get Started" />
            </Row>
          </Carousel.Caption>
          <StyledBgImage image={getImage(reverse)} alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
            <h1>Credit Repair</h1>
            <Row>
              <FontAwesomeIcon icon={faCheckCircle} />
              <span>
                Credit professionals who help you tackle your credit issues
              </span>
            </Row>
            <Row>
              <FontAwesomeIcon icon={faCheckCircle} />
              <span>
                Negotiate with creditors to remove or reduce delinquencies on
                your credit report
              </span>
            </Row>
            <Row>
              <FontAwesomeIcon icon={faCheckCircle} />
              <span>Strategize on helping you rebuild your credit</span>
            </Row>
            <Row>
              <Button text="Get Started" />
            </Row>
          </Carousel.Caption>
          <StyledBgImage image={getImage(credit)} alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
            <h1>Debt Settlement</h1>
            <Row>
              <FontAwesomeIcon icon={faCheckCircle} />
              <span>
                A qualified professional can help you get out of debt faster
              </span>
            </Row>
            <Row>
              <FontAwesomeIcon icon={faCheckCircle} />
              <span>Reduce the amount of debt you owe</span>
            </Row>
            <Row>
              <FontAwesomeIcon icon={faCheckCircle} />
              <span>Make one low monthly payment</span>
            </Row>
            <Row>
              <Button text="Get Started" />
            </Row>
          </Carousel.Caption>
          <StyledBgImage image={getImage(debt)} alt="" />
        </Carousel.Item>
      </Carousel>
    </StyledCarouselWrap>
  )
}
