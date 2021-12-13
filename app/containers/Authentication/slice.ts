import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  LoginActionPayload,
  FetchUserResponsePayload,
  State,
  SignUpActionPayload,
  ErrorResponsePayload,
  SignUpResponsePayload,
  LoginResponsePayload,
  LinkSocialAccountActionPayload,
  LinkSocialAccountResponsePayload,
} from './types';
export const initialState = {
  fetchingLocalToken: false,
  fetchingRemoteToken: false,
  error: undefined,
  localChecked: false,
  isAuthenticated: false,
  submitting: false,
  accountType: '',
  message: '',
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
    loginSuccess(
      state: State,
      action: PayloadAction<LoginResponsePayload>,
    ): void {
      state.fetchingRemoteToken = false;
      state.isAuthenticated = true;
      state.message = action.payload.message;
    },
    loginFailure(
      state: State,
      action: PayloadAction<ErrorResponsePayload>,
    ): void {
      state.fetchingRemoteToken = false;
      state.isAuthenticated = false;
      state.message = action.payload.message;
      state.error = true;
    },
    linkSocialAccount(
      state: State,
      _action: PayloadAction<LinkSocialAccountActionPayload>,
    ): void {
      state.submitting = true;
      state.error = undefined;
    },
    linkSocialAccountSuccess(
      state: State,
      action: PayloadAction<LinkSocialAccountResponsePayload>,
    ): void {
      state.submitting = false;
      state.message = action.payload.message;
    },
    linkSocialAccountFailure(
      state: State,
      action: PayloadAction<ErrorResponsePayload>,
    ): void {
      state.submitting = false;
      state.message = action.payload.message;
      state.error = true;
    },

    signUp(state: State, _action: PayloadAction<SignUpActionPayload>): void {
      state.submitting = true;
    },
    signUpSuccess(
      state: State,
      action: PayloadAction<SignUpResponsePayload>,
    ): void {
      state.submitting = false;
      state.isAuthenticated = true;
      state.message = action.payload.message;
    },
    signUpFailure(
      state: State,
      action: PayloadAction<ErrorResponsePayload>,
    ): void {
      state.submitting = false;
      state.isAuthenticated = false;
      state.message = action.payload.message;
      state.error = true;
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
    logout(state: State): void {
      state.localChecked = true;
      state.isAuthenticated = false;
      state.user = initialState.user;
    },
    reset(state: State): void {
      state.error = undefined;
      state.message = '';
      state.user.updated = false;
    },
    getAccountType(state: State): void {
      state.error = undefined;
    },
    getAccountTypeSuccess(state: State, action: PayloadAction<string>): void {
      state.accountType = action.payload;
    },
  },
});

export const { actions, reducer, name } = slice;
