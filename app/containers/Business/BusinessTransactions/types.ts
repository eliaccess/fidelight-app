export type UseBusinessTransactionsProps = {
  limit?: number;
  offset?: number;
};

export interface BusinessTransactionsProps
  extends UseBusinessTransactionsProps {
  children: (props: any) => any;
}

export interface State {
  fetching: boolean;
  error: boolean;
  message: string;
  submitting: boolean;
  success: boolean;
  data: ResponsePayload['data'];
}

export interface FetchProps {
  type: string;
}

interface ITransactionItem {
  id: number;
  userSurname: string;
  discountId: number;
  value: number;
  date: string;
}

export interface BusinessTransactionsAPIResponse {
  data?: ITransactionItem[];
}

export interface ResponsePayload extends BusinessTransactionsAPIResponse {}
export interface FetchSuccessPayload {
  data: ITransactionItem[];
}

export interface FailureResponsePayload {
  message: string;
}

export interface GivePointsAsGiftPayload {
  data: {
    user: string;
    points: number;
  };
}

export interface GivePointsAsGiftProps {
  type: string;
  payload: GivePointsAsGiftPayload;
}

export interface GivePointsAsGiftAPIResponse {
  message: string;
}

export interface GivePointsAsPolicyPayload {
  data: {
    user: string;
    value: string;
  };
}

export interface GivePointsAsPolicyProps {
  type: string;
  payload: GivePointsAsPolicyPayload;
}

export interface GivePointsAsPolicyAPIResponse {
  message: string;
}

export interface GiveRewardPayload {
  data: {
    user: string;
    discount: string;
  };
}

export interface GiveRewardProps {
  type: string;
  payload: GiveRewardPayload;
}

export interface GiveRewardAPIResponse {
  message: string;
}
