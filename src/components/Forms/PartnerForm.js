import React, { useEffect, useState } from 'react'
import { StyledFormWrapper, StyledForm, handleInput } from './StyledForm'
import { useForm } from 'react-hook-form'
import { validateEmail, validatePhone } from '../../util/utils'
import Button from '../Buttons/button'
import { Spinner } from 'react-bootstrap'

export default function PartnerForm() {
  const [isSubmit, setSubmit] = useState(false)
  useEffect(() => {
    const inputEls = Array.from(document.getElementsByClassName('input-field'))
    inputEls.forEach(elem => {
      if (elem.value) {
        elem.labels[0].style.top = '-100%'
      }
    })
  }, [])

  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data, ev) => {
    console.log('submitting...')
    setSubmit(true)

    console.log(data, ev)
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': ev.target.getAttribute('name'),
        ...data,
      }),
    })
      .then(() => {
        setSubmit(false)
        console.log('Submitted successfully')
      })
      .catch(error => alert(error))
  }
  return (
    <StyledFormWrapper>
      <StyledForm onSubmit={handleSubmit(onSubmit)} netlify name="partner-form">
        <input type="hidden" name="form-name" value="partner-form" />
        <div className="wrap-input">
          <input
            id="full_name"
            className="input-field"
            {...register('full_name', { required: '* Required' })}
            type="text"
            onInput={handleInput}
          />
          <label htmlFor="full_name">
            Full Name
            {errors.full_name && (
              <span className="invalid">{errors.full_name.message}</span>
            )}
          </label>
        </div>
        <div className="wrap-input">
          <input
            id="company_name"
            className="input-field"
            type="text"
            name="company_name"
            onInput={handleInput}
            {...register('company_name', {
              required: '* Required',
              minLength: { value: 3, message: '* Invalid: Too Short' },
            })}
          />
          <label htmlFor="company_name">
            Company Name
            {errors.company_name && (
              <span className="invalid">{errors.company_name.message}</span>
            )}
          </label>
        </div>
        <div className="wrap-input">
          <input
            type="email"
            name="email_address"
            id="email_address"
            className="input-field"
            onInput={handleInput}
            {...register('email_address', {
              validate: validateEmail,
            })}
          />
          <label htmlFor="email_address">
            Email Address
            {errors.email_address &&
              errors.email_address.type === 'validate' && (
                <span className="invalid">* Invalid email address</span>
              )}
          </label>
        </div>

        <div className="wrap-input">
          <input
            type="phone"
            name="phone"
            id="phone"
            className="input-field"
            onInput={handleInput}
            {...register('phone', {
              validate: validatePhone,
            })}
          />
          <label htmlFor="phone">
            Phone
            {errors.phone && errors.phone.type === 'validate' && (
              <span className="invalid">* Invalid Phone Number</span>
            )}
          </label>
        </div>
        <div className="wrap-input">
          <input
            type="title"
            name="title"
            id="title"
            className="input-field"
            onInput={handleInput}
          />
          <label htmlFor="title">Title</label>
        </div>
        <div className="wrap-input">
          <select
            type="select"
            name="industry"
            id="industry"
            className="input-field"
            onInput={handleInput}
          >
            <option value="" aria-label="blank"></option>
            <option value="Personal Loans">Personal Loans</option>
            <option value="Mortgage Loans">Mortgage Loans</option>
            <option value="Business Loans">Business Loans</option>
            <option value="Reverse Mortgages">Reverse Mortgages</option>
            <option value="Student Loans">Student Loans</option>
            <option value="Auto Loans">Auto Loans</option>
            <option value="Credit Repair">Credit Repair</option>
            <option value="Debt Settlement">Debt Settlement</option>
            <option value="Other">Other</option>
          </select>
          <label htmlFor="industry">Industry</label>
        </div>
        <div className="wrap-input span-all">
          <textarea
            rows="2"
            name="comments"
            id="comments"
            className="input-field"
            onInput={handleInput}
          />
          <label htmlFor="comments">Comments</label>
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
            Send Request
          </Button>
        </div>
      </StyledForm>
    </StyledFormWrapper>
  )
}
