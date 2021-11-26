/**
 *
 * Saga for RecentViewedEntities
 *
 */

import { takeEvery, call, put } from 'redux-saga/effects';

import { Warn } from 'platform/Logger';

import {
  RecentViewedEntitiesAPIResponse,
  FetchProps,
  SubmitProps,
  SubmitAPIResponse,
} from './types';
import { actions } from './slice';
import * as api from './api';

export const fetchSaga = function* fetch(_action: FetchProps) {
  try {
    const data: RecentViewedEntitiesAPIResponse = yield call(api.fetch);
    // @ts-ignore
    yield put(actions.fetchSuccess({ data }));
  } catch (error) {
    Warn(error);
    yield put(actions.fetchFailure());
  }
};

export const submitSaga = function* submit(action: SubmitProps) {
  try {
    const data: SubmitAPIResponse = yield call(api.submit, action.payload);
    yield put(actions.submitSuccess(data));
  } catch (error: any) {
    Warn(error);
    yield put(actions.submitFailure());
  }
};

export default function* RecentViewedEntitiesSaga() {
  yield takeEvery(actions.fetch.type, fetchSaga);
  yield takeEvery(actions.submit.type, submitSaga);
}
