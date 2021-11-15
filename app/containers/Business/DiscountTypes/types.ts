export type UseDiscountTypesProps = {
  limit?: number;
  offset?: number;
};

export interface DiscountTypesProps extends UseDiscountTypesProps {
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

export interface DiscountTypesAPIResponse {
  data?: {
    id: number;
    name: string;
    description: string;
    logoUrl: string;
  }[];
}

export interface ResponsePayload extends DiscountTypesAPIResponse {}
