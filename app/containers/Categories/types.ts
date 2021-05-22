export interface UseCategoriesProps {
  city?: string;
  country?: string;
  limit?: number;
  offset?: number;
  collectionIds?: number[];
  onMyCollections?: boolean;
}

export interface CategoriesProps extends UseCategoriesProps {
  children: (props: any) => any;
}

export interface StateItem {
  fetching: boolean;
  error: boolean;
  data: ResponsePayload['data'];
  count: ResponsePayload['count'];
}

export interface State {
  [key: string]: StateItem;
}

export interface FetchProps {
  type: string;
  payload: FetchPropsPayload;
}

export interface FetchPropsPayload extends UseCategoriesProps {
  key: string;
}

export interface CategoriesAPIResponse {
  count?: number | string;
  data?: {
    id: number;
    name: string;
    imageUrl: string;
  }[];
}

export interface ResponsePayload extends CategoriesAPIResponse {
  key: string;
}
