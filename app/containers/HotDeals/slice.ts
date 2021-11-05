import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  FailureResponsePayload,
  FetchPropsPayload,
  ResponsePayload,
  State,
} from './types';

export const initialState = {} as State;

/* eslint-disable no-param-reassign */
const slice = createSlice({
  name: 'app/HotDeals',
  initialState,
  reducers: {
    fetch(state: State, action: PayloadAction<FetchPropsPayload>): void {
      state[action.payload.key] = {
        ...(state[action.payload.key] || {}),
        error: false,
        fetching: true,
      };
    },
    fetchSuccess(state: State, action: PayloadAction<ResponsePayload>): void {
      state[action.payload.key] = {
        ...(state[action.payload.key] || {}),
        fetching: false,
        data: action.payload.data,
      };
    },
    fetchFailure(
      state: State,
      action: PayloadAction<FailureResponsePayload>,
    ): void {
      state[action.payload.key] = {
        ...(state[action.payload.key] || {}),
        error: true,
        message: action.payload.message,
        fetching: false,
      };
    },
  },
});

export const { actions, reducer, name } = slice;
