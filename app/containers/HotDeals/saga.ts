/**
 *
 * Saga for HotDeals
 *
 */

import { takeEvery, call, put } from 'redux-saga/effects';

import { HotDealsAPIResponse, FetchProps } from './types';
import { actions } from './slice';
import * as api from './api';

export const fetchSaga = function* fetch(action: FetchProps) {
  try {
    const data: HotDealsAPIResponse = yield call(api.fetch, action.payload);
    yield put(actions.fetchSuccess({ key: action.payload.key, ...data }));
  } catch (error: any) {
    yield put(
      actions.fetchFailure({
        key: action.payload.key,
        message: error.error.msg,
      }),
    );
  }
};

export default function* HotDealsSaga() {
  yield takeEvery(actions.fetch.type, fetchSaga);
}
