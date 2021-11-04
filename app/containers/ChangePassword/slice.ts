import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { State, ResponsePayload, SubmitPropsPayload } from './types';

export const initialState = {
  error: undefined,
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
      state.error = undefined;
    },
    submitSuccess(
      state: State,
      _action: PayloadAction<SubmitPropsPayload>,
    ): void {
      state.submitting = false;
      state.success = true;
    },
    submitFailure(state: State, action: PayloadAction<ResponsePayload>): void {
      state.submitting = false;
      state.error = action.payload.error;
    },
  },
});

export const { actions, reducer, name } = slice;
