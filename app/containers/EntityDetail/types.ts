import { EntityDetailItemTypes } from 'types/EntityItemTypes';

export interface UseEntityDetailProps {
  entityId: number;
}

export interface EntityDetailProps extends UseEntityDetailProps {
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

export interface FetchPropsPayload extends UseEntityDetailProps {
  key: string;
}

export interface EntityDetailAPIResponse {
  data?: EntityDetailItemTypes;
}

export interface ResponsePayload extends EntityDetailAPIResponse {
  key: string;
}
