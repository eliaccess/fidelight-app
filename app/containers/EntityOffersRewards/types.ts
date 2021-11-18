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
