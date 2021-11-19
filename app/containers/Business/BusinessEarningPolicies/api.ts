/**
 *
 * API for BusinessEarningPolicies
 *
 */

import service from 'services/fidelight';
import {
  BusinessEarningPoliciesAPIResponse,
  FetchPayload,
  SubmitAPIResponse,
  SubmitPayload,
} from './types';

export async function fetch(
  payload: FetchPayload,
): Promise<BusinessEarningPoliciesAPIResponse | Error> {
  const { entityId } = payload;

  const resp = await service({
    method: 'GET',
    url: `/v1/company/points/${entityId}`,
  });

  return resp;
}

export async function submit(
  payload: SubmitPayload,
): Promise<SubmitAPIResponse | Error> {
  const body = { ...payload.data };

  const resp = await service({
    method: 'PUT',
    url: '/v1/company/points',
    body,
  });

  return {
    message: resp.msg,
  };
}
