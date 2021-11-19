import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FailureResponse, ResponsePayload, State } from './types';

export const initialState = {
  fetching: false,
  error: false,
  data: [],
  message: '',
} as State;

/* eslint-disable , no-param-reassign */
const slice = createSlice({
  name: 'app/EarningPolicyTypes',
  initialState,
  reducers: {
    fetch(state: State): void {
      state.fetching = true;
      state.error = false;
    },
    fetchSuccess(state: State, action: PayloadAction<ResponsePayload>): void {
      state.fetching = false;
      state.error = false;
      state.message = action.payload.msg;
      state.data = action.payload.data;
    },
    fetchFailure(state: State, action: PayloadAction<FailureResponse>): void {
      state.fetching = false;
      state.error = true;
      state.message = action.payload.message;
    },
  },
});

export const { actions, reducer, name } = slice;
