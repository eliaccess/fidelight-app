import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  ResponsePayload,
  State,
  SubmitAPIResponse,
  SubmitPayload,
} from './types';

export const initialState = {
  fetching: false,
  error: false,
  data: [],
  submitting: false,
  message: '',
} as State;

/* eslint-disable , no-param-reassign */
const slice = createSlice({
  name: 'app/RecentSelectedCities',
  initialState,
  reducers: {
    fetch(state: State): void {
      state.fetching = true;
      state.error = false;
    },
    fetchSuccess(state: State, action: PayloadAction<ResponsePayload>): void {
      state.fetching = false;
      state.error = false;
      state.data = action.payload.data;
    },
    fetchFailure(state: State): void {
      state.fetching = false;
      state.error = true;
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
      state.data = action.payload.data;
    },
    submitFailure(state: State): void {
      state.submitting = false;
      state.error = true;
    },
  },
});

export const { actions, reducer, name } = slice;
