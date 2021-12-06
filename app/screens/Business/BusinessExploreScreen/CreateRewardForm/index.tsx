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

import { useDiscountTypes } from 'containers/Business/DiscountTypes';

import FormattedMessage from 'theme/FormattedMessage';
import InputDropDown from 'theme/InputDropDown';
import Button from 'theme/Button';
import Input from 'theme/Input';

import style from './style';
import messages from './messages';
import DaySelector from '../DaySelector';

interface FormProps {
  onSubmit: (data: FormState) => void;
}

type FormState = {
  offerName: string;
  rewardDescription: string;
  rewardType: {
    id: number;
    name: string;
  };
  rewardsPoints: number;
  discountValue: number;
};

const schema = yup.object().shape({
  offerName: yup.string().required('Required'),
  rewardDescription: yup.string().required('Required'),
  rewardType: yup.object().shape({
    id: yup.number().required('Required'),
    name: yup.string().required('Required'),
  }),
  rewardsPoints: yup.number().required('Required'),
  discountValue: yup.number().required('Required'),
});

const initialValue = {
  offerName: '',
  rewardDescription: '',
  rewardType: '',
  rewardsPoints: '',
  discountValue: '',
};

const Form: React.FC<FormProps> = (props) => {
  const rewardDescriptionFieldRef: any = useRef();
  const rewardsPointsFieldRef: any = useRef();
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
        initialValues={{ ...initialValue, rewardType: discountTypes.data[0] }}
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
                  if (rewardDescriptionFieldRef?.current?.focus) {
                    rewardDescriptionFieldRef.current?.focus();
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
                ref={rewardDescriptionFieldRef}
                textContentType="name"
                keyboardType="default"
                returnKeyType="next"
                autoCapitalize="none"
                onChangeText={handleChange('rewardDescription')}
                onBlur={handleBlur('rewardDescription')}
                value={values.rewardDescription}
                onSubmitEditing={() => {
                  if (rewardsPointsFieldRef?.current?.focus) {
                    rewardsPointsFieldRef.current?.focus();
                  }
                }}
                error={
                  touched.rewardDescription ? errors.rewardDescription : null
                }
                label={
                  <FormattedMessage
                    {...messages.rewardDescriptionLabel}
                    isFragment
                  />
                }
              />
            </View>

            <View style={style.inputContainer}>
              <InputDropDown
                label={
                  <FormattedMessage isFragment {...messages.rewardTypeLabel} />
                }
                data={discountTypes.data || []}
                title={
                  <FormattedMessage isFragment {...messages.rewardTypeLabel} />
                }
                selectedValue={values.rewardType?.name}
                onSelect={(item) => {
                  setFieldValue('rewardType', item);
                  setFieldTouched('rewardType');
                }}
                error={errors.rewardType ? 'Required' : null}
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

            <View style={style.inputContainer}>
              <Input
                ref={rewardsPointsFieldRef}
                textContentType="name"
                keyboardType="numeric"
                returnKeyType="done"
                autoCapitalize="none"
                onChangeText={handleChange('rewardsPoints')}
                onBlur={handleBlur('rewardsPoints')}
                value={values.rewardsPoints}
                error={touched.rewardsPoints ? errors.rewardsPoints : null}
                label={
                  <FormattedMessage
                    {...messages.rewardsPointsLabel}
                    isFragment
                  />
                }
              />
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
