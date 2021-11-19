import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  AddBackgroundImageAPIResponse,
  AddBackgroundImagePropsPayload,
  AddLogoAPIResponse,
  AddLogoPropsPayload,
  FailureAPIResponse,
  ResponsePayload,
  State,
  UpdatePropsPayload,
  UpdateResponsePayload,
} from './types';

export const initialState = {
  fetching: false,
  error: false,
  data: {},
  updating: false,
  success: false,
} as State;

/* eslint-disable , no-param-reassign */
const slice = createSlice({
  name: 'app/BusinessProfile',
  initialState,
  reducers: {
    fetch(state: State): void {
      state.fetching = true;
      state.error = false;
    },
    fetchSuccess(state: State, action: PayloadAction<ResponsePayload>): void {
      state.fetching = false;
      state.error = false;
      state.data = action.payload.data;
    },
    fetchFailure(state: State): void {
      state.fetching = false;
      state.error = true;
    },
    update(state: State, _action: PayloadAction<UpdatePropsPayload>): void {
      state.updating = true;
      state.error = false;
    },
    updateSuccess(
      state: State,
      action: PayloadAction<UpdateResponsePayload>,
    ): void {
      state.updating = false;
      state.error = false;
      state.success = true;
      state.message = action.payload.message;
      state.data = {
        ...state.data,
        ...action.payload.data,
      };
    },
    updateFailure(
      state: State,
      action: PayloadAction<FailureAPIResponse>,
    ): void {
      state.updating = false;
      state.error = true;
      state.message = action.payload.message;
    },
    addLogo(state: State, _action: PayloadAction<AddLogoPropsPayload>): void {
      state.submitting = true;
      state.error = false;
    },
    addLogoSuccess(
      state: State,
      action: PayloadAction<AddLogoAPIResponse>,
    ): void {
      state.submitting = false;
      state.message = action.payload.message;
      state.data = {
        ...state.data,
        logoUrl: action.payload?.data?.logoUrl || '',
      };
      state.success = true;
    },
    addLogoFailure(
      state: State,
      action: PayloadAction<FailureAPIResponse>,
    ): void {
      state.submitting = false;
      state.message = action.payload.message;
      state.error = true;
    },
    addBackgroundImage(
      state: State,
      _action: PayloadAction<AddBackgroundImagePropsPayload>,
    ): void {
      state.submitting = true;
      state.error = false;
    },
    addBackgroundImageSuccess(
      state: State,
      action: PayloadAction<AddBackgroundImageAPIResponse>,
    ): void {
      state.submitting = false;
      state.message = action.payload.message;
      state.data = {
        ...state.data,
        backgroundPicture: action.payload?.data?.backgroundPicture || '',
      };
      state.success = true;
    },
    addBackgroundImageFailure(
      state: State,
      action: PayloadAction<FailureAPIResponse>,
    ): void {
      state.submitting = false;
      state.message = action.payload.message;
      state.error = true;
    },
    reset(state: State): void {
      state.updating = false;
      state.error = false;
      state.success = false;
      state.submitting = false;
    },
  },
});

export const { actions, reducer, name } = slice;
