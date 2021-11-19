/**
 *
 * Form
 *
 */

import React, { useRef, useState } from 'react';
import { View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import * as yup from 'yup';
import { Formik } from 'formik';

import Button from 'theme/Button';
import Input from 'theme/Input';
import PasswordInput from 'theme/Input/PasswordInput';
import FormattedMessage from 'theme/FormattedMessage';
import Radio from 'theme/Radio';

import { email, password } from 'utils/validations';

import style from './style';
import messages from './messages';

interface FormProps {
  onSubmit: (data: FormState) => void;
  onStepChange: (...args: any) => any;
  activeStep: number;
}

type FormState = {
  companyName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  streetName: string;
  streetNumber: string;
  description: string;
  city: string;
  country: string;
  companyType: string;
};

const schema = yup.object().shape({
  companyName: yup.string().required('Required'),
  email: email.required('Required'),
  phone: yup.string().required('Required'),
  password,
  confirmPassword: password.oneOf(
    [yup.ref('password')],
    'Password does not matched',
  ),
  streetName: yup.string().required('Required'),
  streetNumber: yup.string().required('Required'),
  description: yup.string().required('Required'),
  city: yup.string().required('Required'),
  country: yup.string().required('Required'),
  companyType: yup.string().required('Required'),
});

const initialValue = {
  companyName: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
  streetName: '',
  streetNumber: '',
  description: '',
  city: '',
  country: '',
  companyType: '',
};

const Form: React.FC<FormProps> = (props) => {
  const emailFieldRef = useRef();
  const phoneFieldRef = useRef();
  const passwordFieldRef = useRef();
  const confirmPasswordFieldRef = useRef();
  const streetNameFieldRef = useRef();
  const streetNumberFieldRef = useRef();
  const descriptionFieldRef = useRef();
  const cityFieldRef = useRef();
  const countryFieldRef = useRef();
  const companyTypeFieldRef = useRef();
  const [acceptPolicy, setAcceptPolicy] = useState(false);

  return (
    <Animatable.View style={style.container} animation="fadeIn">
      <Formik
        initialValues={initialValue}
        validationSchema={schema}
        onSubmit={props.onSubmit}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
          touched,
        }) => (
          <>
            {props.activeStep === 1 ? (
              <>
                <View style={style.inputContainer}>
                  <Input
                    textContentType="organizationName"
                    keyboardType="default"
                    returnKeyType="next"
                    autoCapitalize="none"
                    onChangeText={handleChange('companyName')}
                    onBlur={handleBlur('companyName')}
                    value={values.companyName}
                    onSubmitEditing={() => {
                      // @ts-ignore
                      if (emailFieldRef?.current?.focus) {
                        // @ts-ignore
                        emailFieldRef.current?.focus();
                      }
                    }}
                    error={touched.companyName ? errors.companyName : null}
                    label={
                      <FormattedMessage
                        {...messages.companyNameLabel}
                        isFragment
                      />
                    }
                  />
                </View>
                <View style={style.inputContainer}>
                  <Input
                    ref={emailFieldRef}
                    textContentType="emailAddress"
                    keyboardType="email-address"
                    returnKeyType="next"
                    autoCapitalize="none"
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    onSubmitEditing={() => {
                      // @ts-ignore
                      if (phoneFieldRef?.current?.focus) {
                        // @ts-ignore
                        phoneFieldRef.current?.focus();
                      }
                    }}
                    error={touched.email ? errors.email : null}
                    label={
                      <FormattedMessage {...messages.emailLabel} isFragment />
                    }
                  />
                </View>
                <View style={style.inputContainer}>
                  <Input
                    ref={phoneFieldRef}
                    textContentType="telephoneNumber"
                    keyboardType="numbers-and-punctuation"
                    returnKeyType="next"
                    autoCapitalize="none"
                    onChangeText={handleChange('phone')}
                    onBlur={handleBlur('phone')}
                    value={values.phone}
                    onSubmitEditing={() => {
                      // @ts-ignore
                      if (passwordFieldRef?.current?.focus) {
                        // @ts-ignore
                        passwordFieldRef.current?.focus();
                      }
                    }}
                    error={touched.phone ? errors.phone : null}
                    label={
                      <FormattedMessage {...messages.phoneLabel} isFragment />
                    }
                  />
                </View>

                <View style={style.inputContainer}>
                  <PasswordInput
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    onSubmitEditing={() => {
                      // @ts-ignore
                      if (confirmPasswordFieldRef?.current?.focus) {
                        // @ts-ignore
                        confirmPasswordFieldRef.current?.focus();
                      }
                    }}
                    returnKeyType="done"
                    ref={passwordFieldRef}
                    error={touched.password ? errors.password : null}
                    label={
                      <FormattedMessage
                        {...messages.passwordLabel}
                        isFragment
                      />
                    }
                  />
                </View>
                <View style={style.inputContainer}>
                  <PasswordInput
                    onChangeText={handleChange('confirmPassword')}
                    onBlur={handleBlur('confirmPassword')}
                    value={values.confirmPassword}
                    onSubmitEditing={handleSubmit}
                    returnKeyType="done"
                    ref={confirmPasswordFieldRef}
                    error={
                      touched.confirmPassword ? errors.confirmPassword : null
                    }
                    label={
                      <FormattedMessage
                        {...messages.confirmPasswordLabel}
                        isFragment
                      />
                    }
                  />
                </View>
                <View style={style.buttonContainer}>
                  <Button
                    flex
                    label={
                      <FormattedMessage {...messages.nextLabel} isFragment />
                    }
                    onPress={() => props.onStepChange(2)}
                  />
                </View>
              </>
            ) : (
              <>
                <View style={style.inputContainer}>
                  <Input
                    ref={descriptionFieldRef}
                    keyboardType="default"
                    returnKeyType="next"
                    autoCapitalize="none"
                    onChangeText={handleChange('description')}
                    onBlur={handleBlur('description')}
                    value={values.description}
                    onSubmitEditing={() => {
                      // @ts-ignore
                      if (streetNameFieldRef?.current?.focus) {
                        // @ts-ignore
                        streetNameFieldRef.current?.focus();
                      }
                    }}
                    error={touched.description ? errors.description : null}
                    label={
                      <FormattedMessage
                        {...messages.descriptionLabel}
                        isFragment
                      />
                    }
                    multiline
                  />
                </View>
                <View style={style.inputContainer}>
                  <Input
                    ref={streetNameFieldRef}
                    textContentType="addressCity"
                    keyboardType="default"
                    returnKeyType="next"
                    autoCapitalize="none"
                    onChangeText={handleChange('streetName')}
                    onBlur={handleBlur('streetName')}
                    value={values.streetName}
                    onSubmitEditing={() => {
                      // @ts-ignore
                      if (streetNumberFieldRef?.current?.focus) {
                        // @ts-ignore
                        streetNumberFieldRef.current?.focus();
                      }
                    }}
                    error={touched.streetName ? errors.streetName : null}
                    label={
                      <FormattedMessage
                        {...messages.streetNameLabel}
                        isFragment
                      />
                    }
                  />
                </View>
                <View style={style.inputContainer}>
                  <Input
                    ref={streetNumberFieldRef}
                    textContentType="addressCity"
                    keyboardType="default"
                    returnKeyType="next"
                    autoCapitalize="none"
                    onChangeText={handleChange('streetNumber')}
                    onBlur={handleBlur('streetNumber')}
                    value={values.streetNumber}
                    onSubmitEditing={() => {
                      // @ts-ignore
                      if (cityFieldRef?.current?.focus) {
                        // @ts-ignore
                        cityFieldRef.current?.focus();
                      }
                    }}
                    error={touched.streetNumber ? errors.streetNumber : null}
                    label={
                      <FormattedMessage
                        {...messages.streetNumberLabel}
                        isFragment
                      />
                    }
                  />
                </View>

                <View style={style.inputContainer}>
                  <Input
                    ref={cityFieldRef}
                    textContentType="addressCity"
                    keyboardType="default"
                    returnKeyType="next"
                    autoCapitalize="none"
                    onChangeText={handleChange('city')}
                    onBlur={handleBlur('city')}
                    value={values.city}
                    onSubmitEditing={() => {
                      // @ts-ignore
                      if (countryFieldRef?.current?.focus) {
                        // @ts-ignore
                        countryFieldRef.current?.focus();
                      }
                    }}
                    error={touched.city ? errors.city : null}
                    label={
                      <FormattedMessage {...messages.cityLabel} isFragment />
                    }
                  />
                </View>
                <View style={style.inputContainer}>
                  <Input
                    ref={countryFieldRef}
                    textContentType="countryName"
                    keyboardType="default"
                    returnKeyType="next"
                    autoCapitalize="none"
                    onChangeText={handleChange('country')}
                    onBlur={handleBlur('country')}
                    value={values.country}
                    onSubmitEditing={() => {
                      // @ts-ignore
                      if (companyTypeFieldRef?.current?.focus) {
                        // @ts-ignore
                        companyTypeFieldRef.current?.focus();
                      }
                    }}
                    error={touched.country ? errors.country : null}
                    label={
                      <FormattedMessage {...messages.countryLabel} isFragment />
                    }
                  />
                </View>
                <View style={style.inputContainer}>
                  <Input
                    ref={companyTypeFieldRef}
                    textContentType="organizationName"
                    keyboardType="default"
                    returnKeyType="done"
                    autoCapitalize="none"
                    onChangeText={handleChange('companyType')}
                    onBlur={handleBlur('companyType')}
                    value={values.companyType}
                    onSubmitEditing={handleSubmit}
                    error={touched.companyType ? errors.companyType : null}
                    label={
                      <FormattedMessage
                        {...messages.companyTypeLabel}
                        isFragment
                      />
                    }
                  />
                </View>
                <View style={style.policyWrapper}>
                  <Radio
                    type="checkbox"
                    active={acceptPolicy}
                    onPress={() => {
                      setAcceptPolicy(!acceptPolicy);
                    }}
                  />
                  <FormattedMessage
                    {...messages.policyLable}
                    style={style.policyLable}
                    onPress={() => {
                      setAcceptPolicy(!acceptPolicy);
                    }}
                  />
                </View>
                <View style={style.buttonContainer}>
                  <Button
                    flex
                    disabled={!isValid}
                    label={
                      <FormattedMessage {...messages.submitLabel} isFragment />
                    }
                    onPress={handleSubmit}
                  />
                </View>
              </>
            )}
          </>
        )}
      </Formik>
    </Animatable.View>
  );
};

export default Form;
