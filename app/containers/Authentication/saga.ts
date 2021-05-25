/**
 *
 * Saga for Authentication
 *
 */

import { call, put, takeLatest } from 'redux-saga/effects';

import { Warn } from 'platform/Logger';
// import * as eventsListeners from 'platform/eventsListeners';

import {
  LoginActionProps,
  FetchUserAPIResponse,
  UpdateUserInfoActionProp,
  SignUpActionProps,
} from './types';
import { actions } from './slice';
import * as api from './api';

function onSignIn(user) {
  // eventsListeners.onSignIn({
  //   ...user,
  //   ...user.stats,
  // });
}

export const fetchLocalSaga = function* fetchLocal() {
  try {
    const data: boolean = yield call(api.fetchLocalToken);
    if (data) {
      yield put(actions.fetchLocalSuccess());
      yield put(actions.fetchUser());
    } else {
      yield put(actions.fetchLocalFailure());
      // eventsListeners.onSignOut();
    }
  } catch (error) {
    yield put(actions.fetchLocalFailure());
    // eventsListeners.onSignOut();
  }
};

export const loginSaga = function* login(action: LoginActionProps) {
  try {
    const data: boolean = yield call(api.login, action.payload);
    if (data) {
      yield put(actions.loginSuccess());
      yield put(actions.fetchUser());
    }
  } catch (error) {
    yield put(
      actions.loginFailure({
        message: error?.error?.msg || 'Something went wrong',
      }),
    );
  }
};

export const signUpSaga = function* signUp(action: SignUpActionProps) {
  try {
    const data: boolean = yield call(api.signUp, action.payload);
    if (data) {
      yield put(actions.signUpSuccess());
      yield put(actions.fetchUser());
    }
  } catch (error) {
    Warn(error);
    yield put(
      actions.signUpFailure({
        message: error?.error?.msg || error.message,
      }),
    );
  }
};

export const fetchUserSaga = function* fetchUser() {
  try {
    const localData: FetchUserAPIResponse = yield call(
      api.fetchLocalUserDetails,
    );
    if (localData) {
      yield put(
        actions.fetchLocalUserSuccess({
          data: localData.data,
        }),
      );
    }
    const data: FetchUserAPIResponse = yield call(api.fetchUserDetails);
    yield call(api.setLocalUserDetails, data);
    onSignIn(data.data);
    yield put(
      actions.fetchUserSuccess({
        data: data.data,
      }),
    );
  } catch (error) {
    yield put(
      actions.fetchUserFailure({
        error: {
          message: error?.error?.msg || 'Something went wrong',
        },
      }),
    );
    if (error.status === 401) {
      yield put(actions.logout());
    }
  }
};

export const updateUserInfoSaga = function* updateUserInfo(
  action: UpdateUserInfoActionProp,
) {
  try {
    const localData = yield call(api.fetchLocalUserDetails);
    if (localData) {
      if (!action.payload.avoidApiRequest) {
        yield call(api.updateUserInfo, action.payload);
      }
      yield call(api.setLocalUserDetails, {
        data: {
          ...localData,
          ...action.payload.data,
        },
      });
      yield put(
        actions.updateUserInfoSuccess({
          data: { ...localData, ...action.payload.data },
        }),
      );
    }
  } catch (error) {
    yield put(
      actions.updateUserInfoFailure({
        error: {
          message: error?.error?.msg || 'Something went wrong',
        },
      }),
    );
  }
};

export const logoutSaga = function* logout() {
  try {
    yield call(api.logout);
    // eventsListeners.onSignOut();
  } catch (error) {
    Warn(error.message);
  }
};

export default function* authenticationSaga() {
  yield takeLatest(actions.fetchLocalToken.type, fetchLocalSaga);
  yield takeLatest(actions.login.type, loginSaga);
  yield takeLatest(actions.signUp.type, signUpSaga);
  yield takeLatest(actions.fetchUser.type, fetchUserSaga);
  yield takeLatest(actions.logout.type, logoutSaga);
  yield takeLatest(actions.updateUserInfo.type, updateUserInfoSaga);
}
