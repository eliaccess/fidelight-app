/**
 *
 * API for HotDeals
 *
 */

import service from 'services/fidelight';
import { HotDealsAPIResponse, FetchPropsPayload } from './types';

export async function fetch(
  payload: FetchPropsPayload,
): Promise<HotDealsAPIResponse | Error> {
  const body = {
    city: payload.city,
  };

  const resp = await service({
    method: 'GET',
    url: '/v1/hotdeals',
    body,
  });

  return {
    data: resp,
  };
}
