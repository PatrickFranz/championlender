import React from 'react'
import styled from 'styled-components'

const StyledHeading = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${props =>
    props.align === 'left'
      ? 'flex-start'
      : props.align === 'right'
      ? 'flex-end'
      : 'center'};
  text-align: ${props => props.align || 'center'};
  margin: ${props => props.margin || '70px auto'};
  max-width: ${props => props.width || '50%'};

  @media (max-width: 690px) {
    max-width: 100%;
  }

  .superHeading {
    font-family: 'Montserrat';
    font-size: 14px;
    text-transform: uppercase;
  }
  .heading {
    font-family: 'Mulish';
    font-size: 42px;

    @media (max-width: 768px) {
      font-size: 32px;
    }
    @media (max-width: 425px) {
      font-size: 26px;
    }
  }

  .seperator {
    min-width: 100px;
    margin-top: 20px;
    border: none;
    border-bottom: 2px solid var(--primary-green);
  }
`

export default function Heading({
  superHeading,
  heading,
  align,
  seperator = true,
  width,
  margin,
}) {
  return (
    <StyledHeading align={align} width={width} margin={margin}>
      <h4 className="superHeading">{superHeading}</h4>
      <h2 className="heading">{heading}</h2>
      {seperator && <div className="seperator"></div>}
    </StyledHeading>
  )
}
