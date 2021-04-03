import crashlytics from '@react-native-firebase/crashlytics';
import isString from 'lodash/isString';

const crash = crashlytics();

export function initCrashlytics(): void {
  // if (__DEV__) {
  //   return;
  // }
  crash.setCrashlyticsCollectionEnabled(true);
}

export function testCrash(): void {
  if (!__DEV__) {
    return;
  }
  crash.crash();
}

export function log(message: string): void {
  crash.log(message);

  // recordError(message);
}

export function recordError(error: any): void {
  // if (__DEV__) {
  //   return;
  // }

  crash.recordError(new Error(error));
}

export function setProps(props: any) {
  // eslint-disable-next-line no-restricted-syntax
  for (const key in props) {
    const val = props[key];
    if (key === 'uid') {
      crash.setUserId(isString(val) ? val : val.toString());
    } else {
      crash.setAttribute(key, val);
    }
  }
}

export function setUserProperties({
  id,
  email = '',
  name = '',
}: {
  id: string;
  email?: string;
  name?: string;
}): void {
  if (!id) {
    return;
  }
  crash.setUserId(id);
  crash.setAttributes({ id, name, email });
}

export default crash;
