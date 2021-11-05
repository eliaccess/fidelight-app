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
  message: string;
  data: ResponsePayload['data'];
}

export interface FetchProps {
  type: string;
}

interface ITransactionItem {
  id: number;
  companyId: number;
  companyName: string;
  companyLogoLink: string;
  discountId: number;
  discountName: string;
  value: number;
  date: string;
}

export interface TransactionsAPIResponse {
  data?: ITransactionItem[];
}

export interface ResponsePayload extends TransactionsAPIResponse {}
export interface FetchSuccessPayload {
  data: ITransactionItem[];
}

export interface FailureResponsePayload {
  message: string;
}
