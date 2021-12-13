/*
 *
 * PreferenceScreen
 *
 */

import React, { useEffect, useState } from 'react';
import { Switch, View } from 'react-native';

import { CHANGE_PASSWORD } from 'router/routeNames';
import { useAuthentication } from 'containers/Authentication';
import {
  facebookAuthentication,
  googleAuthentication,
} from 'platform/Authentication';

import FullScreenLoader from 'theme/FullScreenLoader';
import FormattedMessage from 'theme/FormattedMessage';
import TouchFeedback from 'theme/TouchFeedback';
import { useToastContext } from 'theme/Toast';
import Colors from 'theme/Colors';
import Screen from 'theme/Screen';
import Image from 'theme/Image';
import Icon from 'theme/Icon';

import style from './style';
import messages from './messages';

import { PreferenceScreenProps } from './types';

const PreferenceScreen: React.FC<PreferenceScreenProps> = (props) => {
  const auth = useAuthentication();
  const [showLoader, setShowLoader] = useState(false);

  const toast = useToastContext();

  useEffect(() => {
    if (auth.message) {
      toast?.show({
        message: auth.message,
        delay: 1000,
        type: 'success',
      });
      auth.reset();
    }
  }, [auth?.message]);

  useEffect(() => {
    if (auth.error) {
      toast?.show({
        message: auth.message,
        delay: 1000,
        type: 'error',
      });
      auth.reset();
    }
  }, [auth.error]);

  const authGoogle = async () => {
    setShowLoader(true);
    try {
      const resp = await googleAuthentication();
      auth.linkSocialAccount({
        data: {
          provider: 'google',
          userId: resp.data?.providerUuid || resp.data?.userId || 'N/A',
          email: resp.data?.email || '',
          name: resp.data?.name || '',
        },
      });
    } catch (e) {
    } finally {
      setShowLoader(false);
    }
  };

  const authFacebook = async () => {
    setShowLoader(true);
    try {
      const fbUser = await facebookAuthentication();
      if (fbUser) {
        auth.linkSocialAccount({
          data: {
            provider: 'facebook',
            userId: fbUser.userId,
            email: fbUser.email || '',
            name: fbUser?.name || '',
          },
        });
      }
    } catch (e) {
    } finally {
      setShowLoader(false);
    }
  };

  const removeAuthGoogle = () => {
    auth.linkSocialAccount({
      // @ts-ignore
      data: {
        provider: 'google',
      },
    });
  };

  const removeAuthFacebook = () => {
    auth.linkSocialAccount({
      // @ts-ignore
      data: {
        provider: 'facebook',
      },
    });
  };

  return (
    <Screen
      testID="PreferenceScreen"
      headerTitle={<FormattedMessage {...messages.title} isFragment />}
    >
      <View style={style.container}>
        <View style={style.itemWrapper}>
          <View style={style.content}>
            <Image title="googleIcon" style={style.socialIconImage} />
            <FormattedMessage
              {...messages.connectGoogleLabel}
              style={style.buttonLabel}
            />
          </View>

          <Switch
            trackColor={{ false: Colors.textGrey, true: Colors.accent }}
            thumbColor={auth?.user?.data?.google ? Colors.white : Colors.white}
            onValueChange={
              auth?.user?.data?.google ? removeAuthGoogle : authGoogle
            }
            value={auth?.user?.data?.google}
          />
        </View>

        <View style={style.itemWrapper}>
          <View style={style.content}>
            <Image title="facebookIcon" style={style.socialIconImage} />
            <FormattedMessage
              {...messages.connectFacebookLabel}
              style={style.buttonLabel}
            />
          </View>

          <Switch
            trackColor={{ false: Colors.textGrey, true: Colors.accent }}
            thumbColor={
              auth?.user?.data?.facebook ? Colors.white : Colors.white
            }
            onValueChange={
              auth?.user?.data?.facebook ? removeAuthFacebook : authFacebook
            }
            value={auth?.user?.data?.facebook}
          />
        </View>

        {!auth.user.data?.passwordSet ? (
          <TouchFeedback
            onPress={() => {
              props.navigation.navigate(CHANGE_PASSWORD, {
                showCurrentPassword: false,
              });
            }}
            style={style.itemWrapper}
          >
            <View style={style.content}>
              <Icon name="lock" style={style.passwordIcon} />
              <FormattedMessage
                {...messages.addPasswordLabel}
                style={style.buttonLabel}
              />
            </View>
            <Icon name="chevron-right" style={style.chevronIcon} />
          </TouchFeedback>
        ) : null}
      </View>
      {showLoader ? <FullScreenLoader /> : null}
    </Screen>
  );
};

export default React.memo(PreferenceScreen);
