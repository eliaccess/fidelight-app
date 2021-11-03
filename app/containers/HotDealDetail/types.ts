import { DealItemTypes } from 'types/DealItemTypes';

export interface UseHotDealDetailProps {
  dealId: string;
}

export interface HotDealDetailProps extends UseHotDealDetailProps {
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

export interface FetchPropsPayload extends UseHotDealDetailProps {
  key: string;
}

export interface HotDealDetailAPIResponse {
  data?: DealItemTypes;
}

export interface ResponsePayload extends HotDealDetailAPIResponse {
  key: string;
}
