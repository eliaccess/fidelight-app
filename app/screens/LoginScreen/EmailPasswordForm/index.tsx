/**
 *
 * EmailPasswordForm
 *
 */

import React, { useRef } from 'react';
import { View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import * as yup from 'yup';
import { Formik } from 'formik';

import Button from 'theme/Button';
import Input from 'theme/Input';
import PasswordInput from 'theme/Input/PasswordInput';
import FormattedMessage from 'theme/FormattedMessage';

import { email, password } from 'utils/validations';

import style from './style';
import messages from './messages';

interface EmailPasswordFormProps {
  onSubmit: (data: EmailPasswordFormState) => void;
  onForgotPasswordPress: () => void;
}

type EmailPasswordFormState = {
  email: string;
  password: string;
};

const schema = yup.object().shape({
  email: email.required('Required'),
  password,
});

const initialValue = {
  email: '',
  password: '',
};

const EmailPasswordForm: React.FC<EmailPasswordFormProps> = (props) => {
  const passwordFieldRef = useRef();

  return (
    <Animatable.View style={[style.container]} animation="fadeIn">
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
                textContentType="emailAddress"
                autoCompleteType="email"
                keyboardType="email-address"
                returnKeyType="next"
                autoCapitalize="none"
                onChangeText={handleChange('email')}
                // onBlur={handleBlur('email')}
                value={values.email}
                onSubmitEditing={() => {
                  // @ts-ignore
                  if (passwordFieldRef?.current?.focus) {
                    // @ts-ignore
                    passwordFieldRef.current?.focus();
                  }
                }}
                error={touched.email ? errors.email : null}
                label={<FormattedMessage {...messages.emailLabel} isFragment />}
              />
            </View>
            <View style={style.inputContainer}>
              <PasswordInput
                onChangeText={handleChange('password')}
                // onBlur={handleBlur('password')}
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
            <FormattedMessage
              {...messages.forgotPasswordLabel}
              onPress={props.onForgotPasswordPress}
              style={style.forgotPasswordLabel}
            />
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

export default EmailPasswordForm;
