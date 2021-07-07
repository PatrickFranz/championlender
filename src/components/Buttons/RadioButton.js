import React from 'react'
import styled from 'styled-components'

const StyledRadioButton = styled.span`
  /* display: flex; */
  background-color: var(--primary-green);
  border-radius: 2px;
  color: white;

  label {

    white-space: nowrap ;
    padding: 5px 15px;
    
`

export default function RadioButton({ name, text }) {
  return (
    <StyledRadioButton>
      <label className="static" htmlFor={name}>
        <input type="radio" name={name} id={name} />
        {text}
      </label>
    </StyledRadioButton>
  )
}
