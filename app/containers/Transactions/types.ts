export type UseTransactionsProps = {
  limit?: number;
  offset?: number;
};

export interface TransactionsProps extends UseTransactionsProps {
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

export interface TransactionsAPIResponse {
  data?: {
    transaction: number;
    companyId: number;
    companyName: string;
    discount: number;
    value: number;
    date: string;
  }[];
}

export interface ResponsePayload extends TransactionsAPIResponse {}
