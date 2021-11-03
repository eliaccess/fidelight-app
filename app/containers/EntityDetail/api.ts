/**
 *
 * API for EntityDetail
 *
 */

import service from 'services/fidelight';
import { EntityDetailAPIResponse, FetchPropsPayload } from './types';

export async function fetch(
  _payload: FetchPropsPayload,
): Promise<EntityDetailAPIResponse | Error> {
  // const { entityId } = payload;

  const resp = await service({
    method: 'GET',
    // url:'/v1/company/profile/${entityId}'
    url: '/v1/company/profile',
  });

  return resp;
}
