import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'
import CcpaModal from './CcpaModal'
import CookieModal from './cookieModal'
import CookieConsent from 'react-cookie-consent'

const StyledFooter = styled.footer`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  padding: 20px 30px;
  color: var(--copyright_text_color);
  background-color: var(--footer-background);
  margin: 8rem 0 0;
  border-top: 1px solid var(--primary);

  .CookieConsent {
    padding: 0 50px;
    color: var(--white);
    align-items: center !important;

    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }

  span {
    font-size: 13px;
  }

  .links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  & a,
  span > span {
    text-decoration: underline !important;
    text-underline-offset: 5px;
    cursor: pointer;
  }

  a:hover {
    color: var(--secondary-gold);
  }

  @media (max-width: 670px) {
    span {
      font-size: 0.75rem;
    }
  }

  .right {
    text-align: right;
    align-items: center;
    margin: auto 0;

    @media (max-width: 980px) {
      text-align: center;
      justify-content: center;
      align-items: center;
      margin: auto;
    }
  }

  .left {
    text-align: left;
    margin: auto 0;

    @media (max-width: 980px) {
      text-align: center;
      justify-content: center;
      align-items: center;
      margin: auto;
    }
  }
`

export default function Footer() {
  const [showCcpa, setShowCcpa] = useState(false)
  const [showCookie, setShowCookie] = useState(false)
  return (
    <StyledFooter>
      <span className="left">
        <CcpaModal show={showCcpa} onHide={() => setShowCcpa(false)} />
        <CookieModal show={showCookie} onHide={() => setShowCookie(false)} />
        Copyright &copy;{new Date().getFullYear()} Champion Lender | All Rights
        Reserved.
      </span>
      <span className="links centered">
        <a
          href="#ccpaModal"
          role="navigation"
          aria-label="CCPA Disclosure dialog"
          onClick={() => setShowCcpa(true)}
        >
          CCPA Disclosure
        </a>
        <a
          href="#cookieModal"
          role="navigation"
          aria-label="Cookie policy dialog"
          onClick={() => setShowCookie(true)}
        >
          Cookie Policy
        </a>
      </span>
      <span className="right">
        Developed by{' '}
        <a href="https://www.thechampiongroupinc.com"> The Champion Group</a>
      </span>
      <CookieConsent
        buttonStyle={{
          color: 'var(--white)',
          fontSize: '18px',
          backgroundColor: 'var(--primary)',
        }}
        buttonText="Got it"
      >
        <h4>Cookies</h4>
        We use cookies and other tracking technologies to improve your browsing
        experience on our website, to show you personalized content, to analyze
        our website traffic, and to understand where our visitors are coming
        from.
      </CookieConsent>
    </StyledFooter>
  )
}
