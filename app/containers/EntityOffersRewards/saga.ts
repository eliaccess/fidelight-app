/**
 *
 * Saga for EntityOffersRewards
 *
 */

import { takeEvery, call, put } from 'redux-saga/effects';

import {
  EntityOffersRewardsAPIResponse,
  FetchProps,
  SubmitAPIResponse,
  SubmitProps,
  UpdateAPIResponse,
  UpdateProps,
} from './types';
import { actions } from './slice';
import * as api from './api';

export const fetchSaga = function* fetch(action: FetchProps) {
  try {
    const data: EntityOffersRewardsAPIResponse = yield call(
      api.fetch,
      action.payload,
    );
    yield put(actions.fetchSuccess({ key: action.payload.key, ...data }));
  } catch (error: any) {
    yield put(
      actions.fetchFailure({
        key: action.payload.key,
        message: error.error.msg,
      }),
    );
  }
};

export const submitSaga = function* submit(action: SubmitProps) {
  try {
    const resp: SubmitAPIResponse = yield call(api.submit, action.payload);
    yield put(actions.submitSuccess({ key: action.payload.key, ...resp }));
    yield put(
      actions.fetch({
        key: action.payload.key,
        entityId: action.payload.data.company,
      }),
    );
  } catch (error: any) {
    yield put(
      actions.submitFailure({
        key: action.payload.key,
        message: error?.message || error?.error?.msg,
      }),
    );
  }
};

export const updateSaga = function* update(action: UpdateProps) {
  try {
    const resp: UpdateAPIResponse = yield call(api.update, action.payload);
    yield put(actions.updateSuccess({ key: action.payload.key, ...resp }));
    yield put(
      actions.fetch({
        key: action.payload.key,
        entityId: action.payload.entityId,
      }),
    );
  } catch (error: any) {
    yield put(
      actions.updateFailure({
        key: action.payload.key,
        message: error?.message || error?.error?.msg,
      }),
    );
  }
};

export default function* EntityOffersRewardsSaga() {
  yield takeEvery(actions.fetch.type, fetchSaga);
  yield takeEvery(actions.submit.type, submitSaga);
  yield takeEvery(actions.update.type, updateSaga);
}
