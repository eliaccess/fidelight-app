import { Platform } from 'react-native';
import Permissions, { Permission } from 'react-native-permissions';
import { Warn } from 'platform/Logger';
// import RNAndroidLocationEnabler from 'react-native-android-location-enabler';

// const RESPONSE = {
//   prompt: 'PROMPT',
//   authorized: 'AUTHORIZED',
//   denied: 'DENIED',
//   restricted: 'RESTRICTED',
//   undetermined: 'ERROR',
// };

type PermissionResponse =
  | 'PROMPT'
  | 'AUTHORIZED'
  | 'DENIED'
  | 'RESTRICTED'
  | 'ERROR';

const RESPONSE: { [key: string]: PermissionResponse } = {
  prompt: 'PROMPT',
  granted: 'AUTHORIZED',
  denied: 'DENIED',
  blocked: 'RESTRICTED',
  unavailable: 'ERROR',
};

const LOCATION_PERMISSIONS: Permission[] | undefined = Platform.select({
  android: [
    Permissions.PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION,
    Permissions.PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
  ],
  ios: [Permissions.PERMISSIONS.IOS.LOCATION_WHEN_IN_USE],
});

const checkLocationPermission = ({ permissionResp }): PermissionResponse => {
  if (!LOCATION_PERMISSIONS) {
    return 'ERROR';
  }
  let resp;
  if (Platform.OS === 'android') {
    resp =
      permissionResp[LOCATION_PERMISSIONS[0]] === 'granted'
        ? 'granted'
        : permissionResp[LOCATION_PERMISSIONS[1]];
  } else {
    resp = permissionResp[LOCATION_PERMISSIONS[0]];
  }
  return RESPONSE[resp];
};

export async function getLocationPermission(
  request = true,
): Promise<PermissionResponse> {
  if (!LOCATION_PERMISSIONS) {
    return 'ERROR';
  }
  const permissionResp = await Permissions.checkMultiple(
    LOCATION_PERMISSIONS,
  ).catch((e) => {
    Warn(e);
  });

  const permission = checkLocationPermission({ permissionResp });
  if (!request || permission === 'AUTHORIZED') {
    return permission;
  }

  const permissionRequest = await Permissions.requestMultiple(
    LOCATION_PERMISSIONS,
  );
  return checkLocationPermission({ permissionResp: permissionRequest });
}

export async function getPermission(
  type: Permission,
  request = true,
): Promise<PermissionResponse> {
  let permission = await Permissions.check(type);
  if (!request) {
    return RESPONSE[permission];
  }
  if (permission !== 'granted') {
    permission = await Permissions.request(type);
  }
  return RESPONSE[permission];
}

export async function checkPermission(type): Promise<PermissionResponse> {
  const permission = await Permissions.check(type);
  if (permission !== 'granted') {
    return RESPONSE.prompt;
  }
  return RESPONSE[permission];
}
