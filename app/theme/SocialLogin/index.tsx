/*
 *
 * SocialLogin
 *
 */

import { useNavigation } from '@react-navigation/native';
import { facebookAuthentication } from 'platform/Authentication';
import React from 'react';
import { Platform, View } from 'react-native';
import { HOME } from 'router/routeNames';

import Button from 'theme/Button';
import FormattedMessage from 'theme/FormattedMessage';

import messages from './messages';
import style from './style';

interface SocialLoginProps {
  setShowLoader: (val: boolean) => void;
  onSuccess: (props: {
    provider: 'google' | 'facebook' | 'apple';
    providerUuid: string;
    medium: 'platform-ios' | 'platform-android';
    data: {
      email: string;
      name: string;
      [key: string]: any;
    };
  }) => void;
  onFailure: () => void;
}

function SocialLogin({ setShowLoader, onSuccess }: SocialLoginProps) {
  const navigation = useNavigation();
  const authGoogle = async () => {
    navigation.navigate(HOME);
  };

  const authFacebook = async () => {
    setShowLoader(true);
    try {
      const fbUser = await facebookAuthentication();
      if (fbUser) {
        console.log('fbUser', fbUser);
        onSuccess({
          provider: 'facebook',
          providerUuid: fbUser.userId,
          medium: Platform.OS === 'ios' ? 'platform-ios' : 'platform-android',
          data: {
            email: `${fbUser.userId}@facebook.com`,
            name: fbUser.name || 'Name',
            ...fbUser,
          },
        });
      }
    } catch (e) {
      console.log('eeee', e);
      // Warn(e);
    } finally {
      setShowLoader(false);
    }
  };

  return (
    <View style={[style.buttonContainer]}>
      <Button
        flex
        image={{
          title: 'googleIcon',
        }}
        type="primary"
        label={<FormattedMessage {...messages.googleLabel} isFragment />}
        onPress={authGoogle}
      />

      <Button
        flex
        type="primary"
        image={{
          title: 'facebookIcon',
        }}
        label={<FormattedMessage {...messages.facebookLabel} isFragment />}
        onPress={authFacebook}
      />
    </View>
  );
}

export default SocialLogin;
