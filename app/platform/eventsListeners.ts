import { Log } from 'platform/Logger';

import { setUserProperties as crashlyticsSetUser } from './crashlytics';
import { setUser as analyticsSetUser } from './analytics';

const onUserUpdate = (params) => {
  Log('Setting Analytics User', params);
  const user = {
    name: params.name,
    email: params.email,
    id: params.id,
    surname: params.surname,
    phone: params.phone,
    birthday: params.birthday,
  };
  analyticsSetUser(user);
  crashlyticsSetUser(user);
};

/**
 * All functions to handle events like sign in, sign out, etc for side effects
 */
export function onSignIn(user): void {
  const analyticsUser = {
    id: user.id,
    name: user.name,
    email: user.email,
    surname: user.surname,
    phone: user.phone,
    birthday: user.birthday,
  };

  if (analyticsUser?.name) {
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

// const FCM_TOPIC = 'fcm/topic';

// export async function onLocationChange(params: any): Promise<void> {
//   try {
//     if (!params?.city) {
//       throw Error('City property missing in params');
//     }
//     onUserUpdate({
//       city: params.city,
//       country: params.country,
//     });
//     const localTopic = await LocalStorage.getItem(FCM_TOPIC);
//     if (localTopic && localTopic !== params.city) {
//       await unsubscribeFromTopic(localTopic);
//     }
//     await subscribeToTopic(params.city);
//     LocalStorage.setItem(FCM_TOPIC, params.city);
//   } catch (e) {
//     Warn(e);
//   }
// }
