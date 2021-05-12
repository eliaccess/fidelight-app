/*
 *
 * EditBusinessInfoScreen
 *
 */

import React from 'react';
import { View } from 'react-native';

import Screen from 'theme/Screen';
import FormattedMessage from 'theme/FormattedMessage';
import Icon from 'theme/Icon';
import Button from 'theme/Button';

import style from './style';
import { EditBusinessInfoScreenProps } from './types';
import messages from './messages';
import GeneralInfoForm from './GeneralInfoForm';
import EarningPolicyForm from './EarningPolicyForm';

function EditBusinessInfoScreen(_props: EditBusinessInfoScreenProps) {
  return (
    <Screen
      testID="EditBusinessInfoScreen"
      headerTitle={<FormattedMessage {...messages.title} isFragment />}
    >
      <View style={style.container}>
        <View style={style.sectionContainer}>
          <FormattedMessage
            {...messages.businessImageHeading}
            style={style.sectionHeading}
          />
          <View style={style.businessImageContainer}>
            <View style={style.addWrapper}>
              <FormattedMessage
                {...messages.addLogoLabel}
                style={style.addLabel}
              />
              <View style={style.addImageWrapper}>
                <Icon name="upload" style={style.uploadIcon} />
                <FormattedMessage
                  {...messages.addLogoLabel}
                  style={style.uploadLabel}
                />
              </View>
            </View>
            <View style={style.addWrapper}>
              <FormattedMessage
                {...messages.addBusinessImage}
                style={style.addLabel}
              />
              <View style={style.addImageWrapper}>
                <Icon name="upload" style={style.uploadIcon} />
                <FormattedMessage
                  {...messages.addBusinessImageLabel}
                  style={style.uploadLabel}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={style.sectionContainer}>
          <FormattedMessage
            {...messages.generalInformationHeading}
            style={style.sectionHeading}
          />

          <GeneralInfoForm onSubmit={() => null} />
        </View>
        <View style={style.sectionContainer}>
          <FormattedMessage
            {...messages.earningPolicyHeading}
            style={style.sectionHeading}
          />

          <EarningPolicyForm onSubmit={() => null} />
        </View>
        <View style={style.saveButtonContainer}>
          <Button
            large
            flex
            label={<FormattedMessage {...messages.saveLabel} isFragment />}
            onPress={() => null}
          />
        </View>
      </View>
    </Screen>
  );
}

export default React.memo(EditBusinessInfoScreen);
