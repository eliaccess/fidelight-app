import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FetchPropsPayload, ResponsePayload, State } from './types';

export const initialState = {
  fetching: false,
  error: false,
  data: [],
  query: '',
} as State;

/* eslint-disable no-param-reassign */
const slice = createSlice({
  name: 'app/EntitySearch',
  initialState,
  reducers: {
    fetch(state: State, action: PayloadAction<FetchPropsPayload>): void {
      state.fetching = true;
      state.error = false;
      state.query = action.payload.query;
    },
    fetchSuccess(state: State, action: PayloadAction<ResponsePayload>): void {
      state.fetching = false;
      state.error = false;
      state.data = action.payload.data;
    },
    fetchFailure(state: State): void {
      state.fetching = false;
      state.error = true;
      state.data = [];
    },
  },
});

export const { actions, reducer, name } = slice;
