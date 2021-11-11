export type UseBusinessAuthenticationProps = {};
export interface UseBusinessAuthenticationReturn extends State {
  login: (payload: LoginActionPayload) => void;
  signUp: (payload: SignUpActionPayload) => void;
  logout: () => void;
  reset: () => void;
}

export interface BusinessAuthenticationProps
  extends UseBusinessAuthenticationProps {
  children: (props: any) => any;
}

export interface State {
  fetchingLocalToken: boolean;
  fetchingRemoteToken: boolean;
  error?: boolean | string;
  localChecked: boolean;
  isAuthenticated: boolean;
  submitting: boolean;
  accountType: string;
  message: string;
  user: {
    fetching: boolean;
    data?: IBusinessUser;
    error?: string;
    updating?: boolean;
    updated?: boolean;
  };
}

export interface LoginActionProps {
  type: string;
  payload: LoginActionPayload;
}

export interface SignUpActionProps {
  type: string;
  payload: SignUpActionPayload;
}

export interface LoginActionPayload {
  provider: 'facebook' | 'google' | 'local' | 'apple';
  medium?: 'platform-web' | 'platform-android' | 'platform-ios';
  providerUuid?: string;
  data: {
    email: string;
    password?: string;
  };
}

export interface SignUpActionPayload {
  provider: 'facebook' | 'google' | 'local';
  data: {
    name: string;
    password: string;
    email: string;
    description: string;
    phone: string;
    companyType: string;
    country: string;
    city: string;
    streetName: string;
    streetNumber: string;
  };
}

export interface FailureResponsePayload {
  msg: string;
  data?: object;
}

export interface FetchUserAPIResponse {
  data?: IBusinessUser;
}

export interface FetchTokenResponse {
  hasToken: boolean;
}

export interface FetchUserResponsePayload extends FetchUserAPIResponse {
  error?: {
    message: string;
  };
}

export interface ErrorResponsePayload {
  message: string;
}

export interface SignUpResponsePayload {
  message: string;
}

export interface LoginResponsePayload {
  message: string;
}
