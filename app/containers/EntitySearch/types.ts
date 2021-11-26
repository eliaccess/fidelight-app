import { CitiesItemTypes } from 'types/CitiesItemTypes';

export interface UseEntitySearchReturn extends State {
  getData: ({ query: string }) => void;
}

export interface EntitySearchProps {
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

export interface EntitySearchAPIResponse {
  data: Array<CitiesItemTypes>;
}

export interface ResponsePayload extends EntitySearchAPIResponse {
  key?: string;
}
