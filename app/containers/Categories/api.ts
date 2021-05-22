/**
 *
 * API for Categories
 *
 */

import service, { getLocationParam } from 'services/fidelight';
import { CategoriesAPIResponse, FetchPropsPayload } from './types';

export async function fetch(
  payload: FetchPropsPayload,
): Promise<CategoriesAPIResponse | Error> {
  const body = {
    ...getLocationParam(payload),
    limit: payload.limit || 100,
    offset: payload.offset || 0,
  };

  const resp = await service({
    method: 'POST',
    url: '/api/v1.1/category',
    body,
  });

  return {
    ...resp.data,
  };
}
