import { CitiesItemTypes } from 'types/CitiesItemTypes';

export interface UseCitiesSearchReturn extends State {
  getData: ({ query: string }) => void;
}

export interface CitiesSearchProps {
  children: (props: any) => any;
}

export interface State {
  fetching: boolean;
  error: boolean;
  data: ResponsePayload['data'];

  query: string;
}

export interface FetchProps {
  type: string;
  payload: FetchPropsPayload;
}

export interface FetchPropsPayload {
  query: string;
}

export interface CitiesSearchAPIResponse {
  data: Array<CitiesItemTypes>;
}

export interface ResponsePayload extends CitiesSearchAPIResponse {
  key?: string;
}
