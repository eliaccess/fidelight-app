import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FailureResponsePayload, FetchSuccessPayload, State } from './types';

export const initialState = {} as State;

/* eslint-disable , no-param-reassign */
const slice = createSlice({
  name: 'app/Transactions',
  initialState,
  reducers: {
    fetch(state: State): void {
      state.fetching = true;
      state.error = false;
    },
    fetchSuccess(
      state: State,
      action: PayloadAction<FetchSuccessPayload>,
    ): void {
      state.fetching = false;
      state.error = false;
      // @ts-ignore
      state.data = action.payload.data;
    },
    fetchFailure(
      state: State,
      action: PayloadAction<FailureResponsePayload>,
    ): void {
      state.fetching = false;
      state.error = true;
      state.message = action.payload.message;
    },
  },
});

export const { actions, reducer, name } = slice;
