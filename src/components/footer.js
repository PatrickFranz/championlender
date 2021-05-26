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
  padding: 2rem;
  color: var(--white);
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
    font-size: 1rem;
  }

  .links {
    display: flex;
    flex-direction: column;
  }

  & a,
  span > span {
    color: var(--white);
    text-decoration: underline;
    text-underline-position: under;
    cursor: pointer;
  }

  button {
    background: transparent;
    border: none;
    outline-color: var(--primary);
    border-radius: 0;
    border-bottom: 2px solid var(--white);
    padding: 0;
    padding-bottom: 2px;
    transition: 250ms;
    outline: none;
    box-shadow: none;

    &:hover,
    &:active,
    &:visited,
    &:focus {
      border: none;
      border-bottom: 2px solid var(--white);
      background-color: transparent;
      outline: none;
      box-shadow: none;
    }
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
        <Button
          role="navigation"
          aria-label="CCPA Disclosure dialog"
          onClick={() => setShowCcpa(true)}
        >
          CCPA Disclosure
        </Button>
        <Button
          role="navigation"
          aria-label="Cookie policy dialog"
          onClick={() => setShowCookie(true)}
        >
          Cookie Policy
        </Button>
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
