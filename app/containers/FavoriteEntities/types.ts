import { EntityItemTypes } from 'types/EntityItemTypes';

export interface FavoriteEntitiesProps {
  children: (props: any) => any;
}

export interface State {
  fetching: boolean;
  error: boolean;
  data: ResponsePayload['data'];
}

export interface FetchProps {
  type: string;
}

export interface FavoriteEntitiesAPIResponse {
  data?: EntityItemTypes[];
}

export interface ResponsePayload extends FavoriteEntitiesAPIResponse {}
