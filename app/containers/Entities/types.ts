export interface UseEntitiesProps {
  city?: string;
  page?: number;
  type?: number[];
}

export interface EntitiesProps extends UseEntitiesProps {
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

export interface FetchPropsPayload extends UseEntitiesProps {
  key: string;
}

export interface EntitiesAPIResponse {
  data?: {
    companyId: number;
    companyTypeId: number;
    companyName: string;
    coverImage: string;
    logoLink: string;
    description: string;
    streetNumber: string;
    streetName: string;
    city: string;
  }[];
}

export interface ResponsePayload extends EntitiesAPIResponse {
  key: string;
}
