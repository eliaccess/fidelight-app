/**
 *
 * GeneralInfoForm
 *
 */

import React, { useRef } from 'react';
import { View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import * as yup from 'yup';
import { Formik } from 'formik';

import Input from 'theme/Input';
import FormattedMessage from 'theme/FormattedMessage';

import style from './style';
import messages from './messages';

interface GeneralInfoFormProps {
  onSubmit: (data: GeneralInfoFormState) => void;
}

type GeneralInfoFormState = {
  storeName: string;
  address: string;
  phone: string;
  website: string;
  info: string;
};

const schema = yup.object().shape({
  storeName: yup.string().required('Required'),
  address: yup.string().required('Required'),
  phone: yup.string().required('Required'),
  website: yup.string(),
  info: yup.string().required('Required'),
});

const initialValue = {
  storeName: '',
  address: '',
  phone: '',
  website: '',
  info: '',
};

const GeneralInfoForm: React.FC<GeneralInfoFormProps> = (props) => {
  const addressFieldRef = useRef();
  const phoneFieldRef = useRef();
  const websiteFieldRef = useRef();
  const infoFieldRef = useRef();

  return (
    <Animatable.View style={[style.container]} animation="fadeIn">
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
            <View style={style.inputContainer}>
              <Input
                textContentType="givenName"
                keyboardType="default"
                returnKeyType="next"
                autoCapitalize="none"
                onChangeText={handleChange('storeName')}
                onBlur={handleBlur('storeName')}
                value={values.storeName}
                onSubmitEditing={() => {
                  // @ts-ignore
                  if (addressFieldRef?.current?.focus) {
                    // @ts-ignore
                    addressFieldRef.current?.focus();
                  }
                }}
                error={touched.storeName ? errors.storeName : null}
                label={
                  <FormattedMessage {...messages.storeNameLabel} isFragment />
                }
              />
            </View>
            <View style={style.inputContainer}>
              <Input
                ref={addressFieldRef}
                textContentType="addressCity"
                keyboardType="default"
                returnKeyType="next"
                autoCapitalize="none"
                onChangeText={handleChange('address')}
                onBlur={handleBlur('address')}
                value={values.address}
                onSubmitEditing={() => {
                  // @ts-ignore
                  if (phoneFieldRef?.current?.focus) {
                    // @ts-ignore
                    phoneFieldRef.current?.focus();
                  }
                }}
                error={touched.address ? errors.address : null}
                label={
                  <FormattedMessage {...messages.addressLabel} isFragment />
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
                  // @ts-ignore
                  if (websiteFieldRef?.current?.focus) {
                    // @ts-ignore
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
                onChangeText={handleChange('website')}
                onBlur={handleBlur('website')}
                value={values.website}
                onSubmitEditing={() => {
                  // @ts-ignore
                  if (infoFieldRef?.current?.focus) {
                    // @ts-ignore
                    infoFieldRef.current?.focus();
                  }
                }}
                error={touched.website ? errors.website : null}
                label={
                  <FormattedMessage {...messages.websiteLabel} isFragment />
                }
              />
            </View>
            <View style={style.inputContainer}>
              <Input
                ref={infoFieldRef}
                textContentType="name"
                keyboardType="default"
                returnKeyType="next"
                autoCapitalize="none"
                onChangeText={handleChange('info')}
                onBlur={handleBlur('info')}
                value={values.info}
                error={touched.info ? errors.info : null}
                label={<FormattedMessage {...messages.infoLabel} isFragment />}
                multiline
              />
            </View>
          </>
        )}
      </Formik>
    </Animatable.View>
  );
};

export default GeneralInfoForm;
