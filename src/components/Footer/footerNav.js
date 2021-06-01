import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import styled from 'styled-components'

const StyledFooterNav = styled.div`
  .row {
    justify-content: space-between;
    margin: 0 100px;
    padding: 0 50px 50px;
    border-bottom: 1px solid var(--light-gray-seperator);

    @media (max-width: 900px) {
      margin: 50px 10px 0;
      padding: 0 10px 50px;
      gap: 50px;
    }

    .logo-wrap {
      display: flex;
      gap: 10px;

      .gatsby-image-wrapper {
        padding: 10px;
      }
    }

    .nav-links {
      color: var(--white);

      ul {
        list-style: none;
        display: inline-flex;
        margin: 0;

        @media (max-width: 460px) {
          display: inline-block;
        }

        li {
          &:not(:last-child):after {
            content: '|';
            margin: 0 10px;
          }
        }
      }
    }
  }
`

export default function FooterNav() {
  return (
    <StyledFooterNav>
      <Col>
        <Row>
          <div className="logo-wrap">
            <StaticImage
              src="../../images/retina-logo.png"
              alt="Champion Logo"
              width={75}
              height={75}
            />
            <StaticImage
              src="../../images/equalopp-1-1.png"
              alt="Equal Opportunity Logo"
              width={75}
              height={75}
            />
          </div>
          <div className="nav-links">
            <div className="small-heading">Quick Links</div>
            <ul>
              <li>
                <Link to="#">About</Link>
              </li>
              <li>
                <Link to="#">Blog</Link>
              </li>
              <li>
                <Link to="#">Partner With Us</Link>
              </li>
              <li>
                <Link to="#">Contact Us</Link>
              </li>
            </ul>
          </div>
        </Row>
      </Col>
    </StyledFooterNav>
  )
}
