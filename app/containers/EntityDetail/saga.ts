/**
 *
 * Saga for EntityDetail
 *
 */

import { takeEvery, call, put } from 'redux-saga/effects';

import {
  EntityDetailAPIResponse,
  FetchProps,
  ToggleFavoriteProps,
} from './types';
import { actions } from './slice';
import * as api from './api';

export const fetchSaga = function* fetch(action: FetchProps) {
  try {
    const data: EntityDetailAPIResponse = yield call(api.fetch, action.payload);
    yield put(actions.fetchSuccess({ key: action.payload.key, ...data }));
  } catch (error) {
    yield put(actions.fetchFailure({ key: action.payload.key }));
  }
};

export const toggleFavoriteSaga = function* toggleFavorite(
  action: ToggleFavoriteProps,
) {
  try {
    yield call(api.toggleFavorite, action.payload);
    yield put(actions.toggleFavoriteSuccess({ ...action.payload }));
  } catch (error) {
    yield put(actions.toggleFavoriteFailure({ ...action.payload }));
  }
};

export default function* EntityDetailSaga() {
  yield takeEvery(actions.fetch.type, fetchSaga);
  yield takeEvery(actions.toggleFavorite.type, toggleFavoriteSaga);
}
