/**
 *
 * API for Entities
 *
 */

import service from 'services/fidelight';
import {
  EntitiesAPIResponse,
  FetchPropsPayload,
  ToggleFavoriteActionPayload,
} from './types';

export async function fetch(
  payload: FetchPropsPayload,
): Promise<EntitiesAPIResponse | Error> {
  const { type, city, page = 1 } = payload;

  const resp = await service({
    method: 'GET',
    url: `/v1/search/company/parameters?type=${type}&city=${city}&page=${page}`,
  });

  return resp;
}

export async function toggleFavorite(
  payload: ToggleFavoriteActionPayload,
): Promise<EntitiesAPIResponse | Error> {
  const { id } = payload;

  const body = {
    company: id,
  };

  const resp = await service({
    method: 'POST',
    url: '/v1/user/like/favorite',
    body,
    // url: `/v1/search/company/parameters?type=${type}&city=${city}&page=${page}`,
  });

  return resp;
}
