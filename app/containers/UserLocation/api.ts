/**
 *
 * API for UserLocation
 *
 */

import configs from 'configs';
import LocalStorage from 'platform/LocalStorage';
import { UserLocationAPIResponse } from './types';

export function fetchUserLocation(): Promise<UserLocationAPIResponse | Error> {
  return LocalStorage.getItem(configs.USER_LOCATION);
}

export function setUserLocation(data: ICityItem) {
  return LocalStorage.setItem(configs.USER_LOCATION, data);
}
