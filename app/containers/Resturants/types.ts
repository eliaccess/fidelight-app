export interface UseResturantsProps {
  city?: string;
  country?: string;
  limit?: number;
  offset?: number;
  collectionIds?: number[];
  onMyCollections?: boolean;
}

export interface ResturantsProps extends UseResturantsProps {
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

export interface FetchPropsPayload extends UseResturantsProps {
  key: string;
}

export interface ResturantsAPIResponse {
  data?: {
    id: number;
    coverImage: string;
    logo: string;
    name: string;
    shortDescription: string;
  }[];
}

export interface ResponsePayload extends ResturantsAPIResponse {
  key: string;
}
