/**
 *
 * Saga for Entities
 *
 */

import { takeEvery, call, put } from 'redux-saga/effects';

import { EntitiesAPIResponse, FetchProps } from './types';
import { actions } from './slice';
import * as api from './api';

export const fetchSaga = function* fetch(action: FetchProps) {
  try {
    const resp: EntitiesAPIResponse = yield call(api.fetch, action.payload);
    yield put(actions.fetchSuccess({ key: action.payload.key, ...resp }));
  } catch (error) {
    yield put(actions.fetchFailure({ key: action.payload.key }));
  }
};

export default function* entitiesSaga() {
  yield takeEvery(actions.fetch.type, fetchSaga);
}
