/**
 *
 * Saga for FavoriteEntities
 *
 */

import { takeEvery, call, put } from 'redux-saga/effects';

import { Warn } from 'platform/Logger';

import { FavoriteEntitiesAPIResponse } from './types';
import { actions } from './slice';
import * as api from './api';

export const fetchSaga = function* fetch() {
  try {
    const data: FavoriteEntitiesAPIResponse = yield call(api.fetch);
    yield put(actions.fetchSuccess(data));
  } catch (error) {
    Warn(error);
    yield put(actions.fetchFailure());
  }
};

export default function* favoriteEntitiesSaga() {
  yield takeEvery(actions.fetch.type, fetchSaga);
}
