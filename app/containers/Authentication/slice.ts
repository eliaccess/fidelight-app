import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  LoginActionPayload,
  FetchUserResponsePayload,
  State,
  UpdateUserInfoActionPayload,
  UpdateUserInfoResponsePayload,
  SignUpActionPayload,
  ErrorResponsePayload,
} from './types';
export const initialState = {
  fetchingLocalToken: false,
  fetchingRemoteToken: false,
  error: undefined,
  localChecked: false,
  isAuthenticated: false,
  submitting: false,
  user: {
    fetching: false,
    data: undefined,
    error: undefined,
    updating: false,
    updated: false,
  },
} as State;

/* eslint-disable no-param-reassign */
const slice = createSlice({
  name: 'app/Authentication',
  initialState,
  reducers: {
    fetchLocalToken(state: State): void {
      state.fetchingLocalToken = true;
    },
    fetchLocalSuccess(state: State): void {
      state.fetchingLocalToken = false;
      state.localChecked = true;
      state.isAuthenticated = true;
    },
    fetchLocalFailure(state: State): void {
      state.fetchingLocalToken = false;
      state.localChecked = true;
      state.isAuthenticated = false;
    },

    login(state: State, _action: PayloadAction<LoginActionPayload>): void {
      state.fetchingRemoteToken = true;
      state.error = undefined;
    },
    loginSuccess(state: State): void {
      state.fetchingRemoteToken = false;
      state.isAuthenticated = true;
    },
    loginFailure(
      state: State,
      action: PayloadAction<ErrorResponsePayload>,
    ): void {
      state.fetchingRemoteToken = false;
      state.isAuthenticated = false;
      state.error = action.payload.message;
    },

    signUp(state: State, _action: PayloadAction<SignUpActionPayload>): void {
      state.submitting = true;
    },
    signUpSuccess(state: State): void {
      state.submitting = false;
      state.isAuthenticated = true;
    },
    signUpFailure(
      state: State,
      action: PayloadAction<ErrorResponsePayload>,
    ): void {
      state.submitting = false;
      state.isAuthenticated = false;
      state.error = action.payload.message;
    },

    fetchUser(state: State): void {
      state.user.fetching = true;
      state.user.error = undefined;
    },
    fetchLocalUserSuccess(
      state: State,
      action: PayloadAction<FetchUserResponsePayload>,
    ): void {
      state.user.fetching = false;
      state.user.data = action.payload.data;
    },
    fetchUserSuccess(
      state: State,
      action: PayloadAction<FetchUserResponsePayload>,
    ): void {
      state.user.fetching = false;
      state.user.data = action.payload.data;
    },
    fetchUserFailure(
      state: State,
      action: PayloadAction<FetchUserResponsePayload>,
    ): void {
      state.user.fetching = false;
      state.user.error = action.payload.error?.message;
    },

    updateUserInfo(
      state: State,
      _action: PayloadAction<UpdateUserInfoActionPayload>,
    ): void {
      state.user.updating = true;
    },
    updateUserInfoSuccess(
      state: State,
      action: PayloadAction<UpdateUserInfoResponsePayload>,
    ): void {
      state.user.updating = false;
      if (action.payload.data) {
        state.user.data = {
          ...(state.user?.data || {}),
          ...action.payload.data,
        };
        state.user.updated = true;
      }
    },
    updateUserInfoFailure(
      state: State,
      action: PayloadAction<UpdateUserInfoResponsePayload>,
    ): void {
      state.user.updating = false;
      state.user.error = action.payload.error?.message;
    },

    logout(state: State): void {
      state.localChecked = true;
      state.isAuthenticated = false;
      state.user = initialState.user;
    },
    reset(state: State): void {
      state.error = undefined;
      state.user.updated = false;
    },
  },
});

export const { actions, reducer, name } = slice;
