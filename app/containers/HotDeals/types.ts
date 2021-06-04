export interface UseHotDealsProps {
  city?: string;
  country?: string;
  limit?: number;
  offset?: number;
  collectionIds?: number[];
  onMyCollections?: boolean;
}

export interface HotDealsProps extends UseHotDealsProps {
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

export interface FetchPropsPayload extends UseHotDealsProps {
  key: string;
}

export interface HotDealsAPIResponse {
  data?: {
    id: number;
    image: string;
    title: string;
    shortDescription: string;
  }[];
}

export interface ResponsePayload extends HotDealsAPIResponse {
  key: string;
}
