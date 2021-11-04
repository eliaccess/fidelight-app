/**
 *
 * API for Authentication
 *
 */

import configs from 'configs';
import LocalStorage from 'platform/LocalStorage';
import service, {
  setAuthenticationHeader,
  setAuthenticationTokens,
  removeAuthenticationTokens,
} from 'services/fidelight';
import {
  FetchUserAPIResponse,
  LoginActionPayload,
  SignUpActionPayload,
  SignUpResponsePayload,
  UpdateUserInfoActionPayload,
  UpdateUserInfoAPIResponse,
} from './types';

export async function fetchLocalToken(): Promise<boolean> {
  const token =
    (await LocalStorage.getItem(configs.AUTH_ACCESS_TOKEN_KEY)) || '';
  if (token) {
    setAuthenticationHeader({ token });
  }
  return !!token;
}

export async function getAccountType(): Promise<string> {
  const type = (await LocalStorage.getItem(configs.ACCOUNT_TYPE)) || '';
  return type;
}

export async function fetchLocalUserDetails(): Promise<
  FetchUserAPIResponse | Error
> {
  const user = await LocalStorage.getItem(configs.USER_DETAIL_KEY);
  return user;
}

export function setLocalUserDetails(data: FetchUserAPIResponse): void {
  LocalStorage.setItem(configs.USER_DETAIL_KEY, { ...data.data });
}

export async function fetchUserDetails(): Promise<
  FetchUserAPIResponse | Error
> {
  const resp = await service({
    method: 'GET',
    url: '/v1/user/profile/',
    parseError: true,
  });

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
): Promise<SignUpResponsePayload | Error> {
  const body = {
    surname: payload.data.surname,
    name: payload.data.name,
    email: payload.data.email,
    phone: payload.data.phone,
    birthdate: payload.data.birthdate,
    password: payload.data.password,
  };

  const resp = await service({
    method: 'POST',
    url: '/v1/user/register',
    body,
    noAuth: true,
    parseError: true,
  });
  if (resp?.data.id) {
    setAuthenticationTokens({
      accessToken: resp.data.accessToken,
      refreshToken: resp.data.refreshToken,
      qrCode: resp.data.qrCode,
    });
    return { message: resp.msg };
  }
  throw Error(resp?.msg);
}

export async function login(
  payload: LoginActionPayload,
): Promise<boolean | Error> {
  let resp: any = null;
  if (payload?.provider === 'local') {
    const body = {
      email: payload.data.email,
      password: payload.data.password,
      // medium: payload.medium,
    };
    resp = await service({
      method: 'POST',
      url: '/v1/auth/local',
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
      url: '/v1/auth/social',
      body,
      noAuth: true,
    });
  }
  if (resp?.data?.id) {
    setAuthenticationTokens({
      accessToken: resp.data.accessToken,
      refreshToken: resp.data.refreshToken,
      qrCode: resp.data.qrCode,
    });
    return true;
  }
  throw Error(resp?.msg || 'Something went wrong');
}

export function logout() {
  service({
    method: 'POST',
    url: '/v1/auth/logout',
  });
  // remove accessToken, refreshToken, removeAuthHeader, removeUserDetails
  removeAuthenticationTokens();
}
