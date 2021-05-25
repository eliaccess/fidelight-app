/**
 *
 * API for Authentication
 *
 */

import LocalStorage from 'platform/LocalStorage';
import service, {
  setAuthenticationHeader,
  removeAuthenticationHeader,
} from 'services/fidelight';
import {
  FetchUserAPIResponse,
  LoginActionPayload,
  SignUpActionPayload,
  UpdateUserInfoActionPayload,
  UpdateUserInfoAPIResponse,
} from './types';

const AUTH_TOKEN_KEY = 'Fidelight/AuthToken';
const AUTH_OLD_TOKEN_KEY = 'TOKEN_KEY';
const USER_DETAIL_KEY = 'Fidelight/UserDetails';

export async function fetchLocalToken(): Promise<boolean> {
  const token = (await LocalStorage.getItem(AUTH_TOKEN_KEY)) || '';
  const oldToken = (await LocalStorage.getItem(AUTH_OLD_TOKEN_KEY)) || '';
  if (token || oldToken) {
    setAuthenticationHeader({ token, oldToken });
  }
  return !!token || !!oldToken;
}

export async function fetchLocalUserDetails(): Promise<
  FetchUserAPIResponse | Error
> {
  const user = await LocalStorage.getItem(USER_DETAIL_KEY);
  return user;
}

export function setLocalUserDetails(data: FetchUserAPIResponse): void {
  LocalStorage.setItem(USER_DETAIL_KEY, { ...data.data });
}

export async function fetchUserDetails(): Promise<
  FetchUserAPIResponse | Error
> {
  const resp = await service({
    method: 'POST',
    url: '/v1/user/me',
    parseError: true,
  });

  resp.data = {
    ...resp.data.user,
  };
  return resp;
}

export function updateUserInfo(
  payload: UpdateUserInfoActionPayload,
): Promise<UpdateUserInfoAPIResponse | Error> {
  const body: {
    googleId?: string;
    facebookId?: string;
    email?: string;
    name?: string;
    contactNumber?: string;
  } = {
    ...payload.data,
  };

  return service({
    method: 'POST',
    url: '/api/v1.1/user/profile/update',
    body,
    parseError: true,
  });
}

export async function signUp(
  payload: SignUpActionPayload,
): Promise<boolean | Error> {
  const body = {
    name: payload.data.name,
    email: payload.data.email,
    password: payload.data.password,
    medium: payload.data.medium,
  };

  const resp = await service({
    method: 'POST',
    url: '/api/v1.1/user/signup',
    body,
    noAuth: true,
    parseError: true,
  });
  if (resp?.data?.tokens?.jwtToken) {
    setAuthenticationHeader({ token: resp?.data.tokens.jwtToken });
    await LocalStorage.setItem(AUTH_TOKEN_KEY, resp?.data.tokens.jwtToken);
    return true;
  }
  throw Error(resp?.data?.msg);
}

export async function login(
  payload: LoginActionPayload,
): Promise<boolean | Error> {
  LocalStorage.removeItem(AUTH_OLD_TOKEN_KEY);
  let resp: any = null;
  if (payload?.provider === 'local') {
    const body = {
      email: payload.data.email,
      password: payload.data.password,
      medium: payload.medium,
    };
    resp = await service({
      method: 'POST',
      url: '/v1/user/login/',
      body,
      noAuth: true,
      parseError: true,
    });
  } else {
    const body = {
      email: payload.data.email,
      name: payload.data.name,
      provider: payload.provider,
      providerUuid: payload.providerUuid,
      medium: payload.medium,
    };
    resp = await service({
      method: 'POST',
      url: '/api/v1.1/auth/social',
      body,
      noAuth: true,
    });
  }
  if (resp?.token) {
    setAuthenticationHeader({ token: resp.token });
    await LocalStorage.setItem(AUTH_TOKEN_KEY, resp.token);
    return !!resp.token;
  }
  throw Error(resp?.data?.msg || 'Something went wrong');
}

export function logout() {
  service({
    method: 'POST',
    url: '/api/v1.1/auth/logout',
  });
  LocalStorage.removeItem(AUTH_TOKEN_KEY);
  LocalStorage.removeItem(AUTH_OLD_TOKEN_KEY);
  LocalStorage.removeItem(USER_DETAIL_KEY);
  removeAuthenticationHeader();
}
