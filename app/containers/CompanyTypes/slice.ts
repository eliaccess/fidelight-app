import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ResponsePayload, State } from './types';

export const initialState = {
  fetching: false,
  error: false,
  data: [],
} as State;

/* eslint-disable , no-param-reassign */
const slice = createSlice({
  name: 'app/CompanyTypes',
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
  },
});

export const { actions, reducer, name } = slice;
