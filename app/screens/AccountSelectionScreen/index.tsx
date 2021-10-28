/*
 *
 * AccountSelectionScreen
 *
 */

import configs from 'configs';
import LocalStorage from 'platform/LocalStorage';
import React from 'react';
import { View } from 'react-native';
import { BUSINESS_LOGIN, LOGIN } from 'router/routeNames';
import Button from 'theme/Button';
import FormattedMessage from 'theme/FormattedMessage';
import Image from 'theme/Image';
import messages from './messages';
import style from './style';

import { AccountSelectionScreenProps } from './types';

function AccountSelectionScreen(props: AccountSelectionScreenProps) {
  return (
    <View style={style.container}>
      <Image title="bgImage" style={style.imageBackground} resizeMode="cover" />
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
            label={
              <FormattedMessage {...messages.asBusinessLabel} isFragment />
            }
          />
        </View>
      </View>
    </View>
  );
}

export default React.memo(AccountSelectionScreen);
