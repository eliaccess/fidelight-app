/**
 *
 * API for BusinessProfile
 *
 */

import { Platform } from 'react-native';
import service from 'services/fidelight';
import {
  AddBackgroundImageAPIResponse,
  AddBackgroundImagePropsPayload,
  AddLogoAPIResponse,
  AddLogoPropsPayload,
  BusinessProfileAPIResponse,
  UpdatePropsPayload,
} from './types';

export async function fetch(): Promise<BusinessProfileAPIResponse | Error> {
  const resp = await service({
    method: 'GET',
    url: '/v1/company/profile/me',
  });

  return resp;
}

export async function update(
  payload: UpdatePropsPayload,
): Promise<BusinessProfileAPIResponse | Error> {
  const body = {
    ...payload.data,
  };

  const resp = await service({
    method: 'PUT',
    url: '/v1/company/profile',
    body,
  });

  return resp;
}

export async function addLogo(
  payload: AddLogoPropsPayload,
): Promise<AddLogoAPIResponse | Error> {
  const form = new FormData();
  const photo = {
    uri:
      Platform.OS === 'android'
        ? payload.data.uri
        : payload.data.uri.replace('file://', ''),
    type: payload.data.type,
    name: payload.data.fileName,
  };
  form.append('logo', photo);

  const resp = await service({
    method: 'POST',
    url: '/v1/company/logo',
    body: form,
    bodyParsing: 'form',
  });

  return {
    data: resp.data,
    message: resp.msg,
  };
}

export async function addBackgroundImage(
  payload: AddBackgroundImagePropsPayload,
): Promise<AddBackgroundImageAPIResponse | Error> {
  const form = new FormData();
  const photo = {
    uri:
      Platform.OS === 'android'
        ? payload.data.uri
        : payload.data.uri.replace('file://', ''),
    type: payload.data.type,
    name: payload.data.fileName,
  };
  form.append('backgroundPicture', photo);

  const resp = await service({
    method: 'POST',
    url: '/v1/company/background',
    body: form,
    bodyParsing: 'form',
  });

  return {
    data: resp.data,
    message: resp.msg,
  };
}
