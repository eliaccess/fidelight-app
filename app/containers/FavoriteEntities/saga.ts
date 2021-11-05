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
    const resp: FavoriteEntitiesAPIResponse = yield call(api.fetch);
    // TODO need to correct this after api correct
    if (resp?.data) {
      yield put(actions.fetchSuccess(resp));
    } else {
      yield put(
        actions.fetchFailure({
          // @ts-ignore
          message: resp.msg,
        }),
      );
    }
  } catch (error: any) {
    Warn(error);
    yield put(
      actions.fetchFailure({
        message: error.error.msg,
      }),
    );
  }
};

export default function* favoriteEntitiesSaga() {
  yield takeEvery(actions.fetch.type, fetchSaga);
}
