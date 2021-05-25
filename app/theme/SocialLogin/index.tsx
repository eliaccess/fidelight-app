/*
 *
 * SocialLogin
 *
 */

import {
  facebookAuthentication,
  googleAuthentication,
} from 'platform/Authentication';
import { Warn } from 'platform/Logger';
import React from 'react';
import { Platform, View } from 'react-native';

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
  const authGoogle = async () => {
    setShowLoader(true);
    try {
      const resp = await googleAuthentication();
      onSuccess({
        provider: 'google',
        providerUuid: resp.data?.providerUuid || resp.data?.userId || 'N/A',
        medium: Platform.OS === 'ios' ? 'platform-ios' : 'platform-android',
        data: {
          email: resp.data?.email || 'user@google.com',
          name: resp.data?.name || 'Name',
          ...resp.data,
        },
      });
    } catch (e) {
      Warn(e);
    } finally {
      setShowLoader(false);
    }
  };

  const authFacebook = async () => {
    setShowLoader(true);
    try {
      const fbUser = await facebookAuthentication();
      if (fbUser) {
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
      Warn(e);
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
