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
import { useFormattedMessage } from 'theme/FormattedMessage';

import { password } from 'utils/validations';

import style from './style';
import messages from './messages';

interface FormProps {
  onSubmit: (data: FormState) => void;
  showCurrentPassword?: boolean;
}

type FormState = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

const schema = yup.object().shape({
  currentPassword: password,
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
  const newPasswordFieldRef: any = useRef();
  const confirmPasswordFieldRef: any = useRef();

  const currentPasswordLabel = useFormattedMessage(
    messages.currentPasswordLabel,
  );
  const newPasswordLabel = useFormattedMessage(messages.newPasswordLabel);
  const confirmPasswordLabel = useFormattedMessage(
    messages.confirmPasswordLabel,
  );
  const submitButtonLabel = useFormattedMessage(messages.submitButtonLabel);

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

          touched,
        }) => (
          <>
            {props?.showCurrentPassword ? (
              <View style={style.inputContainer}>
                <PasswordInput
                  onChangeText={handleChange('currentPassword')}
                  onBlur={handleBlur('currentPassword')}
                  value={values.currentPassword}
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    if (newPasswordFieldRef?.current?.focus) {
                      newPasswordFieldRef.current?.focus();
                    }
                  }}
                  error={
                    touched.currentPassword ? errors.currentPassword : null
                  }
                  label={currentPasswordLabel}
                />
              </View>
            ) : null}

            <View style={style.inputContainer}>
              <PasswordInput
                ref={newPasswordFieldRef}
                onChangeText={handleChange('newPassword')}
                onBlur={handleBlur('newPassword')}
                value={values.newPassword}
                returnKeyType="next"
                onSubmitEditing={() => {
                  if (confirmPasswordFieldRef?.current?.focus) {
                    confirmPasswordFieldRef.current?.focus();
                  }
                }}
                error={touched.newPassword ? errors.newPassword : null}
                label={newPasswordLabel}
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
                label={confirmPasswordLabel}
              />
            </View>

            <View style={style.buttonContainer}>
              <Button flex label={submitButtonLabel} onPress={handleSubmit} />
            </View>
          </>
        )}
      </Formik>
    </Animatable.View>
  );
};

export default React.memo(Form);
