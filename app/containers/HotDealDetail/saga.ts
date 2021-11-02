/**
 *
 * Saga for HotDealDetail
 *
 */

import { takeEvery, call, put } from 'redux-saga/effects';

import { HotDealDetailAPIResponse, FetchProps } from './types';
import { actions } from './slice';
import * as api from './api';

export const fetchSaga = function* fetch(action: FetchProps) {
  try {
    const data: HotDealDetailAPIResponse = yield call(
      api.fetch,
      action.payload,
    );
    yield put(actions.fetchSuccess({ key: action.payload.key, ...data }));
  } catch (error) {
    yield put(actions.fetchFailure({ key: action.payload.key }));
  }
};

export default function* HotDealDetailSaga() {
  yield takeEvery(actions.fetch.type, fetchSaga);
}
