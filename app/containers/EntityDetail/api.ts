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
  payload: FetchPropsPayload,
): Promise<EntityDetailAPIResponse | Error> {
  const { entityId } = payload;

  const resp = await service({
    method: 'GET',
    url: `/v1/company/profile/${entityId}`,
    // url: '/v1/company/profile',
  });

  return resp;
}

export async function toggleFavorite(
  payload: ToggleFavoriteActionPayload,
): Promise<EntityDetailAPIResponse | Error> {
  const { entityId, isFavorite } = payload;

  const body = {
    company: entityId,
  };

  const resp = await service({
    method: isFavorite ? 'DELETE' : 'POST',
    url: '/v1/user/like/',
    body,
  });

  return resp;
}
