import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components'
import { Col, Row } from 'react-bootstrap'

const StyledContactBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  font-family: 'Montserrat';
  padding: 15px 45px;
  border-bottom: 1px solid #e5e5e5;
  justify-content: space-between;
  font-size: 0.65rem;

  @media (max-width: 860px) {
    display: none;
  }

  .row {
    max-width: 1200px;
    margin: auto;
    justify-content: space-between;
  }

  svg {
    color: #005f4f;
  }

  span {
    color: #666;
    margin: 0 10px;
  }

  .social {
    a:nth-child(2) {
      border-left: 1px solid #e5e5e5;
      border-right: 1px solid #e5e5e5;
    }
    svg {
      font-size: 0.9rem;
      margin: 0 15px;
    }
  }
`

export default function ContactBar() {
  return (
    <StyledContactBar>
      <Col>
        <Row>
          <div className="contact">
            <span className="email">
              <a href="mailto:info@championlender.com">
                <FontAwesomeIcon icon={faEnvelope} />
                <span>info@championlender.com</span>
              </a>
            </span>
            <span className="location">
              <a
                href="https://goo.gl/maps/ABmiatrBgpRTRgeN6"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span>
                  6900 Tavistock Lakes Blvd Suite 400 Orlando, FL 32827
                </span>
              </a>
            </span>
          </div>
          <div className="social">
            <a
              href="https://www.facebook.com/championlenderbrand"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="https://www.instagram.com/championlender/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.linkedin.com/company/champion-lender/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </Row>
      </Col>
    </StyledContactBar>
  )
}
