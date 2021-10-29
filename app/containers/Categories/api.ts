/**
 *
 * API for Categories
 *
 */

import service from 'services/fidelight';
import { CategoriesAPIResponse } from './types';

export async function fetch(): Promise<CategoriesAPIResponse | Error> {
  const resp = await service({
    method: 'POST',
    url: '/v1/company/types',
  });

  return {
    data: resp.data,
  };
}
