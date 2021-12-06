/**
 *
 * EarningPolicyForm
 *
 */

import React, { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import * as yup from 'yup';
import { Formik } from 'formik';

import { EarningPolicyTypeItem } from 'containers/EarningPolicyTypes/types';
import { useBusinessEarningPolicies } from 'containers/Business/BusinessEarningPolicies';

import FormattedMessage from 'theme/FormattedMessage';
import { useToastContext } from 'theme/Toast';
import Button from 'theme/Button';
import Radio from 'theme/Radio';
import Input from 'theme/Input';
import Text from 'theme/Text';

import style from './style';
import messages from './messages';

interface EarningPolicyFormProps {
  data: EarningPolicyTypeItem[];
  entityId: number;
}

const schema = yup.object().shape({
  rewardPoints: yup.string().required('Required'),
});

const EarningPolicyForm: React.FC<EarningPolicyFormProps> = (props) => {
  const rewardPointsFieldRef = useRef();
  const [activeTypeId, setActiveTypeId] = useState(0);
  const toast = useToastContext();
  const businessEarningPolicies = useBusinessEarningPolicies({
    entityId: props.entityId,
  });
  const initialValue = {
    rewardPoints: businessEarningPolicies?.data?.value?.toString() || '',
  };

  useEffect(() => {
    if (businessEarningPolicies?.data?.type) {
      setActiveTypeId(businessEarningPolicies.data.type);
    }
  }, [businessEarningPolicies.data]);

  useEffect(() => {
    if (businessEarningPolicies.message) {
      toast?.show({
        message: businessEarningPolicies.message,
        delay: 1000,
        type: 'success',
      });
      businessEarningPolicies.reset();
    }
  }, [businessEarningPolicies?.message]);

  return (
    <Animatable.View style={style.container} animation="fadeIn">
      <Formik
        initialValues={initialValue}
        validationSchema={schema}
        onSubmit={(values) => {
          businessEarningPolicies.submit({
            data: {
              type: activeTypeId,
              value: parseInt(values.rewardPoints, 10),
            },
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
        }) => (
          <>
            <View style={style.typeContainer}>
              {props.data.map((type) => (
                <View style={style.typeWrapper}>
                  <Radio
                    type="checkbox"
                    active={activeTypeId === type.id}
                    onPress={() => {
                      setActiveTypeId(type.id);
                    }}
                  />
                  <Text style={style.typeLabel}>{type.title}</Text>
                </View>
              ))}
            </View>

            <View style={style.inputContainer}>
              <Input
                ref={rewardPointsFieldRef}
                textContentType="none"
                keyboardType="numeric"
                returnKeyType="done"
                autoCapitalize="none"
                onChangeText={handleChange('rewardPoints')}
                onBlur={handleBlur('rewardPoints')}
                value={values?.rewardPoints}
                error={touched.rewardPoints ? errors.rewardPoints : null}
                label={
                  <FormattedMessage
                    {...messages.rewardPointsLabel}
                    isFragment
                  />
                }
              />
            </View>
            <View style={style.submitButtonContainer}>
              <Button
                large
                flex
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
  );
};

export default EarningPolicyForm;
