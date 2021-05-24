import omit from 'lodash/omit';
import { subscribeToTopic, unsubscribeFromTopic } from 'platform/Notifications';
import LocalStorage from 'platform/LocalStorage';
import { Log, Warn } from 'platform/Logger';

import { setUserProperties as crashlyticsSetUser } from './crashlytics';
import { setUser as analyticsSetUser } from './analytics';

const PROPERTIES_BLACKLIST = ['password', 'stats', 'connectedAccounts'];

const onUserUpdate = (params) => {
  if (params.id) {
    // eslint-disable-next-line no-param-reassign
    params.id = params.id.toString();
  }

  Log('Setting Analytics User', params);
  analyticsSetUser(params);
  crashlyticsSetUser(params);
};

/**
 * All functions to handle events like sign in, sign out, etc for side effects
 */
export function onSignIn(user): void {
  const analyticsUser: any = omit(
    {
      ...user,
      ...(user.stats || {}),
      ...(user?.connectedAccounts || {}),
    },
    PROPERTIES_BLACKLIST,
  );

  if (analyticsUser?.id) {
    onUserUpdate(analyticsUser);
  }
}

/**
 * All functions to handle events like sign in, sign out, etc for side effects
 */
export function onSignOut(): void {
  onUserUpdate({
    id: '0',
    name: 'Guest',
    email: '0',
  });
}

const FCM_TOPIC = 'fcm/topic';

export async function onLocationChange(params: any): Promise<void> {
  try {
    if (!params?.city) {
      throw Error('City property missing in params');
    }
    onUserUpdate({
      city: params.city,
      country: params.country,
    });
    const localTopic = await LocalStorage.getItem(FCM_TOPIC);
    if (localTopic && localTopic !== params.city) {
      await unsubscribeFromTopic(localTopic);
    }
    await subscribeToTopic(params.city);
    LocalStorage.setItem(FCM_TOPIC, params.city);
  } catch (e) {
    Warn(e);
  }
}
