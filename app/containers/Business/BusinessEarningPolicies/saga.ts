/**
 *
 * Saga for BusinessEarningPolicies
 *
 */

import { takeEvery, call, put } from 'redux-saga/effects';

import { Warn } from 'platform/Logger';

import {
  BusinessEarningPoliciesAPIResponse,
  FetchProps,
  SubmitAPIResponse,
  SubmitProps,
} from './types';
import { actions } from './slice';
import * as api from './api';

export const fetchSaga = function* fetch(action: FetchProps) {
  try {
    const data: BusinessEarningPoliciesAPIResponse = yield call(
      api.fetch,
      action.payload,
    );
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

export const submitSaga = function* submit(action: SubmitProps) {
  try {
    const data: SubmitAPIResponse = yield call(api.submit, action.payload);
    yield put(actions.submitSuccess(data));
  } catch (error: any) {
    Warn(error);
    yield put(
      actions.submitFailure({
        message: error.message || error?.error?.msg,
      }),
    );
  }
};

export default function* BusinessEarningPoliciesSaga() {
  yield takeEvery(actions.fetch.type, fetchSaga);
  yield takeEvery(actions.submit.type, submitSaga);
}
