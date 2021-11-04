/**
 *
 * API for Transactions
 *
 */

import service from 'services/fidelight';
import { TransactionsAPIResponse } from './types';

export async function fetch(): Promise<TransactionsAPIResponse | Error> {
  const resp = await service({
    method: 'GET',
    url: '/v1/transactions',
  });

  return {
    data: resp.data.transactions,
  };
}
