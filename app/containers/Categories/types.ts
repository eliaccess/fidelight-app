export type UseCategoriesProps = {
  limit?: number;
  offset?: number;
};

export interface CategoriesProps extends UseCategoriesProps {
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

export interface CategoriesAPIResponse {
  data?: {
    id: number;
    name: string;
    description: string;
    logoLink: string;
  }[];
}

export interface ResponsePayload extends CategoriesAPIResponse {}
