/**
 *
 * API for CompanyTypes
 *
 */

import service from 'services/fidelight';
import { CompanyTypesAPIResponse } from './types';

export async function fetch(): Promise<CompanyTypesAPIResponse | Error> {
  const resp = await service({
    method: 'POST',
    url: '/v1/company/type',
  });

  return {
    data: resp.data,
  };
}
