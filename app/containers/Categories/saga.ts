/**
 *
 * Saga for Categories
 *
 */

import { takeEvery, call, put } from 'redux-saga/effects';

import { CategoriesAPIResponse, FetchProps } from './types';
import { actions } from './slice';
import * as api from './api';

export const fetchSaga = function* fetch(action: FetchProps) {
  try {
    const data: CategoriesAPIResponse = yield call(api.fetch, action.payload);
    yield put(actions.fetchSuccess({ key: action.payload.key, ...data }));
  } catch (error) {
    yield put(actions.fetchFailure({ key: action.payload.key }));
  }
};

export default function* categoriesSaga() {
  yield takeEvery(actions.fetch.type, fetchSaga);
}
