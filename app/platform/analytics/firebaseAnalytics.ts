import analytics from '@react-native-firebase/analytics';
import { log as crashLogger } from 'platform/crashlytics';
import configs from 'configs';
import { Log } from 'platform/Logger';

function init(): void {
  analytics().setAnalyticsCollectionEnabled(true);
}

function log(...args: any[]) {
  if (configs.LOG_ANALYTICS) {
    Log('FIREBASE ANALYTICS: ', ...args);
  }
}

function setUser({
  id,
  name,
  email,
  ...params
}: {
  id: string;
  name: string;
  email: string;
  [x: string]: any;
}): void {
  if (!id) {
    return;
  }
  analytics().setUserId(id.toString());
  analytics().setUserProperty(name, email);
  Object.keys(params).forEach((key) => {
    analytics().setUserProperty(key, `${params[key]}`);
  });
}

function setUserId(id: string) {
  analytics().setUserId(id.toString());
}

function logScreen(routeName: string, params: any) {
  log('LOGGING SCREEN:', routeName, params);
  analytics().logScreenView({ screen_name: routeName });
  // analytics().logEvent(routeName, params);
  logEvent(routeName, params);
}

function logEvent(event: any, params: any) {
  log('LOGGING EVENT:', event, params);
  crashLogger(event);
  analytics().logEvent(event, params);
}

const fa = {
  init,
  setUser,
  logScreen,
  setUserId,
  logEvent,
};

export default fa;
