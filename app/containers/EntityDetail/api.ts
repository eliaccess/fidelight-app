/**
 *
 * API for EntityDetail
 *
 */

import service from 'services/fidelight';
import {
  EntityDetailAPIResponse,
  FetchPropsPayload,
  ToggleFavoriteActionPayload,
} from './types';

export async function fetch(
  _payload: FetchPropsPayload,
): Promise<EntityDetailAPIResponse | Error> {
  // const { entityId } = payload;

  const resp = await service({
    method: 'GET',
    // url:'/v1/company/profile/${entityId}'
    url: '/v1/company/profile',
  });

  return resp;
}

export async function toggleFavorite(
  payload: ToggleFavoriteActionPayload,
): Promise<EntityDetailAPIResponse | Error> {
  const { entityId } = payload;

  const body = {
    company: entityId,
  };

  const resp = await service({
    method: 'POST',
    url: '/v1/user/like/favorite',
    body,
    // url: `/v1/search/company/parameters?type=${type}&city=${city}&page=${page}`,
  });

  return resp;
}
