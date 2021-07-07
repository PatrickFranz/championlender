import styled from 'styled-components'

export const StyledFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const StyledStepForm = styled.form`
  display: flex;
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

    p {
      color: #666;
      font-size: 0.9rem;
    }

    label {
      text-transform: none;
      top: -5px;
      font-size: 0.8rem;
      font-weight: normal;
      color: red;
    }
  }

  h3 {
    grid-column: 1/-1;
    margin-bottom: 2rem;
  }
  .centered {
    justify-content: center;
    align-items: center;
    width: 100%;
    text-align: center;
  }
  label :not(.static) {
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

  input :not([type='checkbox']),
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
    &:focus ~ label :not(.tcpa-label) :not(.static),
    &:focus ~ label :not(input[type='radio']) {
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
    &:focus label :not(.static) {
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

  .step {
    min-width: 60vw;
    padding: 50px 100px;
    background-color: var(--seafoam);
  }
`
