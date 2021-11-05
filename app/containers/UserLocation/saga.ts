/**
 *
 * Saga for UserLocation
 *
 */

import { takeEvery, call, put } from 'redux-saga/effects';
// import * as eventsListeners from 'platform/EventsListeners';
import { SetProps } from './types';
import { actions } from './slice';
import * as api from './api';

export const fetchSaga = function* fetch() {
  try {
    const data = yield call(api.fetchUserLocation);
    yield put(actions.fetchSuccess({ data }));
  } catch (error) {
    yield put(actions.fetchFailure());
  }
};

export const setSaga = function* set(action: SetProps) {
  try {
    yield call(api.setUserLocation, action.payload.data);
    // eventsListeners.onLocationChange(action.payload.data);
  } catch (e) {
  } finally {
    yield put(actions.setSuccess(action.payload));
  }
};

export default function* userLocationSaga() {
  yield takeEvery(actions.fetch.type, fetchSaga);
  yield takeEvery(actions.set.type, setSaga);
}
