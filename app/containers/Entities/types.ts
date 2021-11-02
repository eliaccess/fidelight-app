import { EntityItemTypes } from 'types/EntityItemTypes';

export interface UseEntitiesProps {
  city?: string;
  page?: number;
  type?: number[];
}

export interface EntitiesProps extends UseEntitiesProps {
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

export interface FetchPropsPayload extends UseEntitiesProps {
  key: string;
}

export interface EntitiesAPIResponse {
  data?: EntityItemTypes[];
}

export interface ResponsePayload extends EntitiesAPIResponse {
  key: string;
}
