/**
 *
 * Saga for DiscountTypes
 *
 */

import { takeEvery, call, put } from 'redux-saga/effects';

import { Warn } from 'platform/Logger';

import { DiscountTypesAPIResponse, FetchProps } from './types';
import { actions } from './slice';
import * as api from './api';

export const fetchSaga = function* fetch(_action: FetchProps) {
  try {
    const data: DiscountTypesAPIResponse = yield call(api.fetch);
    yield put(actions.fetchSuccess(data));
  } catch (error) {
    Warn(error);
    yield put(actions.fetchFailure());
  }
};

export default function* DiscountTypesSaga() {
  yield takeEvery(actions.fetch.type, fetchSaga);
}
