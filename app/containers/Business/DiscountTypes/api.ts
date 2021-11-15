/**
 *
 * API for DiscountTypes
 *
 */

import service from 'services/fidelight';
import { DiscountTypesAPIResponse } from './types';

export async function fetch(): Promise<DiscountTypesAPIResponse | Error> {
  const resp = await service({
    method: 'GET',
    url: '/v1/discount/type/',
  });

  return resp;
}
