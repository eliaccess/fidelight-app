/*
 *
 * ProfileEditScreen
 *
 */

import React, { useEffect } from 'react';
import { View } from 'react-native';

import Screen from 'theme/Screen';
import FormattedMessage from 'theme/FormattedMessage';
import { useUserProfile } from 'containers/UserProfile';
import FullScreenLoader from 'theme/FullScreenLoader';

import Form from './Form';
import messages from './messages';
import style from './style';
import { ProfileEditScreenProps } from './types';

function ProfileEditScreen(props: ProfileEditScreenProps) {
  const userProfile = useUserProfile();

  useEffect(() => {
    if (userProfile.success) {
      userProfile.reset();
      props.navigation.goBack();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userProfile?.success]);

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
                userProfile.update({
                  data: { ...userProfile.data, ...values },
                });
              }}
              initialValues={userProfile.data}
            />
          </View>
        </View>
        {userProfile.updating ? <FullScreenLoader /> : null}
      </Screen>
    </>
  );
}

export default ProfileEditScreen;
