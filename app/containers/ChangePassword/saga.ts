/**
 *
 * Saga for ChangePassword
 *
 */

import { takeEvery, call, put } from 'redux-saga/effects';

import { SubmitProps } from './types';
import { actions } from './slice';
import * as api from './api';

export const submitSaga = function* submit(action: SubmitProps) {
  try {
    yield call(api.submit, action.payload);
    yield put(actions.submitSuccess(action.payload));
  } catch (error: any) {
    yield put(
      actions.submitFailure({
        error: error.message || error.msg || 'Something went wrong',
      }),
    );
  }
};

export default function* changeSaga() {
  yield takeEvery(actions.submit.type, submitSaga);
}
