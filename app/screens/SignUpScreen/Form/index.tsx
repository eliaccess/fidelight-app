/**
 *
 * SignUpScreenForm
 *
 */

import React, { useRef, useState } from 'react';
import { View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import * as yup from 'yup';
import { Formik } from 'formik';

import DateSelector from 'components/DateSelector';
import { email, password } from 'utils/validations';

import FormattedMessage, { useFormattedMessage } from 'theme/FormattedMessage';
import PasswordInput from 'theme/Input/PasswordInput';
import { useToastContext } from 'theme/Toast';
import Button from 'theme/Button';
import Input from 'theme/Input';
import Radio from 'theme/Radio';

import style from './style';
import messages from './messages';

interface SignUpScreenFormProps {
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

const SignUpScreenForm: React.FC<SignUpScreenFormProps> = (props) => {
  const nameFieldRef: any = useRef();
  const emailFieldRef: any = useRef();
  const phoneFieldRef: any = useRef();
  const dobFieldRef: any = useRef();
  const passwordFieldRef = useRef();

  const acceptPolicyMessage = useFormattedMessage(messages.acceptPolicyMessage);
  const [acceptPolicy, setAcceptPolicy] = useState(false);
  const toast = useToastContext();

  return (
    <Animatable.View style={style.container} animation="fadeIn">
      <Formik
        initialValues={initialValue}
        validationSchema={schema}
        onSubmit={(values) => {
          if (acceptPolicy) {
            props.onSubmit(values);
            return;
          }
          toast?.show({
            message: acceptPolicyMessage,
            delay: 1000,

            type: 'error',
          });
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          setFieldValue,
          setFieldTouched,
        }) => (
          <>
            <View style={style.inputContainer}>
              <Input
                textContentType="name"
                keyboardType="default"
                returnKeyType="next"
                autoCapitalize="none"
                onChangeText={handleChange('surname')}
                onBlur={handleBlur('surname')}
                value={values.surname}
                onSubmitEditing={() => {
                  if (nameFieldRef?.current?.focus) {
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
                keyboardType="default"
                returnKeyType="next"
                autoCapitalize="none"
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
                onSubmitEditing={() => {
                  if (emailFieldRef?.current?.focus) {
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
                keyboardType="email-address"
                returnKeyType="next"
                autoCapitalize="none"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                onSubmitEditing={() => {
                  if (phoneFieldRef?.current?.focus) {
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
                keyboardType="numbers-and-punctuation"
                returnKeyType="next"
                autoCapitalize="none"
                onChangeText={handleChange('phone')}
                onBlur={handleBlur('phone')}
                value={values.phone}
                onSubmitEditing={() => {
                  if (dobFieldRef?.current?.focus) {
                    dobFieldRef.current?.focus();
                  }
                }}
                error={touched.phone ? errors.phone : null}
                label={<FormattedMessage {...messages.phoneLabel} isFragment />}
              />
            </View>

            <View style={style.dateSelectorWrapper}>
              <DateSelector
                onSelect={(value) => {
                  setFieldTouched('dob');
                  setFieldValue('dob', value);
                }}
                label={<FormattedMessage {...messages.dobLabel} isFragment />}
                error={touched.dob ? errors.dob : null}
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
                {...messages.policyLabel}
                style={style.policyLabel}
                onPress={() => {
                  setAcceptPolicy(!acceptPolicy);
                }}
              />
            </View>

            <View style={style.buttonContainer}>
              <Button
                flex
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

export default React.memo(SignUpScreenForm);
