/**
 *
 * API for Resturants
 *
 */

import service from 'services/fidelight';
import { ResturantsAPIResponse, FetchPropsPayload } from './types';

export async function fetch(
  payload: FetchPropsPayload,
): Promise<ResturantsAPIResponse | Error> {
  const body = {
    city: payload.city,
  };

  const resp = await service({
    method: 'GET',
    url: '/v1/companies',
    body,
  });

  return {
    data: resp,
  };
}
