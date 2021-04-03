import messaging from '@react-native-firebase/messaging';
import DeviceActions from 'platform/DeviceActions';

import { Warn } from 'platform/Logger';

export async function getFCMToken(): Promise<string | null> {
  const fcmToken = await messaging().getToken();
  if (fcmToken) {
    return fcmToken;
  }
  return null;
}

export function getDeviceId(): String {
  return DeviceActions.deviceInfo().id;
}

let token: string;

export async function fcmListener(): Promise<String> {
  await messaging().onTokenRefresh((fcmToken) => {
    token = fcmToken || '';
  });
  return token;
}

export async function initNotifications(): Promise<void> {
  const authState = await messaging().hasPermission();
  if (authState === messaging.AuthorizationStatus.AUTHORIZED) {
    return;
  }
  try {
    await messaging().requestPermission();
  } catch (error) {
    Warn(error);
    // User has rejected permissions
  }
}

export const subscribeToTopic = async (topic: string) => {
  try {
    await messaging().subscribeToTopic(topic);
    return true;
  } catch (e) {
    return e;
  }
};

export const unsubscribeFromTopic = async (topic: string) => {
  try {
    await messaging().unsubscribeFromTopic(topic);
    return true;
  } catch (e) {
    return e;
  }
};

interface NotificationData {
  url?: string;
}
export async function getInitialNotificationRoute(): Promise<
  NotificationData | undefined
> {
  const notificationOpen = await messaging().getInitialNotification();
  return notificationOpen?.data;
}
