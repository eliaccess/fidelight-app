import { EntityItemTypes } from 'types/EntityItemTypes';

export interface UseEntitiesProps {
  city?: string;
  page?: number;
  type?: number;
}

export interface EntitiesProps extends UseEntitiesProps {
  children: (props: any) => any;
}

export interface StateItem {
  fetching: boolean;
  error: boolean;
  message: string;
  data: ResponsePayload['data'];
}

export interface State {
  [key: string]: StateItem;
}

export interface FetchProps {
  type: string;
  payload: FetchPropsPayload;
}

export interface ToggleFavoriteProps {
  type: string;
  payload: ToggleFavoriteActionPayload;
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

export interface ToggleFavoriteActionPayload {
  key: string;
  id: number;
  isFavorite: boolean;
}

export interface FailureResponsePayload {
  key: string;
  message: string;
}
