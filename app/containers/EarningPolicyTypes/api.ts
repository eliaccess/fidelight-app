/**
 *
 * API for EarningPolicyTypes
 *
 */

import service from 'services/fidelight';
import { EarningPolicyTypesAPIResponse } from './types';

export async function fetch(): Promise<EarningPolicyTypesAPIResponse | Error> {
  const resp = await service({
    method: 'GET',
    url: '/v1/points/type',
  });

  return resp;
}
