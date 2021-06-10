import React, { useEffect, useState } from 'react'
import { StyledForm, handleInput } from './StyledForm'
import { useForm } from 'react-hook-form'
import { validateEmail, validatePhone } from '../../util/utils'
import Button from '../Buttons/button'
import { Spinner } from 'react-bootstrap'
import Heading from '../Heading'
import styled from 'styled-components'
import { navigate } from 'gatsby-link'

const StyledFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
`

export default function ConactForm() {
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
        navigate('/thank-you')
      })
      .catch(error => alert(error))
  }
  return (
    <StyledFormWrapper>
      <Heading
        heading="Send Us A Message"
        width="90%"
        align="left"
        margin="20px 0 50px"
      />
      <StyledForm
        onSubmit={handleSubmit(onSubmit)}
        data-netlify="true"
        name="contact-form"
      >
        <input
          type="hidden"
          name="form-name"
          value="contact-form"
          {...register('form-name')}
        />
        <div className="wrap-input">
          <input
            id="first_name"
            name="first_name"
            className="input-field"
            {...register('first_name', { required: '* Required' })}
            type="text"
            onInput={handleInput}
          />
          <label htmlFor="first_name">
            First Name
            {errors.first_name && (
              <span className="invalid">{errors.first_name.message}</span>
            )}
          </label>
        </div>
        <div className="wrap-input">
          <input
            id="last_name"
            name="last_name"
            className="input-field"
            {...register('last_name', { required: '* Required' })}
            type="text"
            onInput={handleInput}
          />
          <label htmlFor="last_name">
            First Name
            {errors.last_name && (
              <span className="invalid">{errors.last_name.message}</span>
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
            id="phone"
            name="phone"
            type="phone"
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

        <div className="wrap-input span-all">
          <textarea
            id="comments"
            name="comments"
            rows="2"
            className="input-field"
            onInput={handleInput}
            {...register('comments')}
          />
          <label htmlFor="comments">Message</label>
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
            Send Message
          </Button>
        </div>
      </StyledForm>
    </StyledFormWrapper>
  )
}
