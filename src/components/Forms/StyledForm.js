import styled from 'styled-components'

export const StyledFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const StyledForm = styled.form`
  --invalid: #c0392b;

  display: grid;
  grid-template-columns: repeat(2, minmax(300px, 1fr));
  justify-content: center;
  font-size: 1.25rem;
  font-family: 'Montserrat', sans-serif;
  gap: 20px;

  @media (max-width: 790px) {
    grid-template-columns: repeat(1, minmax(300px, 1fr));
  }

  .wrap-input {
    position: relative;
    transition: all 250ms ease-in-out;
    width: 100%;
  }

  .tcpa-wrap {
    display: grid;
    grid-auto-columns: auto;
    grid-template-columns: 50px 1fr;
    grid-column: 1/-1;

    label {
      text-transform: none;
      top: -5px;
      font-size: 0.8rem;
      font-weight: normal;
    }
  }

  h3 {
    grid-column: 1/-1;
    margin-bottom: 2rem;
  }

  label {
    position: relative;
    top: -50%;
    text-transform: uppercase;
    font-size: 16px;
    transition: all 250ms ease-in-out;
    color: #7f8c8d;

    @media (max-width: 425px) {
      font-size: 14px;
    }

    .invalid {
      position: absolute;
      white-space: nowrap;
      color: var(--invalid);
      margin-left: 10px;
      font-size: 11px;
      justify-content: baseline;
      align-self: flex-start;
    }
  }

  input,
  select,
  textarea {
    position: relative;
    border: none;
    width: 100%;
    font-size: 18px;
    border-bottom: 2px solid var(--primary-green);
    background: transparent;
    @media (max-width: 425px) {
      font-size: 16px;
    }

    &:focus {
      outline: none;
      border-bottom: 2px solid var(--secondary-gold);
    }
    &:focus ~ label :not(.tcpa-label) {
      top: -100%;
      color: var(--black);
    }
  }

  select {
    background: transparent;
  }

  textarea:focus {
    border-top: 1px solid #e5e5e5;
    border-left: 1px solid #e5e5e5;
    border-right: 1px solid #e5e5e5;
  }

  textarea,
  input {
    transition: all 500ms ease;
    &:focus label {
      top: -100%;
      color: var(--black);
    }
  }

  .span-all {
    grid-column: 1/-1;
  }
  .button-bar {
    grid-column: 1/-1;
    margin: auto;
  }
`
export const handleInput = e => {
  if (e.target.value) {
    e.target.labels[0].style.top = '-100%'
  } else {
    e.target.labels[0].style.top = '-50%'
  }
}
