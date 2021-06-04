export type UseUserProfileProps = {
  limit?: number;
  offset?: number;
};

export interface UserProfileProps extends UseUserProfileProps {
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

export interface UserProfileAPIResponse {
  data: {
    name: string;
    phone: string;
    email: string;
    birthdate: string;
    avatar: string;
  };
}

export interface ResponsePayload extends UserProfileAPIResponse {}