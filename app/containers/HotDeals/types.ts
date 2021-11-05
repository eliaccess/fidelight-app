export interface UseHotDealsProps {
  city?: string;
}

export interface HotDealsProps extends UseHotDealsProps {
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

export interface FetchPropsPayload extends UseHotDealsProps {
  key: string;
}

export interface HotDealsAPIResponse {
  data?: {
    id: number;
    timesUsed: number;
    name: string;
    description: string;
    cost: number;
    pictureLink: string;
  }[];
}

export interface ResponsePayload extends HotDealsAPIResponse {
  key: string;
}

export interface FailureResponsePayload {
  key: string;
  message: string;
}
