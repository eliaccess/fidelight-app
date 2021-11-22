/**
 *
 * Form
 *
 */

import React, { useState } from 'react';
import { View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import * as yup from 'yup';
import { Formik } from 'formik';

import Button from 'theme/Button';
import FormattedMessage from 'theme/FormattedMessage';
import Input from 'theme/Input';
import Icon from 'theme/Icon';
import TouchFeedback from 'theme/TouchFeedback';

import style from './style';
import messages from './messages';

interface FormProps {
  onSubmit: (data: FormState) => void;
}

type FormState = {
  numberOfPoints: string;
};

const schema = yup.object().shape({
  numberOfPoints: yup.string().required('Required'),
});

const initialValue = {
  numberOfPoints: '',
};

const Form: React.FC<FormProps> = (props) => {
  const [qrCode, setQrCode] = useState('');
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

            <TouchFeedback style={style.scanQRInput}>
              <FormattedMessage
                {...messages.scanQrCodeLabel}
                style={style.scanQrCodeLabel}
              />
              <Icon
                name="qr-code-sharp"
                font="ionicons"
                style={style.scanQRIcon}
              />
            </TouchFeedback>

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
