import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  FailureResponsePayload,
  FetchPropsPayload,
  ResetPropsPayload,
  ResponsePayload,
  State,
  SubmitFailureResponsePayload,
  SubmitPropsPayload,
  SubmitResponsePayload,
  UpdateFailureResponsePayload,
  UpdatePropsPayload,
  UpdateResponsePayload,
} from './types';

export const initialState = {} as State;

/* eslint-disable no-param-reassign */
const slice = createSlice({
  name: 'app/EntityOffersRewards',
  initialState,
  reducers: {
    reset(state: State, action: PayloadAction<ResetPropsPayload>): void {
      state[action.payload.key] = {
        ...(state[action.payload.key] || {}),
        error: false,
        fetching: false,
        submitting: false,
        message: undefined,
      };
    },
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
        fetching: false,
        message: action.payload.message,
      };
    },
    submit(state: State, action: PayloadAction<SubmitPropsPayload>): void {
      state[action.payload.key] = {
        ...(state[action.payload.key] || {}),
        submitting: true,
      };
    },
    submitSuccess(
      state: State,
      action: PayloadAction<SubmitResponsePayload>,
    ): void {
      state[action.payload.key] = {
        ...(state[action.payload.key] || {}),
        submitting: false,
        // data: action.payload.data,
        message: action.payload.message,
      };
    },
    submitFailure(
      state: State,
      action: PayloadAction<SubmitFailureResponsePayload>,
    ): void {
      state[action.payload.key] = {
        ...(state[action.payload.key] || {}),
        error: true,
        message: action.payload.message,
        submitting: false,
      };
    },
    update(state: State, action: PayloadAction<UpdatePropsPayload>): void {
      state[action.payload.key] = {
        ...(state[action.payload.key] || {}),
        updating: true,
      };
    },
    updateSuccess(
      state: State,
      action: PayloadAction<UpdateResponsePayload>,
    ): void {
      state[action.payload.key] = {
        ...(state[action.payload.key] || {}),
        updating: false,
        message: action.payload.message,
      };
    },
    updateFailure(
      state: State,
      action: PayloadAction<UpdateFailureResponsePayload>,
    ): void {
      state[action.payload.key] = {
        ...(state[action.payload.key] || {}),
        error: true,
        message: action.payload.message,
        updating: false,
      };
    },
  },
});

export const { actions, reducer, name } = slice;
