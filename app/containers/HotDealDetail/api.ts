/**
 *
 * API for HotDealDetail
 *
 */

import service from 'services/fidelight';
import { HotDealDetailAPIResponse, FetchPropsPayload } from './types';

export async function fetch(
  payload: FetchPropsPayload,
): Promise<HotDealDetailAPIResponse | Error> {
  const { dealId } = payload;

  const resp = await service({
    method: 'GET',
    url: `/v1/discount/${dealId}`,
    // url: '/v1/discount/hotDealDetail',
  });

  return resp;
}
