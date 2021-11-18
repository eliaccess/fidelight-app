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

import InputDropDown from 'theme/InputDropDown';
import Button from 'theme/Button';
import FormattedMessage from 'theme/FormattedMessage';
import Input from 'theme/Input';
import { DealItemTypes } from 'types/DealItemTypes';

import style from './style';
import messages from './messages';
import DaySelector from '../DaySelector';

interface EditRewardFormProps {
  onSubmit: (data: FormState) => void;
  data: DealItemTypes;
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

const EditRewardForm: React.FC<EditRewardFormProps> = (props) => {
  const rewardDescriptionFieldRef = useRef();
  const rewardsPointsFieldRef = useRef();
  const discountTypes = useDiscountTypes();
  const [perDay, setPerDay] = useState({ ...props.data.perDay });

  if (!discountTypes?.data?.length) {
    return null;
  }
  const { data } = props;
  const initialValues = {
    offerName: data?.name,
    rewardDescription: data?.description,
    rewardType: data?.discountType,
    rewardsPoints: data?.cost,
    discountValue: data?.value,
    perDay: data?.perDay,
  };

  return (
    <Animatable.View style={style.container} animation="fadeIn">
      <Formik
        initialValues={{ ...initialValues, rewardType: discountTypes.data[0] }}
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
                  if (rewardDescriptionFieldRef?.current?.focus) {
                    // @ts-ignore
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
                  // @ts-ignore
                  if (rewardsPointsFieldRef?.current?.focus) {
                    // @ts-ignore
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
            <View style={style.inputContainer}>
              <Input
                ref={rewardsPointsFieldRef}
                textContentType="name"
                keyboardType="numeric"
                returnKeyType="done"
                autoCapitalize="none"
                onChangeText={handleChange('rewardsPoints')}
                onBlur={handleBlur('rewardsPoints')}
                // @ts-ignore
                value={values.rewardsPoints.toString()}
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

export default EditRewardForm;
