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
import Input from 'theme/Input';

import FormattedMessage from 'theme/FormattedMessage';
import Image from 'theme/Image';
import Icon from 'theme/Icon';

import { email } from 'utils/validations';

import style from './style';
import messages from './messages';

interface FormProps {
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

// const initialValue = {
//   surname: 'Ahmed',
//   name: 'Michelle johnson',
//   email: 'Michellejohnson75@gmail.com',
//   phone: '+42 323236562',
//   dob: '12th Jan, 2020',
// };

const Form: React.FC<FormProps> = (props) => {
  const nameFieldRef = useRef();
  const emailFieldRef = useRef();
  const phoneFieldRef = useRef();
  const dobFieldRef = useRef();
  const passwordFieldRef = useRef();

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
          isValid,
          touched,
        }) => (
          <>
            <View style={style.profilePictureContainer}>
              <Image title="avatar" style={style.avatar} resizeMode="cover" />
              <View style={style.profileEditIcon}>
                <Icon name="edit" style={style.editIcon} />
              </View>
            </View>
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
                onChangeText={handleChange('birthdate')}
                onBlur={handleBlur('birthdate')}
                value={values.birthdate}
                onSubmitEditing={() => {
                  // @ts-ignore
                  if (passwordFieldRef?.current?.focus) {
                    // @ts-ignore
                    passwordFieldRef.current?.focus();
                  }
                }}
                error={touched.birthdate ? errors.birthdate : null}
                label={
                  <FormattedMessage {...messages.birthdateLabel} isFragment />
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
