/**
 *
 * Saga for BusinessTransactions
 *
 */

import { takeEvery, call, put } from 'redux-saga/effects';

import { Warn } from 'platform/Logger';

import {
  FetchProps,
  GivePointsAsGiftAPIResponse,
  GivePointsAsGiftProps,
  GivePointsAsPolicyAPIResponse,
  GivePointsAsPolicyProps,
  GiveRewardAPIResponse,
  GiveRewardProps,
} from './types';
import { actions } from './slice';
import * as api from './api';

export const fetchSaga = function* fetch(_action: FetchProps) {
  try {
    const resp: any = yield call(api.fetch);

    yield put(actions.fetchSuccess(resp));
  } catch (error: any) {
    Warn(error);
    yield put(
      actions.fetchFailure({
        message: error.error.msg,
      }),
    );
  }
};

export const givePointsAsGiftSaga = function* givePointsAsGift(
  action: GivePointsAsGiftProps,
) {
  try {
    const data: GivePointsAsGiftAPIResponse = yield call(
      api.givePointsAsGift,
      action.payload,
    );
    yield put(actions.givePointsAsGiftSuccess(data));
    yield put(actions.fetch());
  } catch (error: any) {
    Warn(error);
    yield put(
      actions.givePointsAsGiftFailure({
        message: error.message || error?.error?.msg,
      }),
    );
  }
};

export const givePointsAsPolicySaga = function* givePointsAsPolicy(
  action: GivePointsAsPolicyProps,
) {
  try {
    const data: GivePointsAsPolicyAPIResponse = yield call(
      api.givePointsAsPolicy,
      action.payload,
    );
    yield put(actions.givePointsAsPolicySuccess(data));
    yield put(actions.fetch());
  } catch (error: any) {
    Warn(error);
    yield put(
      actions.givePointsAsPolicyFailure({
        message: error.message || error?.error?.msg,
      }),
    );
  }
};

export const giveRewardSaga = function* giveReward(action: GiveRewardProps) {
  try {
    const data: GiveRewardAPIResponse = yield call(
      api.giveReward,
      action.payload,
    );
    yield put(actions.giveRewardSuccess(data));
    yield put(actions.fetch());
  } catch (error: any) {
    Warn(error);
    yield put(
      actions.giveRewardFailure({
        message: error.message || error?.error?.msg,
      }),
    );
  }
};

export default function* businessTransactionsSaga() {
  yield takeEvery(actions.fetch.type, fetchSaga);
  yield takeEvery(actions.givePointsAsGift.type, givePointsAsGiftSaga);
  yield takeEvery(actions.givePointsAsPolicy.type, givePointsAsPolicySaga);
  yield takeEvery(actions.giveReward.type, giveRewardSaga);
}
