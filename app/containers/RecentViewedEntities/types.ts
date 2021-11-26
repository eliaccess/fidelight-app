import { EntityDetailItemTypes } from 'types/EntityItemTypes';

export type UseRecentViewedEntitiesProps = {
  limit?: number;
  offset?: number;
};

export interface RecentViewedEntitiesProps
  extends UseRecentViewedEntitiesProps {
  children: (props: any) => any;
}

export interface State {
  fetching: boolean;
  error: boolean;
  submitting: boolean;
  message: string;
  data: ResponsePayload['data'];
}

export interface FetchProps {
  type: string;
}

export interface RecentViewedEntitiesAPIResponse {
  data?: EntityDetailItemTypes[];
}

export interface ResponsePayload extends RecentViewedEntitiesAPIResponse {}

export interface SubmitPayload {
  data: EntityDetailItemTypes;
}

export interface SubmitProps {
  type: string;
  payload: SubmitPayload;
}

export interface SubmitAPIResponse extends RecentViewedEntitiesAPIResponse {}
