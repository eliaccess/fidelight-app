export type UseBusinessEarningPoliciesProps = {
  entityId: number;
};

export interface BusinessEarningPoliciesProps
  extends UseBusinessEarningPoliciesProps {
  children: (props: any) => any;
}

export interface State {
  fetching: boolean;
  error: boolean;
  message: string;
  submitting: boolean;
  data: ResponsePayload['data'];
}

export interface FetchProps {
  type: string;
  payload: FetchPayload;
}

export interface FetchPayload extends UseBusinessEarningPoliciesProps {}

export interface EarningPolicyTypeItem {
  type: number;
  value: number;
  title: string;
  description: string;
}

export interface BusinessEarningPoliciesAPIResponse {
  data?: EarningPolicyTypeItem;
  msg: string;
}

export interface ResponsePayload extends BusinessEarningPoliciesAPIResponse {}

export interface FailureResponse {
  message: string;
}

export interface SubmitPayload {
  data: {
    type: number;
    value: number;
  };
}

export interface SubmitProps {
  type: string;
  payload: SubmitPayload;
}

export interface SubmitAPIResponse {
  message: string;
}
