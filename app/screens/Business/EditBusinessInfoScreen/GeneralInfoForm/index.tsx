/**
 *
 * GeneralInfoForm
 *
 */

import { omit } from 'lodash';
import React, { useRef } from 'react';
import { View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import * as yup from 'yup';
import { Formik } from 'formik';

import { email } from 'utils/validations';

import { useCategories } from 'containers/Categories';

import FormattedMessage from 'theme/FormattedMessage';
import InputDropDown from 'theme/InputDropDown';
import Button from 'theme/Button';
import Input from 'theme/Input';

import style from './style';
import messages from './messages';

interface GeneralInfoFormProps {
  onSubmit: (data: GeneralInfoFormState) => void;
  initialValues: IBusinessUser;
}

type GeneralInfoFormState = {
  email: string;
  phone: string;
  streetName: string;
  streetNumber: string;
  description: string;
  city: string;
  country: string;
  companyType: {
    id: number;
    name: string;
  };
  websiteUrl: string;
};

const schema = yup.object().shape({
  email,
  phone: yup.string(),
  streetName: yup.string(),
  streetNumber: yup.string(),
  city: yup.string(),
  country: yup.string(),
  companyType: yup.object().shape({
    id: yup.number().required('Required'),
    name: yup.string().required('Required'),
  }),
  websiteUrl: yup.string(),
  description: yup.string(),
});

const GeneralInfoForm: React.FC<GeneralInfoFormProps> = (props) => {
  const emailFieldRef: any = useRef();
  const companyTypeFieldRef: any = useRef();
  const streetNameFieldRef: any = useRef();
  const streetNumberFieldRef: any = useRef();
  const cityFieldRef: any = useRef();
  const countryFieldRef: any = useRef();
  const phoneFieldRef: any = useRef();
  const websiteFieldRef: any = useRef();
  const descriptionFieldRef: any = useRef();

  const companyTypes = useCategories();

  if (!companyTypes?.data?.length) {
    return null;
  }

  return (
    <Animatable.View
      style={[style.container]}
      animation="fadeInUp"
      duration={1000}
    >
      <Formik
        initialValues={{
          ...props.initialValues,
          companyType: companyTypes?.data[0],
        }}
        validationSchema={schema}
        onSubmit={(values) => {
          // @ts-ignore
          props.onSubmit({
            ...omit(values, [
              'id',
              'registrationDate',
              'logoUrl',
              'backgroundPicture',
              'name',
            ]),
          });
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          isValid,
          setFieldValue,
          setFieldTouched,
        }) => (
          <>
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
                  if (companyTypeFieldRef?.current?.focus) {
                    companyTypeFieldRef.current?.focus();
                  }
                }}
                error={touched.email ? errors.email : null}
                label={<FormattedMessage {...messages.emailLabel} isFragment />}
              />
            </View>

            <View style={style.inputContainer}>
              <InputDropDown
                label={
                  <FormattedMessage isFragment {...messages.companyTypeLabel} />
                }
                data={companyTypes.data || []}
                title={
                  <FormattedMessage isFragment {...messages.companyTypeLabel} />
                }
                selectedValue={values.companyType?.name}
                onSelect={(item) => {
                  setFieldValue('companyType', item);
                  setFieldTouched('companyType');
                }}
                error={errors.companyType ? 'Required' : null}
              />
            </View>

            <View style={style.inputContainer}>
              <Input
                ref={streetNameFieldRef}
                textContentType="addressCity"
                keyboardType="default"
                returnKeyType="next"
                autoCapitalize="none"
                onChangeText={handleChange('streetName')}
                onBlur={handleBlur('streetName')}
                value={values.streetName}
                onSubmitEditing={() => {
                  if (streetNumberFieldRef?.current?.focus) {
                    streetNumberFieldRef.current?.focus();
                  }
                }}
                error={touched.streetName ? errors.streetName : null}
                label={
                  <FormattedMessage {...messages.streetNameLabel} isFragment />
                }
              />
            </View>

            <View style={style.inputContainer}>
              <Input
                ref={streetNumberFieldRef}
                textContentType="addressCity"
                keyboardType="default"
                returnKeyType="next"
                autoCapitalize="none"
                onChangeText={handleChange('streetNumber')}
                onBlur={handleBlur('streetNumber')}
                value={values.streetNumber}
                onSubmitEditing={() => {
                  if (cityFieldRef?.current?.focus) {
                    cityFieldRef.current?.focus();
                  }
                }}
                error={touched.streetNumber ? errors.streetNumber : null}
                label={
                  <FormattedMessage
                    {...messages.streetNumberLabel}
                    isFragment
                  />
                }
              />
            </View>

            <View style={style.inputContainer}>
              <Input
                ref={cityFieldRef}
                textContentType="addressCity"
                keyboardType="default"
                returnKeyType="next"
                autoCapitalize="none"
                onChangeText={handleChange('city')}
                onBlur={handleBlur('city')}
                value={values.city}
                onSubmitEditing={() => {
                  if (countryFieldRef?.current?.focus) {
                    countryFieldRef.current?.focus();
                  }
                }}
                error={touched.city ? errors.city : null}
                label={<FormattedMessage {...messages.cityLabel} isFragment />}
              />
            </View>

            <View style={style.inputContainer}>
              <Input
                ref={countryFieldRef}
                textContentType="countryName"
                keyboardType="default"
                returnKeyType="next"
                autoCapitalize="none"
                onChangeText={handleChange('country')}
                onBlur={handleBlur('country')}
                value={values.country}
                onSubmitEditing={() => {
                  if (companyTypeFieldRef?.current?.focus) {
                    companyTypeFieldRef.current?.focus();
                  }
                }}
                error={touched.country ? errors.country : null}
                label={
                  <FormattedMessage {...messages.countryLabel} isFragment />
                }
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
                  if (websiteFieldRef?.current?.focus) {
                    websiteFieldRef.current?.focus();
                  }
                }}
                error={touched.phone ? errors.phone : null}
                label={<FormattedMessage {...messages.phoneLabel} isFragment />}
              />
            </View>

            <View style={style.inputContainer}>
              <Input
                ref={websiteFieldRef}
                textContentType="URL"
                keyboardType="default"
                returnKeyType="next"
                autoCapitalize="none"
                onChangeText={handleChange('websiteUrl')}
                onBlur={handleBlur('websiteUrl')}
                value={values.websiteUrl}
                onSubmitEditing={() => {
                  if (descriptionFieldRef?.current?.focus) {
                    descriptionFieldRef.current?.focus();
                  }
                }}
                error={touched.websiteUrl ? errors.websiteUrl : null}
                label={
                  <FormattedMessage {...messages.websiteLabel} isFragment />
                }
              />
            </View>

            <View style={style.inputContainer}>
              <Input
                ref={descriptionFieldRef}
                keyboardType="default"
                returnKeyType="next"
                autoCapitalize="none"
                onChangeText={handleChange('description')}
                onBlur={handleBlur('description')}
                value={values.description}
                error={touched.description ? errors.description : null}
                label={
                  <FormattedMessage {...messages.descriptionLabel} isFragment />
                }
                multiline
              />
            </View>

            <View style={style.updateButtonContainer}>
              <Button
                large
                flex
                disabled={!isValid}
                label={
                  <FormattedMessage {...messages.updateLabel} isFragment />
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

export default React.memo(GeneralInfoForm);
