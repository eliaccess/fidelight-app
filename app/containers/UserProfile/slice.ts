import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ResponsePayload, State, UpdatePropsPayload } from './types';

export const initialState = {
  fetching: false,
  error: false,
  data: {},
  updating: false,
  success: false,
} as State;

/* eslint-disable , no-param-reassign */
const slice = createSlice({
  name: 'app/UserProfile',
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
    update(state: State, _action: PayloadAction<UpdatePropsPayload>): void {
      state.updating = true;
      state.error = false;
    },
    updateSuccess(state: State, action: PayloadAction<ResponsePayload>): void {
      state.updating = false;
      state.error = false;
      state.success = true;
      state.data = action.payload.data;
    },
    updateFailure(state: State): void {
      state.updating = false;
      state.error = true;
    },
    reset(state: State): void {
      state.updating = false;
      state.error = false;
      state.success = false;
    },
  },
});

export const { actions, reducer, name } = slice;
