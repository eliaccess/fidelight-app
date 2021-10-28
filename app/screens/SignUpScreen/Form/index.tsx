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
}

type FormState = {
  surname: string;
  name: string;
  email: string;
  phone: string;
  dob: string;
  password: string;
};

const schema = yup.object().shape({
  surname: yup.string().required('surname is required'),
  name: yup.string().required('name is required'),
  email: email.required('email is required'),
  phone: yup.string().required('phone number is required'),
  dob: yup.string().required('dob is required'),
  password,
});

const initialValue = {
  surname: '',
  name: '',
  email: '',
  phone: '',
  dob: '',
  password: '',
};

const Form: React.FC<FormProps> = (props) => {
  const nameFieldRef = useRef();
  const emailFieldRef = useRef();
  const phoneFieldRef = useRef();
  const dobFieldRef = useRef();
  const passwordFieldRef = useRef();
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
            <View style={style.inputContainer}>
              <Input
                textContentType="name"
                autoCompleteType="name"
                keyboardType="default"
                returnKeyType="next"
                autoCapitalize="none"
                onChangeText={handleChange('surname')}
                onBlur={handleBlur('surname')}
                value={values.surname}
                onSubmitEditing={() => {
                  // @ts-ignore
                  if (nameFieldRef?.current?.focus) {
                    // @ts-ignore
                    nameFieldRef.current?.focus();
                  }
                }}
                error={touched.surname ? errors.surname : null}
                label={
                  <FormattedMessage {...messages.surnameLabel} isFragment />
                }
              />
            </View>
            <View style={style.inputContainer}>
              <Input
                ref={nameFieldRef}
                textContentType="name"
                autoCompleteType="name"
                keyboardType="default"
                returnKeyType="next"
                autoCapitalize="none"
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
                onSubmitEditing={() => {
                  // @ts-ignore
                  if (emailFieldRef?.current?.focus) {
                    // @ts-ignore
                    emailFieldRef.current?.focus();
                  }
                }}
                error={touched.name ? errors.name : null}
                label={<FormattedMessage {...messages.nameLabel} isFragment />}
              />
            </View>
            <View style={style.inputContainer}>
              <Input
                ref={emailFieldRef}
                textContentType="emailAddress"
                autoCompleteType="email"
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
                label={<FormattedMessage {...messages.emailLabel} isFragment />}
              />
            </View>
            <View style={style.inputContainer}>
              <Input
                ref={phoneFieldRef}
                textContentType="telephoneNumber"
                autoCompleteType="cc-number"
                keyboardType="numbers-and-punctuation"
                returnKeyType="next"
                autoCapitalize="none"
                onChangeText={handleChange('phone')}
                onBlur={handleBlur('phone')}
                value={values.phone}
                onSubmitEditing={() => {
                  // @ts-ignore
                  if (dobFieldRef?.current?.focus) {
                    // @ts-ignore
                    dobFieldRef.current?.focus();
                  }
                }}
                error={touched.phone ? errors.phone : null}
                label={<FormattedMessage {...messages.phoneLabel} isFragment />}
              />
            </View>
            <View style={style.inputContainer}>
              <Input
                ref={dobFieldRef}
                textContentType="telephoneNumber"
                autoCompleteType="cc-number"
                keyboardType="numbers-and-punctuation"
                returnKeyType="next"
                autoCapitalize="none"
                onChangeText={handleChange('dob')}
                onBlur={handleBlur('dob')}
                value={values.dob}
                onSubmitEditing={() => {
                  // @ts-ignore
                  if (passwordFieldRef?.current?.focus) {
                    // @ts-ignore
                    passwordFieldRef.current?.focus();
                  }
                }}
                error={touched.dob ? errors.dob : null}
                label={<FormattedMessage {...messages.dobLabel} isFragment />}
              />
            </View>
            <View style={style.inputContainer}>
              <PasswordInput
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                onSubmitEditing={handleSubmit}
                returnKeyType="done"
                ref={passwordFieldRef}
                error={touched.password ? errors.password : null}
                label={
                  <FormattedMessage {...messages.passwordLabel} isFragment />
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
      </Formik>
    </Animatable.View>
  );
};

export default Form;
