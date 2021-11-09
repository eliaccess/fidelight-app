/**
 *
 * GeneralInfoForm
 *
 */

import React, { useRef, useState } from 'react';
import { View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import * as yup from 'yup';
import { Formik } from 'formik';

import Input from 'theme/Input';
import FormattedMessage from 'theme/FormattedMessage';
import Radio from 'theme/Radio';

import style from './style';
import messages from './messages';

interface GeneralInfoFormProps {
  onSubmit: (data: GeneralInfoFormState) => void;
}

type GeneralInfoFormState = {
  minimumAmount: string;
  rewards: string;
};

const schema = yup.object().shape({
  minimumAmount: yup.string().required('Required'),
  rewards: yup.string().required('Required'),
});

const initialValue = {
  minimumAmount: '',
  rewards: '',
};

const GeneralInfoForm: React.FC<GeneralInfoFormProps> = (props) => {
  const rewardsFieldRef = useRef();
  const [activeTypeIndex, setActiveTypeIndex] = useState(0);

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
            <View style={style.typeContainer}>
              <View style={style.typeWrapper}>
                <Radio
                  type="checkbox"
                  active={activeTypeIndex === 0}
                  onPress={() => {
                    setActiveTypeIndex(0);
                  }}
                />
                <FormattedMessage
                  {...messages.spentTypeLabel}
                  style={style.typeLabel}
                />
              </View>
              <View style={style.typeWrapper}>
                <Radio
                  type="checkbox"
                  active={activeTypeIndex === 1}
                  onPress={() => {
                    setActiveTypeIndex(1);
                  }}
                />
                <FormattedMessage
                  {...messages.pointBaseTypeLabel}
                  style={style.typeLabel}
                />
              </View>
            </View>
            <View style={style.inputContainer}>
              <Input
                textContentType="none"
                keyboardType="numeric"
                returnKeyType="next"
                autoCapitalize="none"
                onChangeText={handleChange('minimumAmount')}
                onBlur={handleBlur('minimumAmount')}
                value={values.minimumAmount}
                onSubmitEditing={() => {
                  // @ts-ignore
                  if (rewardsFieldRef?.current?.focus) {
                    // @ts-ignore
                    rewardsFieldRef.current?.focus();
                  }
                }}
                error={touched.minimumAmount ? errors.minimumAmount : null}
                label={
                  <FormattedMessage
                    {...messages.minimumAmountLabel}
                    isFragment
                  />
                }
              />
            </View>
            <View style={style.inputContainer}>
              <Input
                ref={rewardsFieldRef}
                textContentType="none"
                keyboardType="numeric"
                returnKeyType="done"
                autoCapitalize="none"
                onChangeText={handleChange('rewards')}
                onBlur={handleBlur('rewards')}
                value={values.rewards}
                error={touched.rewards ? errors.rewards : null}
                label={
                  <FormattedMessage {...messages.rewardsLabel} isFragment />
                }
              />
            </View>
          </>
        )}
      </Formik>
    </Animatable.View>
  );
};

export default GeneralInfoForm;
