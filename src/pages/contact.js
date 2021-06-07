import React from 'react'
import Seo from '../components/seo'

import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import PageBanner from '../components/PageBanner/PageBanner'
import styled from 'styled-components'
import Heading from '../components/Heading'
import { Col, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ContactForm from '../components/Forms/ContactForm'
import {
  faEnvelope,
  faHistory,
  faMapMarkerAlt,
  faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

const StyledContactPage = styled.div`
  .row {
    margin: 50px 100px 0;
  }

  .form-col {
    flex: 2;
  }

  .map-wrap {
    margin: 50px 0;
  }

  @media (max-width: 525px) {
    .row {
      margin: 20px 10px 0;
    }
  }
`
const StyledGetInTouch = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat';
  font-size: 14px;
  flex-wrap: wrap;
  flex: 1;

  .two-col > div {
    margin: 0 20px;
  }

  @media (max-width: 768px) {
    margin: 50px 10px 0;
    padding: 0 10px;
  }

  .col {
    padding: 10px;
    flex-wrap: wrap;
    min-width: 300px;

    .row {
      flex-wrap: nowrap;
      align-items: baseline;
      gap: 10px;
      margin: 10px 0;

      svg {
        position: relative;
        color: var(--secondary-gold);
        top: 3px;
        transition: all 250ms ease;
      }

      .social-icon {
        font-size: 24px;
        margin: 0 10px;

        &:hover svg {
          color: var(--primary-green);
        }
      }
    }

    ul {
      list-style: none;
      margin: 0;

      li {
        font-family: 'Montserrat';
        font-size: 15px;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.6);
        padding: 0;
        margin: 2px 0;
      }
    }
  }
`

export default function ContactPage() {
  const pageTitle = 'Contact Us'
  const { bg } = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { regex: "/contact-banner/" }) {
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
    <StyledContactPage>
      <Seo title={pageTitle} />
      <PageBanner bgImage={getImage(bg)} title={pageTitle} />
      <Row className="two-col">
        <StyledGetInTouch>
          <Heading
            heading="Get In Touch"
            align="left"
            width="90%"
            margin="20px 0"
          />
          <Col>
            <Row>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <a
                href="https://goo.gl/maps/4rkXCUimJ8N5g78N6"
                rel="noreferrer"
                target="_blank"
              >
                6900 Tavistock Lakes Blvd Suite 400 <br />
                Orlando, FL 32827
              </a>
            </Row>
            <Row>
              <FontAwesomeIcon icon={faPhoneAlt} />
              <a href="tel:(407)638-8774" rel="noreferrer">
                (407)638-8774
              </a>
            </Row>
            <Row>
              <FontAwesomeIcon icon={faEnvelope} />
              <a href="mailto:info@championlender.com" rel="noreferrer">
                info@championlender.com
              </a>
            </Row>
            <Row>
              <FontAwesomeIcon icon={faHistory} />
              <p>
                Mon-Fri: 9:00AM - 5:00PM
                <br />
                Sat-Sun: Closed
              </p>
            </Row>
            <Row>
              <a
                href="/"
                className="social-icon"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="/"
                className="social-icon"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="/"
                className="social-icon"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </Row>
          </Col>
        </StyledGetInTouch>
        <Col className="form-col">
          <ContactForm />
        </Col>
      </Row>
      <Col className="map-wrap">
        <iframe
          title="google-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.544544611805!2d-81.28117088492327!3d28.372616382520942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dd89c979d1498b%3A0x51b035298d161ef2!2sAnthony%20Almeida%20at%20Guaranteed%20Rate!5e0!3m2!1sen!2sus!4v1623084044208!5m2!1sen!2sus"
          width="100%"
          height="500"
          loading="lazy"
        ></iframe>
      </Col>
    </StyledContactPage>
  )
}
