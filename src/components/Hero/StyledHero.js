import styled from 'styled-components'
import { BgImage } from 'gbimage-bridge'

export const StyledHero = styled(BgImage)`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  color: white;
  width: 100%;
  line-height: 24px;
  min-height: 90vh;
  background-position: center top;
  font-family: 'Montserrat';
  background-color: rgba(20, 30, 40, 0.5) !important;

  .text-wrap {
    max-width: 80%;
    margin: auto;
    padding: 0 5px;

    @media (max-width: 500px) {
      max-width: 90%;
    }
  }

  .top-heading {
    font-size: 18px;
    font-weight: 600;

    @media (max-width: 790px) {
      font-size: 14px;
    }
  }

  .heading {
    font-family: 'Mulish';
    font-size: 62px;
    font-weight: 400;
    @media (max-width: 790px) {
      font-size: 50px;
    }
    @media (max-width: 480px) {
      font-size: 45px;
    }
  }
  .seperator {
    border: none;
    border-bottom: 2px solid white;
    min-width: 80px;
    margin-bottom: 20px;
  }
`
