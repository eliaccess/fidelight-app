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
  LoginResponsePayload,
  SignUpActionPayload,
  SignUpResponsePayload,
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
    url: '/v1/company/profile/me',
    parseError: true,
  });

  return resp;
}

export async function signUp(
  payload: SignUpActionPayload,
): Promise<SignUpResponsePayload | Error> {
  const body = {
    name: payload.data.name,
    password: payload.data.password,
    email: payload.data.email,
    description: payload.data.description || '',
    phone: payload.data.phone,
    companyType: payload.data.companyType,
    country: payload.data.country,
    city: payload.data.city,
    streetName: payload.data.streetName,
    streetNumber: payload.data.streetNumber,
  };

  const resp = await service({
    method: 'POST',
    url: '/v1/company/register',
    body,
    noAuth: true,
    parseError: true,
  });
  if (resp?.data?.login) {
    setAuthenticationTokens({
      accessToken: resp.data.accessToken,
      refreshToken: resp.data.refreshToken,
      qrCode: '',
    });
    return { message: resp.msg };
  }
  throw Error(resp?.msg);
}

export async function login(
  payload: LoginActionPayload,
): Promise<LoginResponsePayload | Error> {
  let resp: any = null;
  if (payload?.provider === 'local') {
    const body = {
      email: payload.data.email,
      password: payload.data.password,
    };
    resp = await service({
      method: 'POST',
      url: '/v1/company/login',
      body,
      noAuth: true,
      parseError: true,
    });
  }
  // else {
  //   const body = {
  //     email: payload.data.email,
  //     name: payload.data.name,
  //     provider: payload.provider,
  //     providerUuid: payload.providerUuid,
  //     medium: payload.medium,
  //   };

  //   resp = await service({
  //     method: 'POST',
  //     url: '/v1/auth/social',
  //     body,
  //     noAuth: true,
  //   });
  // }
  if (resp?.data?.id) {
    setAuthenticationTokens({
      accessToken: resp.data.accessToken,
      refreshToken: resp.data.refreshToken,
      qrCode: '',
    });
    return { message: resp.msg };
  }
  throw Error(resp?.msg);
}

export function logout() {
  service({
    method: 'POST',
    url: '/v1/auth/logout',
  });
  // remove accessToken, refreshToken, removeAuthHeader, removeUserDetails
  removeAuthenticationTokens();
}
