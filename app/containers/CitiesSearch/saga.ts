/**
 *
 * Saga for CitiesSearch
 *
 */

import { takeLatest, call, put } from 'redux-saga/effects';

import { CitiesSearchAPIResponse, FetchProps } from './types';
import { actions } from './slice';
import * as api from './api';

export const fetchSaga = function* fetch(action: FetchProps) {
  try {
    const data: CitiesSearchAPIResponse = yield call(
      api.fetchCities,
      action.payload,
    );
    yield put(actions.fetchSuccess(data));
  } catch (error) {
    yield put(actions.fetchFailure());
  }
};

export default function* citiesSearchSaga() {
  yield takeLatest(actions.fetch.type, fetchSaga);
}
