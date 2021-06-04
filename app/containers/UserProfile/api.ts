/**
 *
 * API for UserProfile
 *
 */

import service from 'services/fidelight';
import { UserProfileAPIResponse } from './types';

export async function fetch(): Promise<UserProfileAPIResponse | Error> {
  const resp = await service({
    method: 'GET',
    url: '/v1/user/profile/',
  });

  return {
    data: resp,
  };
}
