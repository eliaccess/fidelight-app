/**
 *
 * Saga for Authentication
 *
 */

import { call, put, takeLatest } from 'redux-saga/effects';

import { Warn } from 'platform/Logger';
import * as eventsListeners from 'platform/eventsListeners';

import {
  LoginActionProps,
  FetchUserAPIResponse,
  UpdateUserInfoActionProp,
  SignUpActionProps,
  SignUpResponsePayload,
  LoginResponsePayload,
} from './types';
import { actions } from './slice';
import * as api from './api';

function onSignIn(user) {
  eventsListeners.onSignIn({
    ...user,
  });
}

export const fetchLocalSaga = function* fetchLocal() {
  try {
    const data: boolean = yield call(api.fetchLocalToken);
    if (data) {
      yield put(actions.fetchLocalSuccess());
      yield put(actions.fetchUser());
    } else {
      yield put(actions.fetchLocalFailure());
      eventsListeners.onSignOut();
    }
  } catch (error) {
    yield put(actions.fetchLocalFailure());
    eventsListeners.onSignOut();
  }
};

export const getAccountTypeSaga = function* getAccountType() {
  const data = yield call(api.getAccountType);
  yield put(actions.getAccountTypeSuccess(data));
};

export const loginSaga = function* login(action: LoginActionProps) {
  try {
    const resp: LoginResponsePayload = yield call(api.login, action.payload);
    if (resp) {
      yield put(actions.loginSuccess({ ...resp }));
      yield put(actions.fetchUser());
      yield put(actions.getAccountType());
    }
  } catch (error: any) {
    yield put(
      actions.loginFailure({
        message: error.message || error?.error?.msg,
      }),
    );
  }
};

export const signUpSaga = function* signUp(action: SignUpActionProps) {
  try {
    const resp: SignUpResponsePayload = yield call(api.signUp, action.payload);
    if (resp) {
      yield put(actions.signUpSuccess({ ...resp }));
      yield put(actions.fetchUser());
    }
  } catch (error: any) {
    Warn(error);
    yield put(
      actions.signUpFailure({
        message: error.message || error?.error?.msg,
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
  } catch (error: any) {
    console.log('error', error);
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
  } catch (error: any) {
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
    eventsListeners.onSignOut();
  } catch (error: any) {
    Warn(error.message);
  }
};

export default function* authenticationSaga() {
  yield takeLatest(actions.fetchLocalToken.type, fetchLocalSaga);
  yield takeLatest(actions.getAccountType.type, getAccountTypeSaga);
  yield takeLatest(actions.login.type, loginSaga);
  yield takeLatest(actions.signUp.type, signUpSaga);
  yield takeLatest(actions.fetchUser.type, fetchUserSaga);
  yield takeLatest(actions.logout.type, logoutSaga);
  yield takeLatest(actions.updateUserInfo.type, updateUserInfoSaga);
}
