export type UseCompanyTypesProps = {
  limit?: number;
  offset?: number;
};

export interface CompanyTypesProps extends UseCompanyTypesProps {
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

export interface CompanyTypesAPIResponse {
  data?: {
    id: number;
    name: string;
    description: string;
    logoLink: string;
  }[];
}

export interface ResponsePayload extends CompanyTypesAPIResponse {}
