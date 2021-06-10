import React, { createRef, useEffect, useState } from 'react'
import { Container, Spinner } from 'react-bootstrap'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { validateEmail, validatePhone } from '../../util/utils'
import Button from '../Buttons/button'

const StyledFormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

const handleCheckbox = element => {
  element.target.checked
    ? (element.target.value = 'yes')
    : (element.target.value = 'no')
}

const getAfid = () => {
  return window.location.href.split('AFID=')[1] || '465368'
}

const formRef = createRef()

export default function StartFormHook() {
  const [isSubmit, setSubmit] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const uri = 'https://chlend.linktrustleadgen.com/Lead/434214/SimplePost'

  const onSubmit = (data, e) => {
    setSubmit(true)
    setTimeout(() => {
      formRef.current.submit()
    }, 500)
  }

  console.log(errors)

  useEffect(() => {
    const inputEls = Array.from(document.getElementsByClassName('input-field'))
    inputEls.forEach(elem => {
      if (elem.value) {
        elem.labels[0].style.top = '-100%'
      }
    })
  }, [])

  return (
    <StyledFormWrapper>
      <Container>
        <StyledForm
          onSubmit={handleSubmit(onSubmit)}
          action={uri}
          ref={formRef}
          method="POST"
          name="PartnerUpForm"
          data-netlify={true}
        >
          <input type="hidden" id="leadid_token" {...register('sr_token')} />
          <input
            type="hidden"
            id="campaign_id"
            {...register('campaign_id')}
            value="2"
          />
          <input
            type="hidden"
            id="campaign_key"
            name="campaign_key"
            {...register('campaign_key')}
            value="2"
          />
          <input
            type="hidden"
            id="taskId"
            {...register('taskId')}
            value="PN101"
          />
          <input
            type="hidden"
            name="preferred_phone"
            id="preferred_phone"
            value="Home"
          />
          <input
            type="hidden"
            {...register('Homeowner')}
            id="Homeowner"
            value="1"
          />
          <input type="hidden" {...register('form-name')} value="solar-leads" />
          <input
            type="hidden"
            id="AFID"
            {...register('AFID')}
            value={getAfid()}
          />
          <input type="hidden" id="SID" {...register('SID')} value="76536" />
          <input type="hidden" id="ADID" {...register('ADID')} value="" />
          <input type="hidden" id="ClickID" {...register('ClickID')} value="" />
          <input
            type="hidden"
            id="Solar_Electric"
            {...register('Solar_Electric')}
            value="Yes"
          />
          <input type="hidden" id="SRC" {...register('SRC')} value="1" />
          <input
            type="hidden"
            id="api_action"
            {...register('api_action')}
            value="POST"
          />
          <input type="hidden" id="mode" {...register('mode')} value="full" />
          <input type="hidden" id="type" {...register('type')} value="18" />
          <input
            type="hidden"
            id="landing_page"
            {...register('landing_page')}
            value="https://thesolarchampions.com"
          />
          <input
            type="hidden"
            id="text_verfied"
            {...register('text_verified')}
            value="false"
          />
          <input
            type="hidden"
            id="AffiliateReferenceID"
            {...register('AffiliateReferenceID')}
            value={getAfid()}
          />

          <h3 className="grid-heading">
            Help us find you the best deal on Solar
          </h3>

          <div className="wrap-input">
            <input
              id="utility_provider"
              className="input-field"
              {...register('utility_provider', { required: '* Required' })}
              type="text"
              onInput={handleInput}
            />
            <label htmlFor="utility_provider">
              Utility Provider
              {errors.utility_provider && (
                <span className="invalid">
                  {errors.utility_provider.message}
                </span>
              )}
            </label>
          </div>
          <div className="wrap-input">
            <select
              id="electric_bill"
              className="input-field"
              {...register('electric_bill')}
              onInput={handleInput}
            >
              <option value="1">$0 - $50</option>
              <option value="2">$51 - $100</option>
              <option value="3">$101 - $150</option>
              <option value="4">$151 - $200</option>
              <option value="5">$201 - $300</option>
              <option value="6">$301 - $400</option>
              <option value="7">$401 - $500</option>
              <option value="8">$501 - $600</option>
              <option value="9">$601 - $700</option>
              <option value="10">$701 - $800</option>
              <option value="11">$800+</option>
            </select>
            <label htmlFor="electric_bill">Monthly Electicity Bill</label>
          </div>
          <div className="wrap-input">
            <input
              id="income_amount"
              className="input-field"
              {...register('income_amount', { required: '* Required' })}
              type="number"
              onInput={handleInput}
            />
            <label htmlFor="income_amount">
              Annual Income
              {errors.income_amount && (
                <span className="invalid">{errors.income_amount.message}</span>
              )}
            </label>
          </div>

          <div className="wrap-input">
            <select
              className="input-field"
              id="roof_shading"
              onInput={handleInput}
              {...register('roof_shading')}
            >
              <option value="1">No Shade</option>
              <option value="2">A Little Shade</option>
              <option value="3">A Lot of Shade</option>
              <option value="4">Mostly Shaded</option>
            </select>
            <label htmlFor="roof_shading">Amount of Shade</label>
          </div>
          <div className="wrap-input">
            <select
              className="input-field"
              id="employment_type"
              onInput={handleInput}
              {...register('employment_type')}
            >
              <option value="1">Full-time</option>
              <option value="2">Part-time</option>
              <option value="3">Self-employed</option>
              <option value="4">Not Employed</option>
              <option value="5">Retired</option>
            </select>
            <label htmlFor="employment_type">Employment Status</label>
          </div>
          <div className="wrap-input">
            <select
              className="input-field"
              id="credit_profile"
              {...register('credit_profile')}
              type="text"
              onInput={handleInput}
            >
              <option value="1">Excellent</option>
              <option value="2">Good</option>
              <option value="3">Fair</option>
              <option value="4">Poor</option>
            </select>
            <label htmlFor="credit_profile">Credit Status</label>
          </div>

          <h3>Tell us about yourself</h3>
          <div className="wrap-input">
            <input
              className="input-field"
              id="first_name"
              {...register('first_name', {
                required: '* Required',
                minLength: { value: 2, message: '* Too short' },
              })}
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
              className="input-field"
              id="last_name"
              {...register('last_name', {
                required: '* Required',
                minLength: { value: 2, message: '* Too Short' },
              })}
              type="text"
              onInput={handleInput}
            />
            <label htmlFor="last_name">
              Last Name
              {errors.last_name && (
                <span className="invalid">{errors.last_name.message}</span>
              )}
            </label>
          </div>
          <div className="wrap-input">
            <input
              className="input-field"
              id="email_address"
              {...register('email_address', {
                required: '* Required',
                validate: validateEmail,
              })}
              type="email_address"
              onInput={handleInput}
            />
            <label htmlFor="email_address">
              e-mail
              {errors.email_address &&
                errors.email_address.type === 'validate' && (
                  <span className="invalid">* Invalid email address</span>
                )}
              {errors.email_address &&
                errors.email_address.type !== 'validate' && (
                  <span className="invalid">
                    {errors.email_address.message}
                  </span>
                )}
            </label>
          </div>
          <div className="wrap-input">
            <input
              className="input-field"
              id="phone_primary"
              {...register('phone_primary', {
                required: '* Required',
                validate: async value => await validatePhone(value),
              })}
              type="phone"
              onInput={handleInput}
            />
            <label htmlFor="phone_primary">
              phone
              {errors.phone_primary &&
                errors.phone_primary.type === 'validate' && (
                  <span className="invalid">* Not a valid phone number</span>
                )}
              {errors.phone_primary &&
                errors.phone_primary.type !== 'validate' && (
                  <span className="invalid">
                    {errors.phone_primary.message}?
                  </span>
                )}
            </label>
          </div>
          <div className="wrap-input">
            <input
              className="input-field"
              id="address"
              {...register('address')}
              type="text"
              onInput={handleInput}
            />
            <label htmlFor="address">Address</label>
          </div>
          <div className="wrap-input">
            <input
              className="input-field"
              id="city"
              {...register('city')}
              type="text"
              onInput={handleInput}
            />
            <label htmlFor="city">City</label>
          </div>
          <div className="wrap-input">
            <select
              id="state"
              className="input-field"
              {...register('state', {
                required: '* Required',
              })}
              onInput={handleInput}
            >
              <option value="">&nbsp;</option>
              <option value="AL">AL</option>
              <option value="AK">AK</option>
              <option value="AZ">AZ</option>
              <option value="AR">AR</option>
              <option value="CA">CA</option>
              <option value="CO">CO</option>
              <option value="CT">CT</option>
              <option value="DC">DC</option>
              <option value="DE">DE</option>
              <option value="FL">FL</option>
              <option value="GA">GA</option>
              <option value="HI">HI</option>
              <option value="ID">ID</option>
              <option value="IL">IL</option>
              <option value="IN">IN</option>
              <option value="IA">IA</option>
              <option value="KS">KS</option>
              <option value="KY">KY</option>
              <option value="LA">LA</option>
              <option value="ME">ME</option>
              <option value="MD">MD</option>
              <option value="MA">MA</option>
              <option value="MI">MI</option>
              <option value="MN">MN</option>
              <option value="MS">MS</option>
              <option value="MO">MO</option>
              <option value="MT">MT</option>
              <option value="NE">NE</option>
              <option value="NV">NV</option>
              <option value="NH">NH</option>
              <option value="NJ">NJ</option>
              <option value="NM">NM</option>
              <option value="NY">NY</option>
              <option value="NC">NC</option>
              <option value="ND">ND</option>
              <option value="OH">OH</option>
              <option value="OK">OK</option>
              <option value="OR">OR</option>
              <option value="PA">PA</option>
              <option value="RI">RI</option>
              <option value="SC">SC</option>
              <option value="SD">SD</option>
              <option value="TN">TN</option>
              <option value="TX">TX</option>
              <option value="UT">UT</option>
              <option value="VT">VT</option>
              <option value="VA">VA</option>
              <option value="WA">WA</option>
              <option value="WV">WV</option>
              <option value="WI">WI</option>
              <option value="WY">WY</option>
            </select>
            <label htmlFor="state">
              State
              {errors.state && (
                <span className="invalid">{errors.state.message}</span>
              )}
            </label>
          </div>
          <div className="wrap-input">
            <input
              className="input-field"
              id="zip"
              {...register('zip')}
              type="text"
              onInput={handleInput}
            />
            <label htmlFor="zip">Zip</label>
          </div>

          <div className="wrap-input tcpa-wrap">
            <input
              id="tcpa_consent"
              {...register('tcpa_consent', {
                required: '* Required',
              })}
              type="checkbox"
              onClick={handleCheckbox}
            />
            <label htmlFor="tcpa_consent" className="tcpa-label">
              {errors.tcpa_consent && (
                <span className="invalid">{errors.tcpa_consent.message}</span>
              )}
              <p>
                By clicking the button below, you acknowledge, consent and agree
                to the following: a. Our Privacy Policy and consent to receive
                notices and other communications electronically from Champion
                Lender NMLS# 1619403, SecureRights and our Premier Partners ; b.
                We take your privacy seriously. You are providing express
                written consent for Champion Lender NMLS# 1619403, SecureRights
                and our Premier Partners to share your information with up to
                four 4 of its Premier Partners and for SecureRights, parties
                calling on behalf of Champion Lender NMLS# 1619403 SecureRights
                and our Premier Partners or authorized third parties on their
                behalf to contact you including through automated means; e.g.
                autodialing, text and pre-recorded messaging. about financial
                services or other credit related offers via telephone, mobile
                device -including SMS and MMS- and/or email, even if your
                telephone number is currently listed on any state, federal,
                local or corporate Do Not Call list; c. Consent to be contacted
                is not required in order to purchase goods or services from
                Champion Lender NMLS# 1619403, SecureRights and our Premier
                Partners that contact you. You may choose to speak with an
                individual service provider by dialing 888-883-2062; d/ That I
                have received and reviewed the Mortgage Broker Disclosures for
                my state; and e. You are providing written consent under the
                Fair Credit Reporting Act for Champion Lender NMLS# 1619403,
                SecureRights and our Premier Partners to obtain information from
                your personal credit profile. You authorize Champion Lender
                NMLS# 1619403, SecureRights and our Premier Partners to obtain
                such information solely to prequalify you for credit options and
                connect you with an appropriate lending partner. Champion Lender
                NMLS# 1619403. SecureRights NMLS 3175.
              </p>
            </label>
          </div>

          <div className="button-bar">
            <Button text="Submit" type="submit">
              {isSubmit && (
                <Spinner
                  animation="border"
                  variant="light"
                  size="sm"
                  role="status"
                />
              )}
            </Button>
          </div>
        </StyledForm>
      </Container>
    </StyledFormWrapper>
  )
}
