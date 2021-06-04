/*
 *
 * ProfileScreen
 *
 */

import React from 'react';
import { View } from 'react-native';

import { useUserProfile } from 'containers/UserProfile';

import Screen from 'theme/Screen';
import FormattedMessage from 'theme/FormattedMessage';
import Image from 'theme/Image';
import Text from 'theme/Text';
import Icon from 'theme/Icon';
import TouchFeedback from 'theme/TouchFeedback';

import { CHANGE_PASSWORD, PROFILE_EDIT } from 'router/routeNames';

import style from './style';
import { ProfileScreenProps } from './types';
import messages from './messages';
import TransactionSection from './TransactionSection';
import UserInfoLoader from './UserInfoLoader';

function ProfileScreen(props: ProfileScreenProps) {
  const userProfile = useUserProfile();

  return (
    <Screen
      testID="ProfileScreen"
      headerTitle={<FormattedMessage {...messages.title} isFragment />}
      headerRight={
        <TouchFeedback
          onPress={() => {
            props.navigation.navigate(PROFILE_EDIT);
          }}
        >
          <Icon name="edit" style={style.editProfileIcon} />
        </TouchFeedback>
      }
    >
      <View style={style.container}>
        {userProfile.fetching ? (
          <UserInfoLoader numberOfItems={1} />
        ) : (
          <View style={style.userInfoSection}>
            <Image
              uri={userProfile.data.avatar}
              style={style.avatar}
              resizeMode="cover"
            />
            <View style={style.userInfo}>
              <Text style={style.userName}>{userProfile.data.name}</Text>
              <Text style={style.userPhone}>{userProfile.data.phone}</Text>
            </View>
          </View>
        )}
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
