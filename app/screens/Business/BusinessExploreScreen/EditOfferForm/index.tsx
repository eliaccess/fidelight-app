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
import { DealItemTypes } from 'types/DealItemTypes';
import style from './style';
import messages from './messages';
import DateSelector from './DateSelector';
import DaySelector from '../DaySelector';

interface EditOfferFormProps {
  onSubmit: (data: FormState) => void;
  data: DealItemTypes;
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

const EditOfferForm: React.FC<EditOfferFormProps> = (props) => {
  const discountDescriptionFieldRef = useRef();
  const offerDurationFieldRef = useRef();
  const [perDay, setPerDay] = useState({ ...props.data.perDay });
  const discountTypes = useDiscountTypes();

  if (!discountTypes?.data?.length) {
    return null;
  }
  const { data } = props;
  const initialValues = {
    offerName: data?.name,
    discountDescription: data?.description,
    offerType: data?.discountType,
    startDate: data?.startDate?.split('T')[0],
    endDate: data?.expirationDate?.split('T')[0],
    discountValue: data?.value,
    perDay: data?.perDay,
  };

  return (
    <Animatable.View style={style.container} animation="fadeIn">
      <Formik
        initialValues={{
          ...initialValues,
          offerType: discountTypes.data[0],
        }}
        validationSchema={schema}
        onSubmit={(values) => {
          // @ts-ignore
          props.onSubmit({ ...values, perDay, discountId: data.id });
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
                value={values.discountValue.toString()}
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
                  value={values.startDate}
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
                  value={values.endDate || ''}
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
                const updateDay = perDay;
                updateDay[key] = value;
                setPerDay(updateDay);
              }}
              activeDays={Object.keys(initialValues.perDay).filter(
                (key) => initialValues.perDay[key] === 1,
              )}
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

export default EditOfferForm;