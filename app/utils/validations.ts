import * as yup from 'yup';

export const password = yup
  .string()
  .required('Password is required')
  .min(6, 'Password should be 6 chars minimum.');

export const email = yup.string().email('Invalid email address');

export const pinCode = yup
  .string()
  .required('Required')
  .min(4, 'Please enter full code');

export const phone = yup.string().min(7, 'Please enter full code');
