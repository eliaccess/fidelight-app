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
