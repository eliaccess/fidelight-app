/**
 *
 * SupportScreen
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
import Screen from 'theme/Screen';

import style from './style';
import messages from './messages';
import { SupportScreenProps } from './types';

const schema = yup.object().shape({
  requestTitle: yup.string().required('Required'),
  requestDetails: yup.string().required('Required'),
});

const initialValue = {
  requestTitle: '',
  requestDetails: '',
};

const SupportScreen: React.FC<SupportScreenProps> = (_props) => {
  const requestDetailsFiledRef = useRef();

  return (
    <Screen
      testID="SupportScreen"
      headerTitle={<FormattedMessage {...messages.title} isFragment />}
    >
      <Animatable.View style={[style.container]} animation="fadeIn">
        <Formik
          initialValues={initialValue}
          validationSchema={schema}
          onSubmit={() => console.log()}
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
                  textContentType="jobTitle"
                  keyboardType="default"
                  returnKeyType="next"
                  autoCapitalize="none"
                  onChangeText={handleChange('requestTitle')}
                  onBlur={handleBlur('requestTitle')}
                  value={values.requestTitle}
                  onSubmitEditing={() => {
                    // @ts-ignore
                    if (requestDetailsFiledRef?.current?.focus) {
                      // @ts-ignore
                      requestDetailsFiledRef.current?.focus();
                    }
                  }}
                  error={touched.requestTitle ? errors.requestTitle : null}
                  label={
                    <FormattedMessage
                      {...messages.requestTitleLabel}
                      isFragment
                    />
                  }
                />
              </View>
              <View style={style.inputContainer}>
                <Input
                  ref={requestDetailsFiledRef}
                  keyboardType="default"
                  returnKeyType="done"
                  autoCapitalize="none"
                  onChangeText={handleChange('requestDetails')}
                  onBlur={handleBlur('requestDetails')}
                  value={values.requestDetails}
                  error={touched.requestDetails ? errors.requestDetails : null}
                  label={
                    <FormattedMessage
                      {...messages.requestDetailsLabel}
                      isFragment
                    />
                  }
                  multiline
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
    </Screen>
  );
};

export default SupportScreen;
