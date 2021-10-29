/**
 *
 * API for Entities
 *
 */

import service from 'services/fidelight';
import { EntitiesAPIResponse, FetchPropsPayload } from './types';

export async function fetch(
  _payload: FetchPropsPayload,
): Promise<EntitiesAPIResponse | Error> {
  // const { type, city, page = 1 } = payload;

  const resp = await service({
    method: 'GET',
    url: '/v1/companies',
    // url: `/v1/search/company/parameters?type=${type}&city=${city}&page=${page}`,
  });

  return resp;
}
