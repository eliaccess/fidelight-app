import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  FetchPropsPayload,
  ResponsePayload,
  State,
  ToggleFavoriteActionPayload,
} from './types';

export const initialState = {} as State;

/* eslint-disable no-param-reassign */
const slice = createSlice({
  name: 'app/EntityDetail',
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
    toggleFavorite(
      state: State,
      action: PayloadAction<ToggleFavoriteActionPayload>,
    ): void {
      const tempData: any = state[action.payload.key]?.data;
      tempData.isFavorite = !action.payload.isFavorite;

      state[action.payload.key] = {
        ...(state[action.payload.key] || {}),
        data: tempData,
      };
    },
    toggleFavoriteSuccess(
      state: State,
      action: PayloadAction<ResponsePayload>,
    ): void {
      state[action.payload.key] = {
        ...(state[action.payload.key] || {}),
        error: false,
      };
    },
    toggleFavoriteFailure(state: State, action: PayloadAction<any>): void {
      const tempData: any = state[action.payload.key]?.data;
      tempData.isFavorite = action.payload.isFavorite;

      state[action.payload.key] = {
        ...(state[action.payload.key] || {}),
        data: tempData,
      };
    },
  },
});

export const { actions, reducer, name } = slice;
