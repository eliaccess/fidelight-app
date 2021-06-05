/**
 *
 * API for UserProfile
 *
 */

import service from 'services/fidelight';
import { UserProfileAPIResponse, UpdatePropsPayload } from './types';

export async function fetch(): Promise<UserProfileAPIResponse | Error> {
  const resp = await service({
    method: 'GET',
    url: '/v1/user/profile/',
  });

  return {
    data: resp,
  };
}

export async function update(
  payload: UpdatePropsPayload,
): Promise<UserProfileAPIResponse | Error> {
  const body = {
    ...payload,
  };
  const resp = await service({
    method: 'GET',
    url: '/v1/user/profile/',
    body,
  });

  return {
    data: resp,
  };
}
