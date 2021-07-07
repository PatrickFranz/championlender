import { navigate } from 'gatsby-link'
import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import Button from '../Buttons/button'

const StyledZipForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: left;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 40px;
  gap: 40px;
  margin: 0 50px;

  @media (max-width: 768px) {
    margin: 0;
  }
  .wrap-input {
    font-family: 'Montserrat';
    font-size: 16px;
    display: flex;
    flex-direction: column;
    width: 100%;
    input {
      padding: 10px;
    }
  }
  .button-bar {
    display: flex;
    justify-content: space-between;
  }
  .invalid {
    color: var(--invalid);
    margin-left: 10px;
  }
`

export default function ZipForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data, ev) => {
    console.log('submitting...')

    setTimeout(() => {
      navigate(`/apply?zip=${watch('zipCode')}&application=${ev.target.id}`)
    }, 500)
  }
  return (
    <StyledZipForm onSubmit={handleSubmit(onSubmit)}>
      <h6>Enter your Zip code to Start The Application</h6>
      <div className="wrap-input">
        <label htmlFor="zipCode">
          Zip Code
          {errors.zipCode && (
            <span className="invalid">{errors.zipCode.message}</span>
          )}
        </label>
        <input
          id="zipCode"
          className="input-field"
          {...register('zipCode', {
            required: '* Required',
            pattern: {
              value: /^[0-9]{5}(?:-[0-9]{4})?$/,
              message: 'Not a valid Zip',
            },
            maxLength: { value: 5, message: 'Not a valid Zip' },
          })}
          type="text"
        />
      </div>
      <div className="button-bar">
        <Button id="refi" type="button" handleClick={handleSubmit(onSubmit)}>
          Refinance Existing Loan
        </Button>
        <Button id="new" type="button" handleClick={handleSubmit(onSubmit)}>
          Apply For New Loan
        </Button>
      </div>
    </StyledZipForm>
  )
}
