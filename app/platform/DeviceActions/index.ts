import { Linking, Share, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';

import { Warn } from 'platform/Logger';
import configs from 'configs';

export function openUrl(url: string): void {
  Linking.canOpenURL(url)
    .then((supported) => {
      if (!supported) {
        Warn(`Can't handle url: ${url}`);
      } else {
        Linking.openURL(url).catch((err) => {
          Warn('openURL error', err);
        });
      }
    })
    .catch((err) => Warn('An unexpected error happened', err));
}

export function call(number: string): void {
  if (!number) {
    return;
  }
  openUrl(`tel:${number}`);
}

function sms(number: string): void {
  if (!number) {
    return;
  }
  openUrl(`sms:${number}`);
}

function share(data: { title: string; message: string; url?: string }): void {
  if (!data.message) {
    return;
  }
  let { message } = data;
  let { url } = data;
  if (!url) {
    url = configs.DOWNLOAD_URL;
  }
  if (Platform.OS === 'android') {
    message = `${data.message}\n\n${url}`;
  }
  Share.share({ ...data, message, url }, { dialogTitle: data.title });
}

function openStore(): void {
  const url =
    Platform.OS === 'ios' ? configs.ITUNES_LINK : configs.PLAY_STORE_LINK;
  openUrl(url);
}

function deviceInfo(): {
  brand: string;
  model: string;
  systemVersion: string;
  id: string;
  carrier: string;
  deviceApiLevel: string | number;
} {
  const obj = {
    brand: DeviceInfo.getBrand(),
    model: DeviceInfo.getModel(),
    systemVersion: DeviceInfo.getSystemVersion(),
    id: DeviceInfo.getDeviceId(),
    carrier: DeviceInfo.getCarrierSync(),
    deviceApiLevel:
      Platform.OS === 'android' ? DeviceInfo.getApiLevelSync() : '',
  };
  return obj;
}

export default {
  call,
  sms,
  share,
  openStore,
  openUrl,
  deviceInfo,
};
