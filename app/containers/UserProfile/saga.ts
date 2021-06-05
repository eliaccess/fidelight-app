/**
 *
 * Saga for UserProfile
 *
 */

import { takeEvery, call, put } from 'redux-saga/effects';

import { Warn } from 'platform/Logger';

import { UserProfileAPIResponse, FetchProps, UpdateProps } from './types';
import { actions } from './slice';
import * as api from './api';

export const fetchSaga = function* fetch(_action: FetchProps) {
  try {
    const data: UserProfileAPIResponse = yield call(api.fetch);
    yield put(actions.fetchSuccess(data));
  } catch (error) {
    Warn(error);
    yield put(actions.fetchFailure());
  }
};

export const updateSaga = function* update(action: UpdateProps) {
  try {
    yield call(api.update, action.payload);
    yield put(actions.updateSuccess());
  } catch (error) {
    Warn(error);
    yield put(actions.updateFailure());
  }
};

export default function* UserProfileSaga() {
  yield takeEvery(actions.fetch.type, fetchSaga);
  yield takeEvery(actions.update.type, updateSaga);
}
