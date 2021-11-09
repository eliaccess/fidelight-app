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
  numberOfPoints: string;
  scanQrCode: string;
};

const schema = yup.object().shape({
  numberOfPoints: yup.string().required('Required'),
  scanQrCode: yup.string().required('Required'),
});

const initialValue = {
  numberOfPoints: '',
  scanQrCode: '',
};

const Form: React.FC<FormProps> = (props) => {
  const scanQrCodeFieldRef = useRef();

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
                keyboardType="default"
                returnKeyType="next"
                autoCapitalize="none"
                onChangeText={handleChange('numberOfPoints')}
                onBlur={handleBlur('numberOfPoints')}
                value={values.numberOfPoints}
                onSubmitEditing={() => {
                  // @ts-ignore
                  if (scanQrCodeFieldRef?.current?.focus) {
                    // @ts-ignore
                    scanQrCodeFieldRef.current?.focus();
                  }
                }}
                error={touched.numberOfPoints ? errors.numberOfPoints : null}
                label={
                  <FormattedMessage
                    {...messages.numberOfPointsLabel}
                    isFragment
                  />
                }
              />
            </View>

            <View style={style.inputContainer}>
              <Input
                ref={scanQrCodeFieldRef}
                textContentType="name"
                keyboardType="default"
                returnKeyType="next"
                autoCapitalize="none"
                onChangeText={handleChange('scanQrCode')}
                onBlur={handleBlur('scanQrCode')}
                value={values.scanQrCode}
                error={touched.scanQrCode ? errors.scanQrCode : null}
                label={
                  <FormattedMessage {...messages.scanQrCodeLabel} isFragment />
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
