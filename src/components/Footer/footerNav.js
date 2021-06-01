import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import styled from 'styled-components'

const StyledFooterNav = styled.div`
  .row {
    justify-content: space-between;
    margin: 0 200px;
    padding-bottom: 50px;
    border-bottom: 1px solid var(--light-gray-seperator);

    .logo-wrap {
      display: flex;
      gap: 10px;

      .gatsby-image-wrapper {
        padding: 10px;
      }
    }

    .nav-links {
      color: var(--white);

      .small-heading {
        text-transform: uppercase;
        position: relative;
        padding-bottom: 5px;
        font-family: "Mulish"
        font-weight: 400;
        font-size: 16px;

        :after {
          content: '';
          position: absolute;
          width: 50px;
          bottom: 0;
          left: 0;
          border-bottom: 3px solid var(--secondary-gold);
        }
      }

      ul {
        list-style: none;
        display: inline-flex;
        padding-top: 20px;
        margin: 0;

        li {
          font-family: 'Montserrat';
          font-size: 15px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.6);

          a {
            color: rgba(255, 255, 255, 0.6);
          }
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
