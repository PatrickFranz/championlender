import {
  faPaperPlane,
  faShieldAlt,
  faUnlink,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'

const StyledHeroFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: var(--primary-green);
  padding: 10px;
  justify-content: space-around;

  @media (max-width: 690px) {
    justify-content: left;
  }

  .seperator:after {
    content: '';
    border: none;
    border-right: 1px solid var(--white);
    font-size: 50px;

    @media (max-width: 690px) {
      display: none;
      margin: 10px;
    }
  }
`

const StyledContentCard = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  color: var(--white);
  font-family: 'Mulish';
  @media (max-width: 690px) {
    padding: 20px;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
  svg {
    font-size: 35px;
  }

  .headline {
    font-size: 16px;
    text-transform: uppercase;
  }
  .subline {
    font-family: 'Montserrat';
    font-size: 15px;
    font-weight: 400;
  }
  .text-wrap {
    display: flex;
    flex-direction: column;
  }
`

export default function HeroFooterBar() {
  return (
    <StyledHeroFooter>
      <StyledContentCard>
        <FontAwesomeIcon icon={faPaperPlane} />
        <div className="text-wrap">
          <h4 className="headline">Fast &amp; Free</h4>
          <span className="subline">Fast &amp; Free Application</span>
        </div>
      </StyledContentCard>
      <div className="seperator"></div>
      <StyledContentCard>
        <FontAwesomeIcon icon={faShieldAlt} />
        <div className="text-wrap">
          <h4 className="headline">Safe &amp; Secure</h4>
          <span className="subline">256 Bit Encryption</span>
        </div>
      </StyledContentCard>
      <div className="seperator"></div>
      <StyledContentCard>
        <FontAwesomeIcon icon={faUnlink} />
        <div className="text-wrap">
          <h4 className="headline">No Obligation</h4>
          <span className="subline">No Obligation Application</span>
        </div>
      </StyledContentCard>
    </StyledHeroFooter>
  )
}
