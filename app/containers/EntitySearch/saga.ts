/**
 *
 * Saga for EntitySearch
 *
 */

import { takeLatest, call, put } from 'redux-saga/effects';

import { EntitySearchAPIResponse, FetchProps } from './types';
import { actions } from './slice';
import * as api from './api';

export const fetchSaga = function* fetch(action: FetchProps) {
  try {
    const data: EntitySearchAPIResponse = yield call(
      api.fetchEntities,
      action.payload,
    );
    yield put(actions.fetchSuccess(data));
  } catch (error) {
    yield put(actions.fetchFailure());
  }
};

export default function* EntitySearchSaga() {
  yield takeLatest(actions.fetch.type, fetchSaga);
}
