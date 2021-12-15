/*
 *
 * AccountSelectionScreen
 *
 */

import React from 'react';
import { View } from 'react-native';

import configs from 'configs';
import LocalStorage from 'platform/LocalStorage';
import { BUSINESS_LOGIN, LOGIN } from 'router/routeNames';

import Button from 'theme/Button';
import FormattedMessage from 'theme/FormattedMessage';
import Image from 'theme/Image';

import { AccountSelectionScreenProps } from './types';
import messages from './messages';
import style from './style';

const AccountSelectionScreen: React.FC<AccountSelectionScreenProps> = (
  props,
) => (
  <View style={style.container}>
    <Image title="splash" style={style.imageBackground} />

    <View style={style.content}>
      <FormattedMessage
        style={style.chooseOptionHeading}
        {...messages.chooseOptionHeading}
      />
      <View style={style.buttonHolder}>
        <Button
          onPress={() => {
            LocalStorage.setItem(configs.ACCOUNT_TYPE, 'user');
            props.navigation.navigate(LOGIN);
          }}
          label={<FormattedMessage {...messages.asUserLabel} isFragment />}
        />
      </View>
      <View style={style.buttonHolder}>
        <Button
          type="primary"
          onPress={() => {
            LocalStorage.setItem(configs.ACCOUNT_TYPE, 'business');
            props.navigation.navigate(BUSINESS_LOGIN);
          }}
          label={<FormattedMessage {...messages.asBusinessLabel} isFragment />}
        />
      </View>
    </View>
  </View>
);

export default React.memo(AccountSelectionScreen);
