import { Link } from 'gatsby'
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

const StyledCTAButton = styled.button`
  --ripple-background: white;
  --ripple-opacity: 0.3;  
  --ripple-duration: 600ms; 

  position: relative;
  background-color: var(--cta);
  color: var(--white);
  border: none;
  border-radius: 2px;
  padding: 1rem 1.25rem;
  font-size: 1rem;
  text-align: center;
  font-weight: 200;
  cursor: pointer;
  overflow: hidden;
  word-wrap: nowrap;
  white-space: nowrap;
  transition: all 250ms ease-in-out;

  @media (max-width: 860px) {
  padding: 0.75rem 1rem;
  font-size: 0.75rem;
    
      }

  &:hover {
    background-color: var(--cta-darken);
  }
  &:before {
    content: '';
    position:absolute;
    display: block;
    background: var(--ripple-background, white);      
    border-radius: 50%;
    pointer-events: none; 
    
    //  get position and size 
    top: calc(var(--y) * 1px);
    left: calc(var(--x) * 1px);
    width:  calc(var(--d) * 1px);
    height: calc(var(--d) * 1px);

    //  animate properties
    opacity: calc(var(--o, 1) * var(--ripple-opacity, 0.3));                
    transition: calc(var(--t, 0) * var(--ripple-duration, 600ms)) var(--ripple-easing,linear);   
    transform: translate(-50%, -50%) scale(var(--s, 1));
    transform-origin: center;
  }
}
`

export default function CTAButton({ type, text, color, href, handler }) {
  const buttonRef = useRef()
  useEffect(() => {
    const el = buttonRef.current
    el.addEventListener('click', e => {
      const event = e.touches ? e.touches[0] : e
      const r = el.getBoundingClientRect()
      const d = Math.sqrt(r.width ** 2 + r.height ** 2) * 2

      // Set CSS vars
      el.style.cssText = `--s: 0; --o: 1;`
      el.offsetTop // eslint-disable-line
      el.style.cssText = `--t: 1; --o: 0; --d: ${d}; --x:${
        event.clientX - r.left
      }; --y:${event.clientY - r.top};`
    })
  }, [])
  return (
    <Link to={href} onClick={handler}>
      <StyledCTAButton ref={buttonRef} type={type} role="button">
        {text}
      </StyledCTAButton>
    </Link>
  )
}
