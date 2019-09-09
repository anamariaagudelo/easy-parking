import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { required, maxLength, minLength, number, email, aol } from '../../UI/ValidatorField'
import { customInput } from '../../UI/CustomInput'

const RegisterForm = (props) => {
  const { handleSubmit, pristine, reset, submitting, onClick } = props
  return (
    <form onSubmit={handleSubmit} className="input">
      <Field name="name" type="text" 
        component={customInput} label="Name"
        validate={[required, maxLength, minLength]}
      />
      <Field name="lastName" type="text"
        component={customInput} label="Last Name"
        validate={[required, maxLength, minLength]}
      />
      <Field name="email" type="email"
        component={customInput} label="Email"
        validate={email}
        warn={aol}
      />
      <Field name="numberPhone" type="text"
        component={customInput} label="Number Phone"
        validate={[required, number, minLength]}
      />
      <Field name="address" type="text"
        component={customInput} label="Address"
        validate={[required, minLength]}
      />
      <Field name="password" type="password"
        component={customInput} label="Password"
        validate={[required, maxLength, minLength]}
      />
      <div>
        <button className="button" type="submit" disabled={submitting} onClick={onClick}>REGISTER</button>
        <br></br>
        <button type="button" disabled={pristine || submitting} onClick={reset}>CLEAR</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'RegisterForm'
})(RegisterForm)