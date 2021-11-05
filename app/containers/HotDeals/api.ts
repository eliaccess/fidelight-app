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
  const { city } = payload;

  const resp = await service({
    method: 'GET',
    url: `/v1/discount/hotdeals/${city}`,
  });

  return resp;
}
