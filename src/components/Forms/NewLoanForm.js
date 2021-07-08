import React, { useEffect, useState } from 'react'
import { navigate } from 'gatsby-link'
import { Col, Container, Row } from 'react-bootstrap'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { validateEmail, validatePhone } from '../../util/utils'
import { handleInput } from './StyledForm'
import Heading from '../Heading'
import { StyledStepForm } from './StyledStepForm'
import Button from '../Buttons/button'

const StyledFormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 100px auto;
  }

  .row{
    gap: 50px;
    justify-content: center;
    margin: 20px auto;

  }

  .btn{
    display: flex;
    white-space: nowrap;
    background: var(--primary-green);
    color: white;
    border-radius: 3px;
    padding: 15px 25px;
    font-weight: 600;

  }
`
const StyledStepBar = styled.div`
  display: flex;
`

const handleCheckbox = element => {
  element.target.checked
    ? (element.target.value = 'yes')
    : (element.target.value = 'no')
}

export default function NewLoanForm() {
  const [isSubmit, setSubmit] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  })
  const watchData = watch()
  const MAX_STEPS = 15
  const uri = 'https://chlend.linktrustleadgen.com/Lead/434236/SimplePost'

  const nextStep = e => {
    setCurrentStep(currentStep + 1)
  }
  const backStep = e => {
    setCurrentStep(currentStep - 1)
  }

  const onSubmit = (data, e) => {
    setSubmit(true)
    setTimeout(() => {
      // formRef.current.submit()
      setSubmit(false)
      navigate('/thank-you')
    }, 1500)
  }

  useEffect(() => {
    const inputEls = Array.from(document.getElementsByClassName('input-field'))
    console.log(inputEls)
    inputEls.forEach(elem => {
      if (elem.value) {
        elem.labels[0].style.top = '-100%'
      }
    })
  }, [])

  return (
    <StyledFormWrapper>
      <Container>
        <StyledStepForm
          onSubmit={handleSubmit(onSubmit)}
          action={uri}
          method="POST"
          name="RefiForm"
        >
          <div className="steps">
            <StyledStepBar>
              {currentStep > 1 && (
                <Button
                  type="button"
                  name="back"
                  handleClick={() => backStep()}
                >
                  Back
                </Button>
              )}
              {currentStep < MAX_STEPS && (
                <Button
                  type="button"
                  name="next"
                  handleClick={() => nextStep()}
                >
                  Next
                </Button>
              )}
              <Button type="submit" name="next">
                Submit
              </Button>
              <p>Current Step: {currentStep}</p>
            </StyledStepBar>
            {currentStep === 1 && (
              <div id="step1" className="step">
                <Col>
                  <Row>
                    <Heading
                      heading="Welcome to the New Home Application"
                      width="60%"
                    />
                  </Row>
                  <Row>
                    <label className="static btn" htmlFor="PP_REFI">
                      <input
                        id="PP_REFI"
                        type="radio"
                        name="PRODUCT"
                        value="PP_REFI"
                        {...register('PRODUCT')}
                        onClick={nextStep}
                      />
                      Refinance
                    </label>
                    <label className="static btn" htmlFor="NEW_HOME">
                      <input
                        id="NEW_HOME"
                        type="radio"
                        name="PRODUCT"
                        value="NEW_HOME"
                        {...register('PRODUCT')}
                        onClick={nextStep}
                      />
                      New Home
                    </label>
                  </Row>
                </Col>
              </div>
            )}
            {currentStep === 2 && (
              <div id="step2" className="step">
                <Col>
                  <Row>
                    <Heading heading="Desired interest rate" width="60%" />
                  </Row>
                  <Row>
                    <label className="static btn" htmlFor="FIXED">
                      <input
                        id="FIXED"
                        type="radio"
                        name="LOAN_TYPE"
                        value="FIXED"
                        {...register('LOAN_TYPE')}
                        onClick={nextStep}
                      />
                      Fixed
                    </label>
                    <label className="static btn" htmlFor="ADJUSTABLE">
                      <input
                        id="ADJUSTABLE"
                        type="radio"
                        name="LOAN_TYPE"
                        value="ADJUSTABLE"
                        {...register('LOAN_TYPE')}
                        onClick={nextStep}
                      />
                      Adjustable
                    </label>
                  </Row>
                </Col>
              </div>
            )}
            {currentStep === 3 && (
              <div id="step3" className="step">
                <Col>
                  <Row>
                    <Heading
                      heading="What type of property do you have or are looking for?"
                      width="60%"
                    />
                  </Row>
                  <Row>
                    <label className="static btn" htmlFor="SINGLE_FAM">
                      <input
                        id="SINGLE_FAM"
                        type="radio"
                        name="PROP_DESC"
                        value="SINGLE_FAM"
                        {...register('PROP_DESC')}
                        onClick={nextStep}
                      />
                      Single Family
                    </label>
                    <label className="static btn" htmlFor="MULTI_FAM">
                      <input
                        id="MULTI_FAM"
                        type="radio"
                        name="PROP_DESC"
                        value="MULTI_FAM"
                        {...register('PROP_DESC')}
                        onClick={nextStep}
                      />
                      Multi Family
                    </label>
                    <label className="static btn" htmlFor="CONDO">
                      <input
                        id="CONDO"
                        type="radio"
                        name="PROP_DESC"
                        value="CONDO"
                        {...register('PROP_DESC')}
                        onClick={nextStep}
                      />
                      Condo
                    </label>
                    <label className="static btn" htmlFor="TOWNHOME">
                      <input
                        id="TOWNHOME"
                        type="radio"
                        name="PROP_DESC"
                        value="TOWNHOME"
                        {...register('PROP_DESC')}
                        onClick={nextStep}
                      />
                      Townhome
                    </label>
                    <label className="static btn" htmlFor="MANUFACTURED_HOME">
                      <input
                        id="MANUFACTURED_HOME"
                        type="radio"
                        name="PROP_DESC"
                        value="MANUFACTURED_HOME"
                        {...register('PROP_DESC')}
                        onClick={nextStep}
                      />
                      Manufactored Home
                    </label>
                  </Row>
                </Col>
              </div>
            )}
            {currentStep === 4 && (
              <div id="step4" className="step">
                <Col>
                  <Row>
                    <Heading
                      heading="Are you Active Duty or Retired Military Service Member?"
                      width="60%"
                    />
                  </Row>
                  <Row>
                    <label className="static btn" htmlFor="VA_YES">
                      <input
                        id="VA_YES"
                        type="radio"
                        name="VA_STATUS"
                        value="YES"
                        {...register('VA_STATUS')}
                        onClick={nextStep}
                      />
                      Yes
                    </label>
                    <label className="static btn" htmlFor="VA_NO">
                      <input
                        id="VA_NO"
                        type="radio"
                        name="VA_STATUS"
                        value="NO"
                        {...register('VA_STATUS')}
                        onClick={nextStep}
                      />
                      No
                    </label>
                  </Row>
                </Col>
              </div>
            )}
            {currentStep === 5 && (
              <div id="step5" className="step">
                <Col>
                  <Row>
                    <Heading
                      heading="How would you rate your credit?"
                      width="60%"
                    />
                  </Row>
                  <Row>
                    <label className="static btn" htmlFor="EXCELLENT">
                      <input
                        id="EXCELLENT"
                        type="radio"
                        name="CRED_GRADE"
                        value="EXCELLENT"
                        {...register('CRED_GRADE')}
                        onClick={nextStep}
                      />
                      Excellent
                    </label>
                    <label className="static btn" htmlFor="GOOD">
                      <input
                        id="GOOD"
                        type="radio"
                        name="CRED_GRADE"
                        value="GOOD"
                        {...register('CRED_GRADE')}
                        onClick={nextStep}
                      />
                      Good
                    </label>
                    <label className="static btn" htmlFor="FAIR">
                      <input
                        id="FAIR"
                        type="radio"
                        name="CRED_GRADE"
                        value="FAIR"
                        {...register('CRED_GRADE')}
                        onClick={nextStep}
                      />
                      Fair
                    </label>
                    <label className="static btn" htmlFor="POOR">
                      <input
                        id="POOR"
                        type="radio"
                        name="CRED_GRADE"
                        value="POOR"
                        {...register('CRED_GRADE')}
                        onClick={nextStep}
                      />
                      Poor
                    </label>
                  </Row>
                </Col>
              </div>
            )}
            {currentStep === 6 && (
              <div id="step6" className="step">
                <Col>
                  <Row>
                    <Heading
                      heading="Have you ever had a foreclosure?"
                      width="60%"
                    />
                  </Row>
                  <Row>
                    <label className="static btn" htmlFor="FORECLOSE_YES">
                      <input
                        id="FORECLOSE_YES"
                        type="radio"
                        name="FHA_BANK_FORECLOSURE"
                        value="YES"
                        {...register('FHA_BANK_FORECLOSURE')}
                        onClick={nextStep}
                      />
                      Yes
                    </label>
                    <label className="static btn" htmlFor="FORECLOSE_NO">
                      <input
                        id="FORECLOSE_NO"
                        type="radio"
                        name="FHA_BANK_FORECLOSURE"
                        value="NO"
                        {...register('FHA_BANK_FORECLOSURE')}
                        onClick={nextStep}
                      />
                      No
                    </label>
                  </Row>
                </Col>
              </div>
            )}
            {currentStep === 7 && (
              <div id="step7" className="step">
                <Col>
                  <Row>
                    <Heading
                      heading="Have you made any mortgage payments late?"
                      width="60%"
                    />
                  </Row>
                  <Row>
                    <label className="static btn" htmlFor="LATES_NONE">
                      <input
                        id="LATES_NONE"
                        type="radio"
                        name="NUM_MORTGAGE_LATES"
                        value="NONE"
                        {...register('NUM_MORTGAGE_LATES')}
                        onClick={nextStep}
                      />
                      None
                    </label>
                    <label className="static btn" htmlFor="LATES_ONE">
                      <input
                        id="LATES_ONE"
                        type="radio"
                        name="NUM_MORTGAGE_LATES"
                        value="ONE"
                        {...register('NUM_MORTGAGE_LATES')}
                        onClick={nextStep}
                      />
                      One
                    </label>
                    <label className="static btn" htmlFor="TWO_OR_MORE">
                      <input
                        id="TWO_OR_MORE"
                        type="radio"
                        name="NUM_MORTGAGE_LATES"
                        value="TWO_OR_MORE"
                        {...register('NUM_MORTGAGE_LATES')}
                        onClick={nextStep}
                      />
                      Two Or More
                    </label>
                  </Row>
                </Col>
              </div>
            )}
            {currentStep === 8 && (
              <div id="step8" className="step">
                <Col>
                  <Row>
                    <Heading
                      heading="Have you had a bankruptcy in the past 7 years?"
                      width="60%"
                    />
                  </Row>
                  <Row>
                    <label className="static btn" htmlFor="BANKRUPT_YES">
                      <input
                        id="BANKRUPT_YES"
                        type="radio"
                        name="BANKRUPTCY"
                        value="YES"
                        {...register('BANKRUPTCY')}
                        onClick={nextStep}
                      />
                      Yes
                    </label>
                    <label className="static btn" htmlFor="BANKRUPT_NO">
                      <input
                        id="BANKRUPT_NO"
                        type="radio"
                        name="BANKRUPTCY"
                        value="NO"
                        {...register('BANKRUPTCY')}
                        onClick={nextStep}
                      />
                      No
                    </label>
                  </Row>
                </Col>
              </div>
            )}
            {currentStep === 9 && (
              <div id="step9" className="step">
                <Col>
                  <Row>
                    <Heading heading="Annual Verifiable Income?" width="60%" />
                  </Row>
                  <Row>
                    <label className="static btn" htmlFor="VERI_INCOME_YES">
                      <input
                        id="VERI_INCOME_YES"
                        type="radio"
                        name="ANNUAL_VERIFIABLE_INCOME"
                        value="YES"
                        {...register('ANNUAL_VERIFIABLE_INCOME')}
                        onClick={nextStep}
                      />
                      Yes
                    </label>
                    <label className="static btn" htmlFor="VERI_INCOME_NO">
                      <input
                        id="VERI_INCOME_NO"
                        type="radio"
                        name="ANNUAL_VERIFIABLE_INCOME"
                        value="NO"
                        {...register('ANNUAL_VERIFIABLE_INCOME')}
                        onClick={nextStep}
                      />
                      No
                    </label>
                  </Row>
                </Col>
              </div>
            )}
            {currentStep === 10 && (
              <div id="step10" className="step">
                <Col>
                  <Row>
                    <Heading heading="What is your timeframe?" width="60%" />
                  </Row>
                  <Row>
                    <label className="static btn" htmlFor="BUY_IMMEDIATE">
                      <input
                        id="BUY_IMMEDIATE"
                        type="radio"
                        name="BUY_TIMEFRAME"
                        value="immediately"
                        {...register('BUY_TIMEFRAME')}
                        onClick={nextStep}
                      />
                      Immediately
                    </label>
                    <label className="static btn" htmlFor="BUY_30">
                      <input
                        id="BUY_30"
                        type="radio"
                        name="BUY_TIMEFRAME"
                        value="30_days"
                        {...register('BUY_TIMEFRAME')}
                        onClick={nextStep}
                      />
                      30 Days
                    </label>
                    <label className="static btn" htmlFor="BUY_60">
                      <input
                        id="BUY_60"
                        type="radio"
                        name="BUY_TIMEFRAME"
                        value="60_days"
                        {...register('BUY_TIMEFRAME')}
                        onClick={nextStep}
                      />
                      60 Days
                    </label>
                    <label className="static btn" htmlFor="BUY_90">
                      <input
                        id="BUY_90"
                        type="radio"
                        name="BUY_TIMEFRAME"
                        value="90_days"
                        {...register('BUY_TIMEFRAME')}
                        onClick={nextStep}
                      />
                      90 Days
                    </label>
                    <label className="static btn" htmlFor="BUY_NONE">
                      <input
                        id="BUY_NONE"
                        type="radio"
                        name="BUY_TIMEFRAME"
                        value="no_time_constraint"
                        {...register('BUY_TIMEFRAME')}
                        onClick={nextStep}
                      />
                      No Time Constraints
                    </label>
                  </Row>
                </Col>
              </div>
            )}
            {currentStep === 11 && (
              <div id="step11" className="step">
                <Col>
                  <Row>
                    <Heading heading="State" width="60%" />
                  </Row>
                  <div className="wrap-input">
                    <select
                      className="input-field"
                      onInput={handleInput}
                      id="state"
                      name="state"
                      pattern="^[A-Z]{2}"
                      {...register('state')}
                    >
                      <option value="" defaultValue=""></option>
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
                      Select State
                      {errors.state && (
                        <span className="invalid">{errors.state.message}</span>
                      )}
                    </label>
                  </div>
                  <Row>
                    <Button handleClick={nextStep}>Next</Button>
                  </Row>
                </Col>
              </div>
            )}
            {currentStep === 12 && (
              <div id="step12" className="step">
                <Col>
                  <Row>
                    <Heading heading="Propery Value" width="60%" />
                  </Row>
                  <Row>
                    <Col>
                      <p>
                        Please estimate the value of the property of the
                        property
                      </p>

                      <input
                        id="EST_VAL"
                        name="EST_VAL"
                        type="range"
                        min="50000"
                        max="1500000"
                        defaultValue="500000"
                        step="5000"
                        className="range-slider"
                        {...register('EST_VAL')}
                      />
                      <label className="static centered" htmlFor="EST_VAL">
                        ${watch('EST_VAL') || 500000}
                      </label>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p>What is the remaining 1st mortgage balance?</p>
                      <input
                        id="BAL_ONE"
                        name="BAL_ONE"
                        type="range"
                        min="10000"
                        max="1000000"
                        defaultValue="10000"
                        step="50000"
                        className="range-slider"
                        {...register('BAL_ONE')}
                      />
                      <label className="static centered" htmlFor="BAL_ONE">
                        ${watch('BAL_ONE') || 10000}
                      </label>
                    </Col>
                  </Row>
                  <Row>
                    <Button handleClick={nextStep}>Next</Button>
                  </Row>
                </Col>
              </div>
            )}
            {currentStep === 13 && (
              <div id="step13" className="step">
                <Col>
                  <Row>
                    <Heading
                      heading="Would you like to borrow additional cash?
"
                      width="60%"
                    />
                  </Row>
                  <Row>
                    <Col>
                      <input
                        id="ADD_CASH"
                        name="ADD_CASH"
                        type="range"
                        min="0"
                        max="200000"
                        defaultValue="0"
                        step="10000"
                        className="range-slider"
                        {...register('ADD_CASH')}
                      />
                      <label className="static centered" htmlFor="ADD_CASH">
                        ${watch('ADD_CASH') || 0}
                      </label>
                    </Col>
                  </Row>
                  <Row>
                    <Button handleClick={nextStep}>Next</Button>
                  </Row>
                </Col>
              </div>
            )}
            {currentStep === 14 && (
              <div id="step14" className="step">
                <Col>
                  <Row>
                    <Heading
                      heading="What is your current address?"
                      width="60%"
                    />
                  </Row>
                  <div className="wrap-input">
                    <input
                      id="address"
                      className="input-field"
                      type="text"
                      name="address"
                      onInput={handleInput}
                      {...register('address', {
                        required: '* Required',
                        minLength: {
                          value: 3,
                          message: '* Invalid: Too Short',
                        },
                      })}
                    />
                    <label htmlFor="address">
                      Address
                      {errors.address && (
                        <span className="invalid">
                          {errors.address.message}
                        </span>
                      )}
                    </label>
                  </div>
                  <div className="wrap-input">
                    <input
                      id="city"
                      className="input-field"
                      type="text"
                      name="city"
                      onInput={handleInput}
                      {...register('city', {
                        required: '* Required',
                        minLength: {
                          value: 3,
                          message: '* Invalid: Too Short',
                        },
                      })}
                    />
                    <label htmlFor="city">
                      City
                      {errors.city && (
                        <span className="invalid">{errors.city.message}</span>
                      )}
                    </label>
                  </div>
                  <div className="wrap-input">
                    <select
                      className="input-field"
                      onInput={handleInput}
                      id="country"
                      name="country"
                      {...register('country')}
                    >
                      <option value="AF">AF</option>
                      <option value="AL">AL</option>
                      <option value="DZ">DZ</option>
                      <option value="AS">AS</option>
                      <option value="AD">AD</option>
                      <option value="AO">AO</option>
                      <option value="AI">AI</option>
                      <option value="AQ">AQ</option>
                      <option value="AG">AG</option>
                      <option value="AR">AR</option>
                      <option value="AM">AM</option>
                      <option value="AW">AW</option>
                      <option value="AU">AU</option>
                      <option value="AT">AT</option>
                      <option value="AZ">AZ</option>
                      <option value="BS">BS</option>
                      <option value="BH">BH</option>
                      <option value="BD">BD</option>
                      <option value="BB">BB</option>
                      <option value="BY">BY</option>
                      <option value="BE">BE</option>
                      <option value="BZ">BZ</option>
                      <option value="BJ">BJ</option>
                      <option value="BM">BM</option>
                      <option value="BT">BT</option>
                      <option value="BO">BO</option>
                      <option value="BA">BA</option>
                      <option value="BW">BW</option>
                      <option value="BV">BV</option>
                      <option value="BR">BR</option>
                      <option value="IO">IO</option>
                      <option value="BN">BN</option>
                      <option value="BG">BG</option>
                      <option value="BF">BF</option>
                      <option value="BI">BI</option>
                      <option value="KH">KH</option>
                      <option value="CM">CM</option>
                      <option value="CA">CA</option>
                      <option value="CV">CV</option>
                      <option value="KY">KY</option>
                      <option value="CF">CF</option>
                      <option value="TD">TD</option>
                      <option value="CL">CL</option>
                      <option value="CN">CN</option>
                      <option value="CX">CX</option>
                      <option value="CC">CC</option>
                      <option value="CO">CO</option>
                      <option value="KM">KM</option>
                      <option value="CG">CG</option>
                      <option value="CD">CD</option>
                      <option value="CK">CK</option>
                      <option value="CR">CR</option>
                      <option value="CI">CI</option>
                      <option value="HR">HR</option>
                      <option value="CU">CU</option>
                      <option value="CY">CY</option>
                      <option value="CZ">CZ</option>
                      <option value="DK">DK</option>
                      <option value="DJ">DJ</option>
                      <option value="DM">DM</option>
                      <option value="DO">DO</option>
                      <option value="TP">TP</option>
                      <option value="EC">EC</option>
                      <option value="EG">EG</option>
                      <option value="SV">SV</option>
                      <option value="GQ">GQ</option>
                      <option value="ER">ER</option>
                      <option value="EE">EE</option>
                      <option value="ET">ET</option>
                      <option value="FK">FK</option>
                      <option value="FO">FO</option>
                      <option value="FJ">FJ</option>
                      <option value="FI">FI</option>
                      <option value="FR">FR</option>
                      <option value="FX">FX</option>
                      <option value="GF">GF</option>
                      <option value="PF">PF</option>
                      <option value="TF">TF</option>
                      <option value="GA">GA</option>
                      <option value="GM">GM</option>
                      <option value="GE">GE</option>
                      <option value="DE">DE</option>
                      <option value="GH">GH</option>
                      <option value="GI">GI</option>
                      <option value="GR">GR</option>
                      <option value="GL">GL</option>
                      <option value="GD">GD</option>
                      <option value="GP">GP</option>
                      <option value="GU">GU</option>
                      <option value="GT">GT</option>
                      <option value="GN">GN</option>
                      <option value="GW">GW</option>
                      <option value="GY">GY</option>
                      <option value="HT">HT</option>
                      <option value="HM">HM</option>
                      <option value="VA">VA</option>
                      <option value="HN">HN</option>
                      <option value="HK">HK</option>
                      <option value="HU">HU</option>
                      <option value="IS">IS</option>
                      <option value="IN">IN</option>
                      <option value="ID">ID</option>
                      <option value="IR">IR</option>
                      <option value="IQ">IQ</option>
                      <option value="IE">IE</option>
                      <option value="IL">IL</option>
                      <option value="IT">IT</option>
                      <option value="JM">JM</option>
                      <option value="JP">JP</option>
                      <option value="JO">JO</option>
                      <option value="KZ">KZ</option>
                      <option value="KE">KE</option>
                      <option value="KI">KI</option>
                      <option value="KP">KP</option>
                      <option value="KR">KR</option>
                      <option value="KW">KW</option>
                      <option value="KG">KG</option>
                      <option value="LA">LA</option>
                      <option value="LV">LV</option>
                      <option value="LB">LB</option>
                      <option value="LS">LS</option>
                      <option value="LR">LR</option>
                      <option value="LY">LY</option>
                      <option value="LI">LI</option>
                      <option value="LT">LT</option>
                      <option value="LU">LU</option>
                      <option value="MO">MO</option>
                      <option value="MK">MK</option>
                      <option value="MG">MG</option>
                      <option value="MW">MW</option>
                      <option value="MY">MY</option>
                      <option value="MV">MV</option>
                      <option value="ML">ML</option>
                      <option value="MT">MT</option>
                      <option value="MH">MH</option>
                      <option value="MQ">MQ</option>
                      <option value="MR">MR</option>
                      <option value="MU">MU</option>
                      <option value="YT">YT</option>
                      <option value="MX">MX</option>
                      <option value="FM">FM</option>
                      <option value="MD">MD</option>
                      <option value="MC">MC</option>
                      <option value="MN">MN</option>
                      <option value="ME">ME</option>
                      <option value="MS">MS</option>
                      <option value="MA">MA</option>
                      <option value="MZ">MZ</option>
                      <option value="MM">MM</option>
                      <option value="NA">NA</option>
                      <option value="NR">NR</option>
                      <option value="NP">NP</option>
                      <option value="NL">NL</option>
                      <option value="AN">AN</option>
                      <option value="NC">NC</option>
                      <option value="NZ">NZ</option>
                      <option value="NI">NI</option>
                      <option value="NE">NE</option>
                      <option value="NG">NG</option>
                      <option value="NU">NU</option>
                      <option value="NF">NF</option>
                      <option value="MP">MP</option>
                      <option value="NO">NO</option>
                      <option value="OM">OM</option>
                      <option value="PK">PK</option>
                      <option value="PW">PW</option>
                      <option value="PA">PA</option>
                      <option value="PG">PG</option>
                      <option value="PY">PY</option>
                      <option value="PE">PE</option>
                      <option value="PH">PH</option>
                      <option value="PN">PN</option>
                      <option value="PL">PL</option>
                      <option value="PT">PT</option>
                      <option value="PR">PR</option>
                      <option value="QA">QA</option>
                      <option value="RE">RE</option>
                      <option value="RO">RO</option>
                      <option value="RU">RU</option>
                      <option value="RW">RW</option>
                      <option value="KN">KN</option>
                      <option value="LC">LC</option>
                      <option value="VC">VC</option>
                      <option value="WS">WS</option>
                      <option value="SM">SM</option>
                      <option value="ST">ST</option>
                      <option value="SA">SA</option>
                      <option value="SN">SN</option>
                      <option value="RS">RS</option>
                      <option value="SC">SC</option>
                      <option value="SL">SL</option>
                      <option value="SG">SG</option>
                      <option value="SK">SK</option>
                      <option value="SI">SI</option>
                      <option value="SB">SB</option>
                      <option value="SO">SO</option>
                      <option value="ZA">ZA</option>
                      <option value="SS">SS</option>
                      <option value="GS">GS</option>
                      <option value="ES">ES</option>
                      <option value="LK">LK</option>
                      <option value="SH">SH</option>
                      <option value="PM">PM</option>
                      <option value="SD">SD</option>
                      <option value="SR">SR</option>
                      <option value="SJ">SJ</option>
                      <option value="SZ">SZ</option>
                      <option value="SE">SE</option>
                      <option value="CH">CH</option>
                      <option value="SY">SY</option>
                      <option value="TW">TW</option>
                      <option value="TJ">TJ</option>
                      <option value="TZ">TZ</option>
                      <option value="TH">TH</option>
                      <option value="TG">TG</option>
                      <option value="TK">TK</option>
                      <option value="TO">TO</option>
                      <option value="TT">TT</option>
                      <option value="TN">TN</option>
                      <option value="TR">TR</option>
                      <option value="TM">TM</option>
                      <option value="TC">TC</option>
                      <option value="TV">TV</option>
                      <option value="UG">UG</option>
                      <option value="UA">UA</option>
                      <option value="AE">AE</option>
                      <option value="GB">GB</option>
                      <option value="US" selected>
                        USA
                      </option>
                      <option value="UM">UM</option>
                      <option value="UY">UY</option>
                      <option value="UZ">UZ</option>
                      <option value="VU">VU</option>
                      <option value="VE">VE</option>
                      <option value="VN">VN</option>
                      <option value="VG">VG</option>
                      <option value="VI">VI</option>
                      <option value="WF">WF</option>
                      <option value="EH">EH</option>
                      <option value="YE">YE</option>
                      <option value="ZM">ZM</option>
                      <option value="ZW">ZW</option>
                    </select>

                    <label htmlFor="state">
                      Select State
                      {errors.state && (
                        <span className="invalid">{errors.state.message}</span>
                      )}
                    </label>
                  </div>
                  <Row>
                    <Button handleClick={nextStep}>Next</Button>
                  </Row>
                </Col>
              </div>
            )}
            {currentStep === 15 && (
              <div id="step15" className="step">
                <Col>
                  <Row>
                    <Heading heading="How can we contact you?" width="60%" />
                  </Row>
                  <div className="wrap-input">
                    <input
                      id="first_name"
                      className="input-field"
                      type="text"
                      name="first_name"
                      onInput={handleInput}
                      {...register('first_name', {
                        required: '* Required',
                        minLength: {
                          value: 3,
                          message: '* Invalid: Too Short',
                        },
                      })}
                    />
                    <label htmlFor="first_name">
                      First Name
                      {errors.first_name && (
                        <span className="invalid">
                          {errors.first_name.message}
                        </span>
                      )}
                    </label>
                  </div>
                  <div className="wrap-input">
                    <input
                      id="last_name"
                      className="input-field"
                      type="text"
                      name="last_name"
                      onInput={handleInput}
                      {...register('last_name', {
                        required: '* Required',
                        minLength: {
                          value: 3,
                          message: '* Invalid: Too Short',
                        },
                      })}
                    />
                    <label htmlFor="last_name">
                      Last Name
                      {errors.city && (
                        <span className="invalid">
                          {errors.last_name.message}
                        </span>
                      )}
                    </label>
                  </div>
                  <div className="wrap-input">
                    <input
                      id="email_address"
                      className="input-field"
                      type="email"
                      name="email_address"
                      onInput={handleInput}
                      {...register('email_address', {
                        validate: validateEmail,
                      })}
                    />
                    <label htmlFor="email_address">
                      Email Address
                      {errors.email_address && (
                        <span className="invalid">
                          {errors.email_address.message}
                        </span>
                      )}
                    </label>
                  </div>
                  <div className="wrap-input">
                    <input
                      id="phone_primary"
                      className="input-field"
                      type="phone"
                      name="phone_primary"
                      onInput={handleInput}
                      {...register('phone_primary', {
                        validate: validatePhone,
                      })}
                    />
                    <label htmlFor="phone_primary">
                      Primary Phone
                      {errors.phone_primary && (
                        <span className="invalid">
                          {errors.phone_primary.message}
                        </span>
                      )}
                    </label>
                  </div>
                  <div className="wrap-input">
                    <select
                      className="input-field"
                      onInput={handleInput}
                      id="best_time"
                      name="country"
                      {...register('best_time')}
                    >
                      <option selected value="M">
                        Morning
                      </option>
                      <option value="A">Afternoon</option>
                      <option value="E">Evening</option>
                    </select>

                    <label htmlFor="best_time">Best Time to Contact</label>
                  </div>
                </Col>
                <div className="tcpa-wrap">
                  <span></span>
                  <p>
                    By clicking the button below, you acknowledge, consent and
                    agree to the following: a) Our Privacy Policy and consent to
                    receive notices and other communications electronically from
                    Champion Lender (a Champion Leads LLC Brand) SecureRights
                    and our{' '}
                    <a href="https://championlender.com/premier-partners/">
                      Premier Partners
                    </a>
                    ; b) We take your privacy seriously. You are providing
                    express written consent for Champion Lender (a Champion
                    Leads LLC Brand) SecureRights and our Premier Partners to
                    share your information with up to four (4) of its Premier
                    Partners and for SecureRights, parties calling on behalf of
                    Champion Lender (a Champion Leads LLC Brand) SecureRights
                    and our Premier Partners or authorized third parties on
                    their behalf to contact you (including through automated
                    means; e.g. autodialing, text and pre-recorded messaging)
                    about financial services or other credit related offers via
                    telephone, mobile device (including SMS and MMS) and/or
                    email, even if your telephone number is currently listed on
                    any state, federal, local or corporate Do Not Call list; c)
                    Consent to be contacted is not required in order to purchase
                    goods or services from Champion Lender (a Champion Leads LLC
                    Brand) SecureRights and our Premier Partners that contact
                    you. You may choose to speak with an individual service
                    provider by dialing (888) 883-2062; d) That I have received
                    and reviewed the Mortgage Broker Disclosures for my state;
                    and e) You are providing written consent under the Fair
                    Credit Reporting Act for Champion Lender (a Champion Leads
                    LLC Brand) SecureRights and our Premier Partners to obtain
                    information from your personal credit profile. You authorize
                    Champion Lender (a Champion Leads LLC Brand) SecureRights
                    and our Premier Partners to obtain such information solely
                    to prequalify you for credit options and connect you with an
                    appropriate lending partner. SecureRights NMLS 3175.
                  </p>
                </div>
                <div className="checkbox-wrap">
                  <input
                    type="checkbox"
                    id="opt_in-checkbox"
                    name="opt_in-checkbox"
                  />
                  <label className="tcpa-label" htmlFor="opt_in-checkbox">
                    I agree to terms & conditions *.
                  </label>
                </div>
              </div>
            )}
            <input
              type="hidden"
              name="SPEC_HOME"
              value="YES"
              {...register('SPEC_HOME')}
            />
            <input
              type="hidden"
              id="leadid_token"
              name="SR_TOKEN"
              value=""
              {...register('SR_TOKEN')}
            />
            <input
              type="hidden"
              name="SR_URL"
              value="https://championlender.com/"
              {...register('SR_URL')}
            />
            <input
              type="hidden"
              name="DOWN_PMT"
              value=""
              {...register('DOWN_PMT')}
            />
            <input
              type="hidden"
              name="PROP_ST"
              value=""
              {...register('PROP_ST')}
            />
            {/* <pre>{JSON.stringify(watchData, null, 2)}</pre> */}
          </div>
        </StyledStepForm>
      </Container>
    </StyledFormWrapper>
  )
}
