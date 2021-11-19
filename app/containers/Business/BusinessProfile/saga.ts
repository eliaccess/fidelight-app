/**
 *
 * Saga for BusinessProfile
 *
 */

import { takeEvery, call, put } from 'redux-saga/effects';

import { Warn } from 'platform/Logger';

import {
  AddBackgroundImageAPIResponse,
  AddBackgroundImageProps,
  AddLogoAPIResponse,
  AddLogoProps,
  BusinessProfileAPIResponse,
  FetchProps,
  UpdateProps,
} from './types';
import { actions } from './slice';
import * as api from './api';

export const fetchSaga = function* fetch(_action: FetchProps) {
  try {
    const data: BusinessProfileAPIResponse = yield call(api.fetch);
    yield put(actions.fetchSuccess(data));
  } catch (error) {
    Warn(error);
    yield put(actions.fetchFailure());
  }
};

export const updateSaga = function* update(action: UpdateProps) {
  try {
    const resp = yield call(api.update, action.payload);
    yield put(
      actions.updateSuccess({ message: resp.msg, data: action.payload.data }),
    );
  } catch (error: any) {
    Warn(error);

    yield put(
      actions.updateFailure({
        message: error?.message || error?.error?.msg || error?.error,
      }),
    );
  }
};

export const addLogoSaga = function* addLogo(action: AddLogoProps) {
  try {
    const resp: AddLogoAPIResponse = yield call(api.addLogo, action.payload);
    yield put(actions.addLogoSuccess({ ...resp }));
  } catch (error: any) {
    yield put(
      actions.addLogoFailure({
        message: error?.message || error?.error?.msg || error?.error,
      }),
    );
  }
};
export const addBackgroundImageSaga = function* addBackgroundImage(
  action: AddBackgroundImageProps,
) {
  try {
    const resp: AddBackgroundImageAPIResponse = yield call(
      api.addBackgroundImage,
      action.payload,
    );
    yield put(actions.addBackgroundImageSuccess({ ...resp }));
  } catch (error: any) {
    yield put(
      actions.addBackgroundImageFailure({
        message: error?.message || error?.error?.msg || error?.error,
      }),
    );
  }
};

export default function* BusinessProfileSaga() {
  yield takeEvery(actions.fetch.type, fetchSaga);
  yield takeEvery(actions.update.type, updateSaga);
  yield takeEvery(actions.addLogo.type, addLogoSaga);
  yield takeEvery(actions.addBackgroundImage.type, addBackgroundImageSaga);
}
