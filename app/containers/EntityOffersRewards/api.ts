/**
 *
 * API for EntityOffersRewards
 *
 */

import service from 'services/fidelight';
import {
  EntityOffersRewardsAPIResponse,
  FetchPropsPayload,
  SubmitAPIResponse,
  SubmitPropsPayload,
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
