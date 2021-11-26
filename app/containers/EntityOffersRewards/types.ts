import { DealItemTypes } from 'types/DealItemTypes';

export interface UseEntityOffersRewardsProps {
  entityId: number;
}

export interface EntityOffersRewardsProps extends UseEntityOffersRewardsProps {
  children: (props: any) => any;
}

export interface StateItem {
  fetching: boolean;
  error: boolean;
  message?: string;
  submitting: boolean;
  updating: boolean;
  removing: boolean;
  data: ResponsePayload['data'];
}

export interface State {
  [key: string]: StateItem;
}

export interface FetchProps {
  type: string;
  payload: FetchPropsPayload;
}

export interface FetchPropsPayload extends UseEntityOffersRewardsProps {
  key: string;
}

export interface EntityOffersRewardsAPIResponse {
  data?: {
    rewards: DealItemTypes[];
    offers: DealItemTypes[];
  };
}

export interface ResponsePayload extends EntityOffersRewardsAPIResponse {
  key: string;
}

export interface FailureResponsePayload {
  key: string;
  message: string;
}

export interface SubmitPayload {
  data: {
    company: number;
    discountType: number;
    cost: number;
    name: string;
    description: string;
    startDate?: string;
    expirationDate?: string;
    perDay: {
      monday: number;
      tuesday: number;
      wednesday: number;
      thursday: number;
      friday: number;
      saturday: number;
      sunday: number;
    };
    value: number;
  };
}

export interface SubmitProps {
  type: string;
  payload: SubmitPropsPayload;
}
export interface SubmitPropsPayload extends SubmitPayload {
  key: string;
}

export interface SubmitResponsePayload extends SubmitAPIResponse {
  key: string;
}

export interface SubmitAPIResponse {
  message: string;
}

export interface SubmitFailureResponsePayload extends SubmitAPIResponse {
  key: string;
}

export interface ResetPropsPayload {
  key: string;
}

export interface UpdatePayload {
  data: {
    discountType: number;
    cost: number;
    name: string;
    description: string;
    pictureLink?: string;
    startDate?: string;
    expirationDate?: string;
    perDay: {
      monday: number;
      tuesday: number;
      wednesday: number;
      thursday: number;
      friday: number;
      saturday: number;
      sunday: number;
    };
    value: number;
  };
  discountId: number;
  entityId: number;
}

export interface UpdateProps {
  type: string;
  payload: UpdatePropsPayload;
}
export interface UpdatePropsPayload extends UpdatePayload {
  key: string;
}

export interface UpdateResponsePayload extends UpdateAPIResponse {
  key: string;
}

export interface UpdateAPIResponse {
  message: string;
}

export interface UpdateFailureResponsePayload extends UpdateAPIResponse {
  key: string;
}

export interface RemovePayload {
  discountId: number;
  entityId: number;
}

export interface RemoveProps {
  type: string;
  payload: RemovePropsPayload;
}
export interface RemovePropsPayload extends RemovePayload {
  key: string;
}

export interface RemoveResponsePayload extends RemoveAPIResponse {
  key: string;
}

export interface RemoveAPIResponse {
  message: string;
}

export interface RemoveFailureResponsePayload extends RemoveAPIResponse {
  key: string;
}

export interface AddLogoPayload {
  data: {
    fileName: string;
    fileSize: number;
    height: number;
    type: 'string';
    uri: 'string';
    width: number;
  };
  entityId: number;
  discountId: number;
}

export interface AddLogoProps {
  type: string;
  payload: AddLogoPropsPayload;
}
export interface AddLogoPropsPayload extends AddLogoPayload {
  key: string;
}

export interface AddLogoResponsePayload extends AddLogoAPIResponse {
  key: string;
}

export interface AddLogoAPIResponse {
  message: string;
}

export interface AddLogoFailureResponsePayload extends AddLogoAPIResponse {
  key: string;
}

export interface RemoveLogoPayload {
  discountId: number;
  entityId: number;
}

export interface RemoveLogoProps {
  type: string;
  payload: RemoveLogoPropsPayload;
}
export interface RemoveLogoPropsPayload extends RemoveLogoPayload {
  key: string;
}

export interface RemoveLogoResponsePayload extends RemoveLogoAPIResponse {
  key: string;
}

export interface RemoveLogoAPIResponse {
  message: string;
}

export interface RemoveLogoFailureResponsePayload
  extends RemoveLogoAPIResponse {
  key: string;
}
