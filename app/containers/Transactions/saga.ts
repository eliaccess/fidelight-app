/**
 *
 * Saga for Transactions
 *
 */

import { takeEvery, call, put } from 'redux-saga/effects';

import { Warn } from 'platform/Logger';

import { FetchProps } from './types';
import { actions } from './slice';
import * as api from './api';

export const fetchSaga = function* fetch(_action: FetchProps) {
  try {
    const resp: any = yield call(api.fetch);

    yield put(actions.fetchSuccess({ data: resp?.data?.transactions }));
  } catch (error: any) {
    Warn(error);
    yield put(
      actions.fetchFailure({
        message: error.error.msg,
      }),
    );
  }
};

export default function* TransactionsSaga() {
  yield takeEvery(actions.fetch.type, fetchSaga);
}
