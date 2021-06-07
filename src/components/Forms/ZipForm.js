import React, { useState } from 'react'
import { Spinner } from 'react-bootstrap'
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
    align-items: center;
    margin: auto;
  }
  .invalid {
    color: var(--invalid);
    margin-left: 10px;
  }
`

export default function ZipForm() {
  const [isSubmit, setSubmit] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data, ev) => {
    console.log('submitting...')
    setSubmit(true)
    setTimeout(() => {
      console.log(data, ev)
      setSubmit(false)
    }, 1000)
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
          {...register('zipCode', { required: '* Required' })}
          type="text"
        />
      </div>
      <div className="button-bar">
        <Button type="submit">
          {isSubmit && (
            <Spinner
              animation="border"
              variant="light"
              size="sm"
              role="status"
            />
          )}
          Continue
        </Button>
      </div>
    </StyledZipForm>
  )
}
