/**
 *
 * API for BusinessTransactions
 *
 */

import service from 'services/fidelight';
import {
  BusinessTransactionsAPIResponse,
  GivePointsAsGiftPayload,
  GivePointsAsGiftAPIResponse,
  GivePointsAsPolicyPayload,
  GivePointsAsPolicyAPIResponse,
  GiveRewardPayload,
  GiveRewardAPIResponse,
} from './types';

export async function fetch(): Promise<
  BusinessTransactionsAPIResponse | Error
> {
  const resp = await service({
    method: 'GET',
    url: '/v1/Transactions',
  });

  return resp;
}

export async function givePointsAsGift(
  payload: GivePointsAsGiftPayload,
): Promise<GivePointsAsGiftAPIResponse | Error> {
  const body = { ...payload.data };

  const resp = await service({
    method: 'POST',
    url: '/v1/company/points/gift/',
    body,
  });

  return {
    message: resp.msg,
  };
}

export async function givePointsAsPolicy(
  payload: GivePointsAsPolicyPayload,
): Promise<GivePointsAsPolicyAPIResponse | Error> {
  const { user, value } = payload.data;

  const body = {
    user,
    value: parseInt(value, 10),
  };

  const resp = await service({
    method: 'POST',
    url: '/v1/company/points/use/',
    body,
  });

  return {
    message: resp.msg,
  };
}
export async function giveReward(
  payload: GiveRewardPayload,
): Promise<GiveRewardAPIResponse | Error> {
  const { user, discount } = payload.data;

  const body = {
    user,
    discount: parseInt(discount, 10),
  };

  const resp = await service({
    method: 'POST',
    url: '/v1/discount/use/',
    body,
  });

  return {
    message: resp.msg,
  };
}
