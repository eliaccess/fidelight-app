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

  return resp;
}

export async function update(
  payload: UpdatePropsPayload,
): Promise<UserProfileAPIResponse | Error> {
  const body = {
    ...payload.data,
  };

  const resp = await service({
    method: 'PUT',
    url: '/v1/user/profile/',
    body,
  });

  return resp;
}
