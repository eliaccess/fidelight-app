/**
 *
 * Saga for EarningPolicyTypes
 *
 */

import { takeEvery, call, put } from 'redux-saga/effects';

import { Warn } from 'platform/Logger';

import { EarningPolicyTypesAPIResponse, FetchProps } from './types';
import { actions } from './slice';
import * as api from './api';

export const fetchSaga = function* fetch(_action: FetchProps) {
  try {
    const data: EarningPolicyTypesAPIResponse = yield call(api.fetch);
    yield put(actions.fetchSuccess(data));
  } catch (error: any) {
    Warn(error);
    yield put(
      actions.fetchFailure({
        message: error.message || error?.error?.msg,
      }),
    );
  }
};

export default function* earningPolicyTypesSaga() {
  yield takeEvery(actions.fetch.type, fetchSaga);
}
