import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ResponsePayload, SetPayload, State } from './types';

export const initialState = {
  fetching: false,
  setting: false,
  error: false,
  data: {},
  checkedLocal: false,
} as State;

/* eslint-disable , no-param-reassign */
const slice = createSlice({
  name: 'app/UserLocation',
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
      state.checkedLocal = true;
    },
    fetchFailure(state: State): void {
      state.fetching = false;
      state.error = true;
      state.checkedLocal = true;
    },
    set(state: State, _action: PayloadAction<SetPayload>): void {
      state.setting = true;
      state.error = false;
      state.checkedLocal = true;
    },
    setSuccess(state: State, action: PayloadAction<SetPayload>): void {
      state.setting = false;
      state.error = false;
      state.data = action.payload.data;
    },
    setFailure(state: State): void {
      state.setting = false;
      state.error = true;
    },
  },
});

export const { actions, reducer, name } = slice;
