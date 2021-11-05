/**
 *
 * API for FavoriteEntities
 *
 */

import service from 'services/fidelight';
import { FavoriteEntitiesAPIResponse } from './types';

export async function fetch(): Promise<FavoriteEntitiesAPIResponse | Error> {
  const resp = await service({
    method: 'GET',
    url: '/v1/user/like/',
  });

  return resp;
}
