import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

const StyledIconCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  max-width: ${props => props.width || '350px'};

  background: ${props => props.background || 'transparent'};

  .icon {
    padding: 35px;
    border: 10px solid ${props => props.borderColor || 'var(--white)'};
    border-radius: 50%;
    background: #f3f3f3;
    position: relative;

    svg {
      position: absolute;
      font-size: 30px;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      color: var(--secondary-gold);
    }

    .step {
      position: absolute;
      font-family: 'Montserrat';
      top: -10px;
      right: -5px;
      color: var(--white);
      background-color: var(--primary-green);
      padding: 6px 8px;
      border-radius: 50%;
      font-size: 12px;
      font-weight: 600;
    }
  }
  .title {
    font-family: 'Mulish';
    font-weight: 700;
    font-size: 22px;
    text-transform: capitalize;
  }

  .text {
    font-family: 'Montserrat';
    font-size: 15px;
    color: #666;
    font-weight: 400;
    letter-spacing: 0px;
    font-style: normal;
  }
`

export default function IconCard({
  background,
  borderColor,
  icon,
  width,
  step,
  title,
  text,
}) {
  return (
    <StyledIconCard
      background={background}
      borderColor={borderColor}
      width={width}
    >
      <div className="icon">
        <FontAwesomeIcon icon={icon} />
        {step && <span className="step">{step}</span>}
      </div>
      <div className="title">{title}</div>
      <div className="text">{text}</div>
    </StyledIconCard>
  )
}
