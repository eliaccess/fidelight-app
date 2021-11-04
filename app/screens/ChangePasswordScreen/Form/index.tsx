/**
 *
 * Form
 *
 */

import React, { useRef } from 'react';
import { View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import * as yup from 'yup';
import { Formik } from 'formik';

import Button from 'theme/Button';
import PasswordInput from 'theme/Input/PasswordInput';
import FormattedMessage from 'theme/FormattedMessage';

import { password } from 'utils/validations';

import style from './style';
import messages from './messages';

interface FormProps {
  onSubmit: (data: FormState) => void;
}

type FormState = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

const schema = yup.object().shape({
  currentPassword: password.required('Required'),
  newPassword: password.required('Required'),
  confirmPassword: password.oneOf(
    [yup.ref('newPassword')],
    'Password does not matched',
  ),
});

const initialValue = {
  currentPassword: '',
  newPassword: '',
  confirmPassword: '',
};

const Form: React.FC<FormProps> = (props) => {
  const newPasswordFieldRef = useRef();
  const confirmPasswordFieldRef = useRef();

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
              <PasswordInput
                onChangeText={handleChange('currentPassword')}
                onBlur={handleBlur('currentPassword')}
                value={values.currentPassword}
                returnKeyType="next"
                onSubmitEditing={() => {
                  // @ts-ignore
                  if (newPasswordFieldRef?.current?.focus) {
                    // @ts-ignore
                    newPasswordFieldRef.current?.focus();
                  }
                }}
                error={touched.currentPassword ? errors.currentPassword : null}
                label={
                  <FormattedMessage
                    {...messages.currentPasswordLabel}
                    isFragment
                  />
                }
              />
            </View>
            <View style={style.inputContainer}>
              <PasswordInput
                ref={newPasswordFieldRef}
                onChangeText={handleChange('newPassword')}
                onBlur={handleBlur('newPassword')}
                value={values.newPassword}
                returnKeyType="next"
                onSubmitEditing={() => {
                  // @ts-ignore
                  if (confirmPasswordFieldRef?.current?.focus) {
                    // @ts-ignore
                    confirmPasswordFieldRef.current?.focus();
                  }
                }}
                error={touched.newPassword ? errors.newPassword : null}
                label={
                  <FormattedMessage {...messages.newPasswordLabel} isFragment />
                }
              />
            </View>
            <View style={style.inputContainer}>
              <PasswordInput
                ref={confirmPasswordFieldRef}
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
                returnKeyType="done"
                error={touched.confirmPassword ? errors.confirmPassword : null}
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
