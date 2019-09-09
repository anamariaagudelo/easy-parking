
export const required = value =>
    value ? undefined : 'This field is required'

export const minLength = value =>
    value.length < 3 ? 'This field length min is 3' : undefined

export const maxLength = value =>
    value.length > 15 ? 'This field length max is 10' : undefined

export const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined
export const tooOld = value =>
  value && value > 65 ? 'You might be too old for this' : undefined
export const aol = value =>
  value && /.+@aol\.com/.test(value) ?
  'Really? You still use AOL for your email?' : undefined