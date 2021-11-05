/**
 *
 * Saga for ChangePassword
 *
 */

import { takeEvery, call, put } from 'redux-saga/effects';

import { ChangePasswordAPIResponse, SubmitProps } from './types';
import { actions } from './slice';
import * as api from './api';

export const submitSaga = function* submit(action: SubmitProps) {
  try {
    const resp: ChangePasswordAPIResponse = yield call(
      api.submit,
      action.payload,
    );

    yield put(actions.submitSuccess({ message: resp.message }));
  } catch (error: any) {
    yield put(
      actions.submitFailure({
        message: error.error.msg,
      }),
    );
  }
};

export default function* changeSaga() {
  yield takeEvery(actions.submit.type, submitSaga);
}
