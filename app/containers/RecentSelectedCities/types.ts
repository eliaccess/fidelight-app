export type UseRecentSelectedCitiesProps = {
  limit?: number;
  offset?: number;
};

export interface RecentSelectedCitiesProps
  extends UseRecentSelectedCitiesProps {
  children: (props: any) => any;
}

export interface State {
  fetching: boolean;
  error: boolean;
  submitting: boolean;
  message: string;
  data: ResponsePayload['data'];
}

export interface FetchProps {
  type: string;
}

export interface RecentSelectCityItem {
  name: string;
}

export interface RecentSelectedCitiesAPIResponse {
  data?: RecentSelectCityItem[];
}

export interface ResponsePayload extends RecentSelectedCitiesAPIResponse {}

export interface SubmitPayload {
  data: RecentSelectCityItem;
}

export interface SubmitProps {
  type: string;
  payload: SubmitPayload;
}

export interface SubmitAPIResponse extends RecentSelectedCitiesAPIResponse {}
