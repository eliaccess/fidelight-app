import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  FailureResponsePayload,
  FetchSuccessPayload,
  GivePointsAsGiftAPIResponse,
  GivePointsAsGiftPayload,
  GivePointsAsPolicyAPIResponse,
  GivePointsAsPolicyPayload,
  GiveRewardAPIResponse,
  GiveRewardPayload,
  State,
} from './types';

export const initialState = {} as State;

/* eslint-disable , no-param-reassign */
const slice = createSlice({
  name: 'app/BusinessTransactions',
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
    givePointsAsGift(
      state: State,
      _action: PayloadAction<GivePointsAsGiftPayload>,
    ): void {
      state.submitting = true;
      state.error = false;
    },
    givePointsAsGiftSuccess(
      state: State,
      action: PayloadAction<GivePointsAsGiftAPIResponse>,
    ): void {
      state.submitting = false;
      state.error = false;
      state.message = action.payload.message;
      state.success = true;
    },
    givePointsAsGiftFailure(
      state: State,
      action: PayloadAction<GivePointsAsGiftAPIResponse>,
    ): void {
      state.submitting = false;
      state.error = true;
      state.message = action.payload.message;
    },
    givePointsAsPolicy(
      state: State,
      _action: PayloadAction<GivePointsAsPolicyPayload>,
    ): void {
      state.submitting = true;
      state.error = false;
    },
    givePointsAsPolicySuccess(
      state: State,
      action: PayloadAction<GivePointsAsPolicyAPIResponse>,
    ): void {
      state.submitting = false;
      state.error = false;
      state.message = action.payload.message;
      state.success = true;
    },
    givePointsAsPolicyFailure(
      state: State,
      action: PayloadAction<GivePointsAsPolicyAPIResponse>,
    ): void {
      state.submitting = false;
      state.error = true;
      state.message = action.payload.message;
    },
    giveReward(state: State, _action: PayloadAction<GiveRewardPayload>): void {
      state.submitting = true;
      state.error = false;
    },
    giveRewardSuccess(
      state: State,
      action: PayloadAction<GiveRewardAPIResponse>,
    ): void {
      state.submitting = false;
      state.error = false;
      state.message = action.payload.message;
      state.success = true;
    },
    giveRewardFailure(
      state: State,
      action: PayloadAction<GiveRewardAPIResponse>,
    ): void {
      state.submitting = false;
      state.error = true;
      state.message = action.payload.message;
    },
    reset(state: State): void {
      state.submitting = false;
      state.error = false;
      state.success = false;
      state.fetching = false;
    },
  },
});

export const { actions, reducer, name } = slice;
