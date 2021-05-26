import { StaticImage } from 'gatsby-plugin-image'
import React, { useEffect, useState } from 'react'
import { Col, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap'
import styled from 'styled-components'
import scrollTo from 'gatsby-plugin-smoothscroll'

import { Link } from 'gatsby'
import ContactBar from './contactBar'

import {
  faHome,
  faSyncAlt,
  faHandHoldingUsd,
  faFileInvoiceDollar,
  faSearch,
  faComments,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledNavbar = styled.div`
  background-color: white;
  background-size: cover;
  background-position: bottom;
  transition: all 250ms ease-in-out;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: start;
  padding-right: 10px;
  position: relative;
  z-index: 99;

  .row {
    max-width: 1200px;
    margin: auto;
    justify-content: space-between;
  }

  .pri-nav {
    display: flex;
    flex-direction: row;
    width: 100%;

    .navbar {
      width: 100%;
      padding: 0;

      .navbar-nav {
        align-items: center;
      }
    }
  }

  #basic-navbar-nav {
    background: white;
    text-align: center;
    justify-content: flex-end;
    align-items: center;

    @media (max-width: 770px) {
      margin: auto;
      padding-bottom: 10px;
    }
  }

  &.small {
    padding: 0 5px;

    .contact-bar {
      font-size: 0.5rem;
    }
    .navbar-nav .nav-link {
      font-size: 1.25rem;
    }
    .navbar-brand h2 {
      font-size: 1.5rem;
    }
    .navbar-brand .gatsby-image-wrapper {
      width: 50px;
    }
  }

  .navbar-brand {
    display: flex;
    margin: 0;
    margin-left: 20px;
    color: var(--accent-1);
    justify-content: center;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    .gatsby-image-wrapper {
      transition: all 250ms ease;
      width: 100px;
    }
  }
  .navbar-nav {
    .nav-link {
      color: var(--nav_typography-color);
      font-family: 'Mulish';
      font-size: 0.8rem;
      text-transform: uppercase;
      font-weight: bold;
      padding-right: 35px;

      @media (max-width: 1070px) {
        padding-right: 20px;
      }

      &:hover {
        color: var(--menu_hover_first_color);
      }
    }
    .nav-link.active {
      color: var(--menu_hover_first_color);
    }
  }
  .dropdown {
    .dropdown-menu {
      .dropdown-item {
        .nav-link {
          font-family: 'Montserrat' !important;
          font-weight: 500;
          color: var(--nav_typography-color);
          .menu-glyph {
            margin-right: 10px;
            color: var(--menu_hover_first_color);
          }
          &:hover .menu-glyph {
            color: var(--menu-glyph-color-hover);
          }
        }
      }
    }
  }
  #support-wrap {
    padding-right: 0;
    .support-glyph {
      font-size: 35px;
      color: var(--menu_hover_first_color);
      float: left;
      margin: 0 10px;

      @media (max-width: 1090px) {
        font-size: 25px;
      }
    }
    .text-wrap {
      display: flex;
      flex-direction: column;
      font-size: 20px;
      line-height: 14px;
      margin-top: 8px;
      @media (max-width: 1090px) {
        font-size: 15px;
      }

      & > span {
        font-size: 0.6rem;
        font-weight: 500;
      }
    }
  }
  .seperator:after {
    content: '';
    border: none;
    border-right: 1px solid #e5e5e5;
  }

  @media (max-width: 1090px) {
    h2 {
      font-size: 1.5rem;
    }
    .navbar-nav {
      .nav-link {
        font-size: 12px;
      }
    }
  }

  @media (max-width: 790px) {
    .navbar-nav {
      align-items: flex-start;
    }
    height: 90px;
    .navbar-brand .gatsby-image-wrapper {
      width: 50px;
    }
  }

  @media (max-width: 660px) {
    height: 70px;
    padding: 0 5px;
    .navbar-brand h2 {
      display: none;
    }
  }
`

export default function HeaderNav() {
  const [small, setSmall] = useState(false)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () =>
        setSmall(window.pageYOffset > 100)
      )
    }
  }, [])

  return (
    <StyledNavbar className={`${small ? 'small' : ''}`}>
      <ContactBar />
      <Col>
        <Row>
          <div className="pri-nav">
            <Navbar expand="md" expanded={expanded}>
              <Navbar.Brand onClick={() => scrollTo('#home')}>
                <StaticImage
                  src="../images/champion-logo.png"
                  alt="Champion Group logo"
                  placeholder="blurred"
                  width={97}
                  height={100}
                />
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                onClick={() => setExpanded(!expanded)}
              />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="justify-content-end">
                  <Link
                    className="nav-link"
                    onClick={() => setExpanded(false)}
                    to="/"
                    activeClassName="active"
                  >
                    About
                  </Link>
                  <NavDropdown title="Products" id="basic-nav-dropdown">
                    <NavDropdown.Item>
                      <Link
                        className="nav-link"
                        onClick={() => setExpanded(false)}
                        to="/"
                        activeClassName="active"
                      >
                        <span className="menu-glyph">
                          <FontAwesomeIcon icon={faHome} />
                        </span>
                        Mortgage Loans
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link
                        className="nav-link"
                        onClick={() => setExpanded(false)}
                        to="/"
                        activeClassName="active"
                      >
                        <span className="menu-glyph">
                          <FontAwesomeIcon icon={faSyncAlt} />
                        </span>
                        Reverse Mortgage
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link
                        className="nav-link"
                        onClick={() => setExpanded(false)}
                        to="/"
                        activeClassName="active"
                      >
                        <span className="menu-glyph">
                          <FontAwesomeIcon icon={faSearch} />
                        </span>
                        Home Search
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link
                        className="nav-link"
                        onClick={() => setExpanded(false)}
                        to="/"
                        activeClassName="active"
                      >
                        <span className="menu-glyph">
                          <FontAwesomeIcon icon={faHandHoldingUsd} />
                        </span>
                        Credit Repair
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link
                        className="nav-link"
                        onClick={() => setExpanded(false)}
                        to="/"
                        activeClassName="active"
                      >
                        <span className="menu-glyph">
                          <FontAwesomeIcon icon={faFileInvoiceDollar} />
                        </span>
                        Debt Settlement
                      </Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Link
                    className="nav-link"
                    onClick={() => setExpanded(false)}
                    to="/terms-of-use"
                    activeClassName="active"
                  >
                    Blog
                  </Link>
                  <Link
                    className="nav-link"
                    onClick={() => setExpanded(false)}
                    to="/terms-of-use"
                    activeClassName="active"
                  >
                    Partner with us
                  </Link>
                  <Link
                    className="nav-link"
                    onClick={() => setExpanded(false)}
                    to="/terms-of-use"
                    activeClassName="active"
                  >
                    Contact us
                  </Link>
                  <div className="seperator"></div>
                  <Link
                    className="nav-link"
                    onClick={() => setExpanded(false)}
                    to="/terms-of-use"
                    activeClassName="active"
                    id="support-wrap"
                  >
                    <span className="support-glyph">
                      <FontAwesomeIcon icon={faComments} />
                    </span>
                    <span className="text-wrap">
                      <span>Contact for support</span>
                      (407) 638-8774
                    </span>
                  </Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </Row>
      </Col>
    </StyledNavbar>
  )
}
