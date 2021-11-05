import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  FailureResponsePayload,
  FetchPropsPayload,
  ResponsePayload,
  State,
  ToggleFavoriteActionPayload,
} from './types';

export const initialState = {} as State;

/* eslint-disable no-param-reassign */
const slice = createSlice({
  name: 'app/Entities',
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
    toggleFavorite(
      state: State,
      action: PayloadAction<ToggleFavoriteActionPayload>,
    ): void {
      const objIndex: any = state[action.payload.key]?.data?.findIndex(
        (obj) => obj.id === action.payload.id,
      );
      const tempData: any = state[action.payload.key]?.data;
      tempData[objIndex].isFavorite = !action.payload.isFavorite;

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
      const objIndex: any = state[action.payload.key]?.data?.findIndex(
        (obj) => obj.id === action.payload.id,
      );
      const tempData: any = state[action.payload.key]?.data;
      tempData[objIndex].isFavorite = action.payload.isFavorite;

      state[action.payload.key] = {
        ...(state[action.payload.key] || {}),
        data: tempData,
      };
    },
  },
});

export const { actions, reducer, name } = slice;
