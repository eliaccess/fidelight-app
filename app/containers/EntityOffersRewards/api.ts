/**
 *
 * API for EntityOffersRewards
 *
 */

import { Platform } from 'react-native';
import service from 'services/fidelight';
import {
  AddLogoAPIResponse,
  AddLogoPropsPayload,
  EntityOffersRewardsAPIResponse,
  FetchPropsPayload,
  RemoveAPIResponse,
  RemovePropsPayload,
  SubmitAPIResponse,
  SubmitPropsPayload,
  UpdateAPIResponse,
  UpdatePropsPayload,
} from './types';

export async function fetch(
  payload: FetchPropsPayload,
): Promise<EntityOffersRewardsAPIResponse | Error> {
  const { entityId } = payload;

  const resp = await service({
    method: 'GET',
    url: `/v1/discount/company/${entityId}`,
    // url: '/v1/discount/company/list',
  });

  return resp;
}

export async function submit(
  payload: SubmitPropsPayload,
): Promise<SubmitAPIResponse | Error> {
  const body = payload.data;
  const resp = await service({
    method: 'POST',
    url: '/v1/discount/',
    body,
  });

  return {
    message: resp.msg,
  };
}

export async function update(
  payload: UpdatePropsPayload,
): Promise<UpdateAPIResponse | Error> {
  const body = payload.data;
  const resp = await service({
    method: 'PUT',
    url: `/v1/discount/${payload.discountId}`,
    body,
  });

  return {
    message: resp.msg,
  };
}

export async function remove(
  payload: RemovePropsPayload,
): Promise<RemoveAPIResponse | Error> {
  const resp = await service({
    method: 'DELETE',
    url: `/v1/discount/${payload.discountId}`,
  });

  return {
    message: resp.msg,
  };
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
  form.append('picture', photo);

  const resp = await service({
    method: 'POST',
    url: `/v1/discount/picture/${payload.discountId}`,
    body: form,
    bodyParsing: 'form',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return {
    message: resp.msg,
  };
}
