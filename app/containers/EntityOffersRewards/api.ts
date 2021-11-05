/**
 *
 * API for EntityOffersRewards
 *
 */

import service from 'services/fidelight';
import { EntityOffersRewardsAPIResponse, FetchPropsPayload } from './types';

export async function fetch(
  payload: FetchPropsPayload,
): Promise<EntityOffersRewardsAPIResponse | Error> {
  const { entityId } = payload;

  const resp = await service({
    method: 'GET',
    url: `/v1/discount/company/${entityId}`,
    // url: '/v1/discount/company/list',
  });

  return resp;
}
