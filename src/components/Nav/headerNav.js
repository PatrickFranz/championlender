import { StaticImage } from 'gatsby-plugin-image'
import React, { useEffect, useState } from 'react'
import { Col, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap'
import { StyledNavbar } from './StyledNavbar'
import scrollTo from 'gatsby-plugin-smoothscroll'

import { Link } from 'gatsby'
import ContactBar from '../ContactBar/contactBar'

import {
  faHome,
  faSyncAlt,
  faHandHoldingUsd,
  faFileInvoiceDollar,
  faComments,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
                <Link to="/">
                  <StaticImage
                    src="../../images/champion-logo.png"
                    alt="Champion Group logo"
                    placeholder="blurred"
                    width={100}
                    height={100}
                  />
                </Link>
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
                    to="/about"
                    activeClassName="active"
                  >
                    About
                  </Link>
                  <NavDropdown title="Products" id="basic-nav-dropdown">
                    <NavDropdown.Item>
                      <Link
                        className="nav-link"
                        onClick={() => setExpanded(false)}
                        to="/mortgage-loans"
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
                        to="/reverse-mortgages"
                        activeClassName="active"
                      >
                        <span className="menu-glyph">
                          <FontAwesomeIcon icon={faSyncAlt} />
                        </span>
                        Reverse Mortgage
                      </Link>
                    </NavDropdown.Item>
                    {/* <NavDropdown.Item>
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
                    </NavDropdown.Item> */}
                    <NavDropdown.Item>
                      <Link
                        className="nav-link"
                        onClick={() => setExpanded(false)}
                        to="/credit-repair"
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
                        to="/debt-settlement"
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
                    to="/blog"
                    activeClassName="active"
                  >
                    Blog
                  </Link>
                  <Link
                    className="nav-link"
                    onClick={() => setExpanded(false)}
                    to="/partner"
                    activeClassName="active"
                  >
                    Partner with us
                  </Link>
                  <Link
                    className="nav-link"
                    onClick={() => setExpanded(false)}
                    to="/contact"
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
