/*
 *
 * ProfileScreen
 *
 */

import React from 'react';
import { View } from 'react-native';

import { CHANGE_PASSWORD, PROFILE_EDIT } from 'router/routeNames';

import { useUserProfile } from 'containers/UserProfile';

import Screen from 'theme/Screen';
import FormattedMessage from 'theme/FormattedMessage';
import Text from 'theme/Text';
import Icon from 'theme/Icon';
import TouchFeedback from 'theme/TouchFeedback';

import TransactionSection from './TransactionSection';
import UserInfoLoader from './UserInfoLoader';
import { ProfileScreenProps } from './types';
import messages from './messages';
import style from './style';

const ProfileScreen: React.FC<ProfileScreenProps> = (props) => {
  const userProfile = useUserProfile();

  return (
    <Screen
      testID="ProfileScreen"
      headerTitle={<FormattedMessage {...messages.title} isFragment />}
      contentContainerStyle={style.contentContainerStyle}
    >
      <View style={style.container}>
        {userProfile.fetching ? (
          <UserInfoLoader numberOfItems={1} />
        ) : (
          <View style={style.userInfoSection}>
            <View style={style.imageInfoWrapper}>
              <View style={style.userInfo}>
                <Text style={style.userName}>{userProfile.data.name}</Text>
                <Text style={style.userPhone}>{userProfile.data.phone}</Text>
              </View>
            </View>
            <TouchFeedback
              style={style.editProfileButtonWrapper}
              onPress={() => {
                props.navigation.navigate(PROFILE_EDIT);
              }}
            >
              <Icon name="edit-3" style={style.editProfileIcon} />
            </TouchFeedback>
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
};

export default React.memo(ProfileScreen);
