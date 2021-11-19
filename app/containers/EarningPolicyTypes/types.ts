export type UseEarningPolicyTypesProps = {
  limit?: number;
  offset?: number;
};

export interface EarningPolicyTypesProps extends UseEarningPolicyTypesProps {
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

export interface EarningPolicyTypeItem {
  id: number;
  title: string;
  description: string;
}

export interface EarningPolicyTypesAPIResponse {
  data?: EarningPolicyTypeItem[];
  msg: string;
}

export interface ResponsePayload extends EarningPolicyTypesAPIResponse {}

export interface FailureResponse {
  message: string;
}
