import { Log } from 'platform/Logger';
import configs from 'configs';

import firebaseAnalytics from './firebaseAnalytics';

const DEBUG = __DEV__;
// const DEBUG = false;

function log(...args) {
  if (configs.LOG_ANALYTICS) {
    Log('ANALYTICS: ', ...args);
  }
}

export function initAnalytics() {
  log('INITIALIZING');
  if (DEBUG) {
    return;
  }
  firebaseAnalytics.init();
}

export function setUser(params) {
  log('SETTING USER:', params);
  if (DEBUG) {
    return;
  }
  firebaseAnalytics.setUser(params);
}

export async function logScreen(route, extraParams = {}): Promise<void> {
  const params = route.params
    ? { ...route.params, ...extraParams }
    : extraParams;
  log('LOGGING SCREEN:', route.name, params);
  if (DEBUG) {
    return;
  }
  firebaseAnalytics.logScreen(route.name, params);
}

export function setUserId(id) {
  log('SETTING USER ID:', id);
  if (!id) {
    return;
  }
  if (DEBUG) {
    return;
  }
  firebaseAnalytics.setUserId(id.toString());
}

export async function logEvent(event: string, params?: any): Promise<void> {
  log('LOGGING EVENT:', event, params);
  if (DEBUG) {
    return;
  }
  firebaseAnalytics.logEvent(event, params);
}

export default {
  initAnalytics,
  setUser,
  setUserId,
  logScreen,
  logEvent,
};
