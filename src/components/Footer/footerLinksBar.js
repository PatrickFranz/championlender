import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import {
  faEnvelope,
  faHistory,
  faMapMarkerAlt,
  faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import styled from 'styled-components'

const StyledLinksBar = styled.div`
  color: var(--white);
  display: flex;
  margin: 50px 100px 0;
  padding: 0 50px;
  font-family: 'Montserrat';
  font-size: 14px;
  flex-wrap: wrap;

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
export default function FooterLinksBar() {
  return (
    <StyledLinksBar>
      <Col>
        <div className="small-heading">COMPARE RATES THE SECURE WAY</div>
        <p>
          All data processed through Champion Lender is encrypted with the
          latest 256-bit encryption technology.
        </p>
        <StaticImage src="../../images/SSL-white.png" alt="SSL Logo" />
      </Col>
      <Col>
        <div className="small-heading">DISCLOSURES</div>
        <ul>
          {/* <li>
            <Link to="/">Definitions</Link>
          </li> */}
          <li>
            <Link to="/tos">Terms of Service</Link>
          </li>
          <li>
            <Link to="/advertising-disclosure">Advertising Disclosure</Link>
          </li>
          <li>
            <Link to="/privacy">Privacy Policy</Link>
          </li>
          {/* <li>
            <Link to="/">Unsubscribe</Link>
          </li> */}
          <li>
            <Link to="/ccpa">California Consumer Privacy Act</Link>
          </li>
          <li>
            <Link to="/premier-partners">Premier Partners</Link>
          </li>
        </ul>
      </Col>
      <Col>
        <div className="small-heading">PRODUCTS</div>
        <ul>
          <li>
            <Link to="/mortgage-loans">Mortgage Loans</Link>
          </li>
          <li>
            <Link to="/reverse-mortgages">Reverse Mortgages</Link>
          </li>
          <li>
            <Link to="/credit-repair">Credit Repair</Link>
          </li>
          <li>
            <Link to="/debt-settlement">Debt Settlement</Link>
          </li>
        </ul>
      </Col>
      <Col>
        <div className="small-heading">FIND US</div>
        <Row>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <a
            href="https://goo.gl/maps/4rkXCUimJ8N5g78N6"
            rel="noreferrer"
            target="_blank"
          >
            6900 Tavistock Lakes Blvd Suite 400 Orlando, FL 32827
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
            href="https://www.facebook.com/championlenders"
            className="social-icon"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="/https://www.instagram.com/championlender/"
            className="social-icon"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="/https://www.linkedin.com/company/champion-lender/about/"
            className="social-icon"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </Row>
      </Col>
    </StyledLinksBar>
  )
}
