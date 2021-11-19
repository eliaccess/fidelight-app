import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  FailureResponse,
  FetchPayload,
  ResponsePayload,
  State,
  SubmitAPIResponse,
  SubmitPayload,
} from './types';

export const initialState = {
  fetching: false,
  error: false,
  data: {},
  message: '',
} as State;

/* eslint-disable , no-param-reassign */
const slice = createSlice({
  name: 'app/BusinessEarningPolicies',
  initialState,
  reducers: {
    fetch(state: State, action: PayloadAction<FetchPayload>): void {
      state.fetching = true;
      state.error = false;
    },
    fetchSuccess(state: State, action: PayloadAction<ResponsePayload>): void {
      state.fetching = false;
      state.error = false;
      state.data = action.payload.data;
    },
    fetchFailure(state: State, action: PayloadAction<FailureResponse>): void {
      state.fetching = false;
      state.error = true;
      state.message = action.payload.message;
    },
    submit(state: State, _action: PayloadAction<SubmitPayload>): void {
      state.submitting = true;
      state.error = false;
    },
    submitSuccess(
      state: State,
      action: PayloadAction<SubmitAPIResponse>,
    ): void {
      state.submitting = false;
      state.error = false;
      state.message = action.payload.message;
    },
    submitFailure(
      state: State,
      action: PayloadAction<SubmitAPIResponse>,
    ): void {
      state.submitting = false;
      state.error = true;
      state.message = action.payload.message;
    },
    reset(state: State): void {
      state.submitting = false;
      state.error = false;
      state.fetching = false;
      state.message = '';
    },
  },
});

export const { actions, reducer, name } = slice;
