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
import FormattedMessage from 'theme/FormattedMessage';
import Input from 'theme/Input';
import InputDropDown from 'theme/InputDropDown';
import { useDiscountTypes } from 'containers/Business/DiscountTypes';

import style from './style';
import messages from './messages';
import DateSelector from './DateSelector';
import DaySelector from '../DaySelector';

interface FormProps {
  onSubmit: (data: FormState) => void;
}

type FormState = {
  offerName: string;
  discountDescription: string;
  offerType: {
    id: number;
    name: string;
  };
  startDate: string;
  endDate: string;
  discountValue: number;
};

const schema = yup.object().shape({
  offerName: yup.string().required('Required'),
  discountDescription: yup.string().required('Required'),
  offerType: yup.object().shape({
    id: yup.number().required('Required'),
    name: yup.string().required('Required'),
  }),
  startDate: yup.string().required('Required'),
  endDate: yup.string().required('Required'),
  discountValue: yup.number().required('Required'),
});

const initialValue = {
  offerName: 'Buy one coffee get one free coffee',
  discountDescription: 'This this offer desctiption',
  offerType: '',
  startDate: '11/11/2021',
  endDate: '24/11/2021',
  discountValue: 2.3,
};

const Form: React.FC<FormProps> = (props) => {
  const discountDescriptionFieldRef = useRef();
  const offerDurationFieldRef = useRef();
  const [perDay, setPerDay] = useState({
    monday: 0,
    tuesday: 0,
    wednesday: 0,
    thursday: 0,
    friday: 0,
    saturday: 0,
    sunday: 0,
  });
  const discountTypes = useDiscountTypes();

  if (!discountTypes?.data?.length) {
    return null;
  }

  return (
    <Animatable.View style={style.container} animation="fadeIn">
      <Formik
        initialValues={{ ...initialValue, offerType: discountTypes.data[0] }}
        validationSchema={schema}
        onSubmit={(values) => {
          // @ts-ignore
          props.onSubmit({ ...values, perDay });
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          setFieldTouched,
          values,
          errors,
          isValid,
          touched,
        }) => (
          <>
            <View style={style.inputContainer}>
              <Input
                textContentType="name"
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
              <InputDropDown
                label={
                  <FormattedMessage isFragment {...messages.offerTypeLabel} />
                }
                data={discountTypes.data || []}
                title={
                  <FormattedMessage isFragment {...messages.offerTypeLabel} />
                }
                selectedValue={values.offerType?.name}
                onSelect={(item) => {
                  setFieldValue('offerType', item);
                  setFieldTouched('offerType');
                }}
                error={errors.offerType ? 'Required' : null}
              />
            </View>
            <View style={style.inputContainer}>
              <Input
                textContentType="name"
                keyboardType="numeric"
                returnKeyType="done"
                autoCapitalize="none"
                onChangeText={handleChange('discountValue')}
                onBlur={handleBlur('discountValue')}
                // @ts-ignore
                value={values.discountValue}
                error={touched.discountValue ? errors.discountValue : null}
                label={
                  <FormattedMessage
                    {...messages.discountValueLabel}
                    isFragment
                  />
                }
              />
            </View>

            <View style={style.dateSelectorsWrapper}>
              <View style={style.dateSelectorWrapper}>
                <DateSelector
                  onSelect={(value) => {
                    setFieldValue('startDate', value);
                    setFieldTouched('startDate');
                  }}
                  label="Start date"
                  error={errors.startDate ? 'Required' : null}
                />
              </View>
              <View style={style.dateSelectorWrapper}>
                <DateSelector
                  onSelect={(value) => {
                    setFieldValue('endDate', value);
                    setFieldTouched('endDate');
                  }}
                  label="End date"
                  error={errors.endDate ? 'Required' : null}
                />
              </View>
            </View>
            <DaySelector
              onSelect={(key, value) => {
                perDay[key] = value;
                setPerDay(perDay);
              }}
            />

            <View style={style.buttonContainer}>
              <Button
                flex
                disabled={!isValid}
                label={<FormattedMessage {...messages.addLabel} isFragment />}
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
