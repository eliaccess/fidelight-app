/**
 *
 * API for EntitySearch
 *
 */

import service from 'services/fidelight';

import { EntitySearchAPIResponse, FetchPropsPayload } from './types';

export async function fetchEntities(
  payload: FetchPropsPayload,
): Promise<EntitySearchAPIResponse | Error> {
  const { query } = payload;

  const resp = await service({
    method: 'GET',
    url: `/v1/search/company/parameters?name=${query}`,
  });

  return resp;
}
