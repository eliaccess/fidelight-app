/*
 *
 * ProfileScreen
 *
 */

import React from 'react';
import { View } from 'react-native';

import Screen from 'theme/Screen';
import FormattedMessage from 'theme/FormattedMessage';
import Image from 'theme/Image';
import Text from 'theme/Text';
import Icon from 'theme/Icon';
import TouchFeedback from 'theme/TouchFeedback';
import { CHANGE_PASSWORD } from 'router/routeNames';

import style from './style';
import { ProfileScreenProps } from './types';
import messages from './messages';
import TransactionSection from './TransactionSection';

function ProfileScreen(props: ProfileScreenProps) {
  return (
    <Screen
      testID="ProfileScreen"
      headerTitle={<FormattedMessage {...messages.title} isFragment />}
    >
      <View style={style.container}>
        <View style={style.userInfoSection}>
          <Image title="avatar" style={style.avatar} resizeMode="cover" />
          <View style={style.userInfo}>
            <Text style={style.userName}>Michelle johnson</Text>
            <Text style={style.userPhone}>+810 3333-252-120</Text>
          </View>
        </View>
        <TouchFeedback
          onPress={() => props.navigation.navigate(CHANGE_PASSWORD)}
          style={style.changePasswordWrapper}
        >
          <FormattedMessage
            {...messages.changePasswordLabel}
            style={style.changePasswordLabel}
          />
          <Icon name="chevron-right" style={style.changePasswordIcon} />
        </TouchFeedback>
        <TransactionSection />
      </View>
    </Screen>
  );
}

export default React.memo(ProfileScreen);
