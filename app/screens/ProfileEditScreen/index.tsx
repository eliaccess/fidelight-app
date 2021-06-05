/*
 *
 * ProfileEditScreen
 *
 */

import React from 'react';
import { View } from 'react-native';

import Screen from 'theme/Screen';
import FormattedMessage from 'theme/FormattedMessage';
import { useUserProfile } from 'containers/UserProfile';

import Form from './Form';
import messages from './messages';
import style from './style';
import { ProfileEditScreenProps } from './types';

function ProfileEditScreen(_props: ProfileEditScreenProps) {
  const userProfile = useUserProfile();
  return (
    <>
      <Screen
        testID="ProfileEditScreen"
        headerTitle={<FormattedMessage {...messages.title} isFragment />}
      >
        <View style={style.container}>
          <View style={style.formContainer}>
            <Form
              onSubmit={(values) => {
                userProfile.update({ data: values });
              }}
            />
          </View>
        </View>
      </Screen>
    </>
  );
}

export default ProfileEditScreen;
