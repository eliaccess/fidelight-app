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
import Input from 'theme/Input';
import FormattedMessage from 'theme/FormattedMessage';
import Radio from 'theme/Radio';
import Text from 'theme/Text';
import Button from 'theme/Button';

import style from './style';
import messages from './messages';

interface EarningPolicyFormProps {
  onSubmit: (data: EarningPolicyFormState) => void;
  data: EarningPolicyTypeItem[];
  entityId: number;
}

type EarningPolicyFormState = {
  rewardPoints: string;
};

const schema = yup.object().shape({
  rewardPoints: yup.string().required('Required'),
});

const initialValue = {
  rewardPoints: '',
};

const EarningPolicyForm: React.FC<EarningPolicyFormProps> = (props) => {
  const rewardPointsFieldRef = useRef();
  const [activeTypeId, setActiveTypeId] = useState(0);
  const businessEarningPolicies = useBusinessEarningPolicies({
    entityId: props.entityId,
  });

  useEffect(() => {
    if (businessEarningPolicies?.data?.type) {
      setActiveTypeId(businessEarningPolicies.data.type);
    }
  }, [businessEarningPolicies.data]);

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
                value={values.rewardPoints}
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
