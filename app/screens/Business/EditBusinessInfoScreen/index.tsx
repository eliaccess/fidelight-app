/*
 *
 * EditBusinessInfoScreen
 *
 */

import React from 'react';
import { View } from 'react-native';

import { useBusinessProfile } from 'containers/Business/BusinessProfile';
import { useEarningPolicyTypes } from 'containers/EarningPolicyTypes';

import Screen from 'theme/Screen';
import FormattedMessage from 'theme/FormattedMessage';

import style from './style';
import { EditBusinessInfoScreenProps } from './types';
import messages from './messages';
import GeneralInfoForm from './GeneralInfoForm';
import EarningPolicyForm from './EarningPolicyForm';
import BusinessImages from './BusinessImages';

function EditBusinessInfoScreen(_props: EditBusinessInfoScreenProps) {
  const businessProfile = useBusinessProfile();
  const earningPolicyTypes = useEarningPolicyTypes();
  return (
    <Screen
      testID="EditBusinessInfoScreen"
      headerTitle={<FormattedMessage {...messages.title} isFragment />}
    >
      <View style={style.container}>
        {businessProfile?.data?.id ? (
          <>
            <BusinessImages />

            <View style={style.sectionContainer}>
              <FormattedMessage
                {...messages.generalInformationHeading}
                style={style.sectionHeading}
              />

              <GeneralInfoForm
                onSubmit={(data) => {
                  businessProfile.update({
                    data: { ...data, companyType: data.companyType.id },
                  });
                }}
                initialValues={businessProfile.data}
              />
            </View>

            <View style={style.sectionContainer}>
              <FormattedMessage
                {...messages.earningPolicyHeading}
                style={style.sectionHeading}
              />

              <EarningPolicyForm
                onSubmit={() => null}
                data={earningPolicyTypes.data || []}
                entityId={businessProfile.data.id}
              />
            </View>
          </>
        ) : null}
      </View>
    </Screen>
  );
}

export default React.memo(EditBusinessInfoScreen);
