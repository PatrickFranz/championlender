import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const StyledImageCard = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  position: relative;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  overflow: hidden;

  .glyph {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    color: var(--white);
    font-size: 25px;
    background-color: var(--secondary-gold);
    padding: 8px 10px 20px 20px;

    border-bottom-left-radius: 100%;

    transition: all 500ms ease;
  }

  &:hover .glyph {
    background-color: var(--primary-green);
  }
  &:hover .title {
    transform: translateY(5px);
  }

  .image {
    transition: all 500ms ease;
    &:hover {
      transform: scale(1.04);
    }
  }
  .title {
    font-family: 'Montserrat';
    padding: 10px 0;
    font-weight: 600;
    transition: all 500ms ease;
  }
`

export default function ImageCard({ image, title, to = '#', glyph }) {
  return (
    <StyledImageCard to={to}>
      <div className="glyph">{glyph}</div>
      <div className="image">{image}</div>
      <div className="title">{title}</div>
    </StyledImageCard>
  )
}
