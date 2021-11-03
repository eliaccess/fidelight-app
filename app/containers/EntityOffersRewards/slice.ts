import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FetchPropsPayload, ResponsePayload, State } from './types';

export const initialState = {} as State;

/* eslint-disable no-param-reassign */
const slice = createSlice({
  name: 'app/EntityOffersRewards',
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
    fetchFailure(state: State, action: PayloadAction<ResponsePayload>): void {
      state[action.payload.key] = {
        ...(state[action.payload.key] || {}),
        error: true,
        fetching: false,
      };
    },
  },
});

export const { actions, reducer, name } = slice;
