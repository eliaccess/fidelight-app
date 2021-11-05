import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  State,
  FailureResponsePayload,
  SubmitPropsPayload,
  ChangePasswordAPIResponse,
} from './types';

export const initialState = {
  error: false,
  submitting: false,
  success: false,
} as State;

/* eslint-disable no-param-reassign */
const slice = createSlice({
  name: 'app/ChangePassword',
  initialState,
  reducers: {
    reset: (): State => initialState,
    submit(state: State, _action: PayloadAction<SubmitPropsPayload>): void {
      state.submitting = true;
      state.error = false;
    },
    submitSuccess(
      state: State,
      action: PayloadAction<ChangePasswordAPIResponse>,
    ): void {
      state.submitting = false;
      state.success = true;
      state.message = action.payload.message;
    },
    submitFailure(
      state: State,
      action: PayloadAction<FailureResponsePayload>,
    ): void {
      state.submitting = false;
      state.message = action.payload.message;
      state.error = true;
      state.success = false;
    },
  },
});

export const { actions, reducer, name } = slice;
