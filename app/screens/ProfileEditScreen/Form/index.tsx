/**
 *
 * ProfileEditScreenForm
 *
 */

import React, { useRef } from 'react';
import { View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import * as yup from 'yup';
import { Formik } from 'formik';

import Button from 'theme/Button';
import Input from 'theme/Input';

import FormattedMessage from 'theme/FormattedMessage';
import DateSelector from 'components/DateSelector';

import { email } from 'utils/validations';

import style from './style';
import messages from './messages';

interface ProfileEditScreenFormProps {
  onSubmit: (data: FormState) => void;
  initialValues: FormState;
}

type FormState = {
  surname: string;
  name: string;
  email: string;
  phone: string;
  birthdate: string;
};

const schema = yup.object().shape({
  surname: yup.string().required('surname is required'),
  name: yup.string().required('name is required'),
  email: email.required('required'),
  phone: yup.string().required('required'),
  birthdate: yup.string().required('required'),
});

const ProfileEditScreenForm: React.FC<ProfileEditScreenFormProps> = (props) => {
  const nameFieldRef: any = useRef();
  const emailFieldRef: any = useRef();
  const phoneFieldRef: any = useRef();
  const dobFieldRef: any = useRef();

  return (
    <Animatable.View style={style.container} animation="fadeIn">
      <Formik
        initialValues={props.initialValues}
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
          setFieldTouched,
          setFieldValue,
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
                value={values.birthdate}
                onSelect={(value) => {
                  setFieldValue('birthdate', value);
                  setFieldTouched('birthdate');
                }}
                label={
                  <FormattedMessage {...messages.birthdateLabel} isFragment />
                }
                error={touched.birthdate ? errors.birthdate : null}
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

export default React.memo(ProfileEditScreenForm);
