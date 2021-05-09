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
import FormattedMessage from 'theme/FormattedMessage';
import Input from 'theme/Input';

import style from './style';
import messages from './messages';

interface FormProps {
  onSubmit: (data: FormState) => void;
}

type FormState = {
  offerName: string;
  discountDescription: string;
  offerDuration: string;
  startDate: string;
  endDate: string;
};

const schema = yup.object().shape({
  offerName: yup.string().required('Required'),
  discountDescription: yup.string().required('Required'),
  offerDuration: yup.string().required('Required'),
  startDate: yup.string().required('Required'),
  endDate: yup.string().required('Required'),
});

const initialValue = {
  offerName: '',
  discountDescription: '',
  offerDuration: '',
  startDate: '',
  endDate: '',
};

const Form: React.FC<FormProps> = (props) => {
  const discountDescriptionFieldRef = useRef();
  const offerDurationFieldRef = useRef();
  const startDateFieldRef = useRef();
  const endDateFieldRef = useRef();

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
                onChangeText={handleChange('offerName')}
                onBlur={handleBlur('offerName')}
                value={values.offerName}
                onSubmitEditing={() => {
                  // @ts-ignore
                  if (discountDescriptionFieldRef?.current?.focus) {
                    // @ts-ignore
                    discountDescriptionFieldRef.current?.focus();
                  }
                }}
                error={touched.offerName ? errors.offerName : null}
                label={
                  <FormattedMessage {...messages.offerNameLabel} isFragment />
                }
              />
            </View>

            <View style={style.inputContainer}>
              <Input
                ref={discountDescriptionFieldRef}
                textContentType="name"
                autoCompleteType="name"
                keyboardType="default"
                returnKeyType="next"
                autoCapitalize="none"
                onChangeText={handleChange('discountDescription')}
                onBlur={handleBlur('discountDescription')}
                value={values.discountDescription}
                onSubmitEditing={() => {
                  // @ts-ignore
                  if (offerDurationFieldRef?.current?.focus) {
                    // @ts-ignore
                    offerDurationFieldRef.current?.focus();
                  }
                }}
                error={
                  touched.discountDescription
                    ? errors.discountDescription
                    : null
                }
                label={
                  <FormattedMessage
                    {...messages.discountDescriptionLabel}
                    isFragment
                  />
                }
              />
            </View>
            <View style={style.inputContainer}>
              <Input
                ref={offerDurationFieldRef}
                textContentType="name"
                autoCompleteType="name"
                keyboardType="default"
                returnKeyType="next"
                autoCapitalize="none"
                onChangeText={handleChange('offerDuration')}
                onBlur={handleBlur('offerDuration')}
                value={values.offerDuration}
                onSubmitEditing={() => {
                  // @ts-ignore
                  if (startDateFieldRef?.current?.focus) {
                    // @ts-ignore
                    startDateFieldRef.current?.focus();
                  }
                }}
                error={touched.offerDuration ? errors.offerDuration : null}
                label={
                  <FormattedMessage
                    {...messages.offerDurationLabel}
                    isFragment
                  />
                }
              />
            </View>
            <View style={style.inputContainer}>
              <Input
                ref={startDateFieldRef}
                textContentType="name"
                autoCompleteType="name"
                keyboardType="default"
                returnKeyType="next"
                autoCapitalize="none"
                onChangeText={handleChange('startDate')}
                onBlur={handleBlur('startDate')}
                value={values.startDate}
                onSubmitEditing={() => {
                  // @ts-ignore
                  if (endDateFieldRef?.current?.focus) {
                    // @ts-ignore
                    endDateFieldRef.current?.focus();
                  }
                }}
                error={touched.startDate ? errors.startDate : null}
                label={
                  <FormattedMessage {...messages.startDateLabel} isFragment />
                }
              />
            </View>
            <View style={style.inputContainer}>
              <Input
                ref={endDateFieldRef}
                textContentType="name"
                autoCompleteType="name"
                keyboardType="default"
                returnKeyType="next"
                autoCapitalize="none"
                onChangeText={handleChange('endDate')}
                onBlur={handleBlur('endDate')}
                value={values.endDate}
                onSubmitEditing={() => {
                  // @ts-ignore
                  if (passwordFieldRef?.current?.focus) {
                    // @ts-ignore
                    passwordFieldRef.current?.focus();
                  }
                }}
                error={touched.endDate ? errors.endDate : null}
                label={
                  <FormattedMessage {...messages.endDateLabel} isFragment />
                }
              />
            </View>

            <View style={style.buttonContainer}>
              <Button
                flex
                disabled={!isValid}
                label={<FormattedMessage {...messages.addLabel} isFragment />}
                onPress={() => null}
              />
            </View>
          </>
        )}
      </Formik>
    </Animatable.View>
  );
};

export default Form;
