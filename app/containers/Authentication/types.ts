export type UseAuthenticationProps = {};
export interface UseAuthenticationReturn extends State {
  login: (payload: LoginActionPayload) => void;
  signUp: (payload: SignUpActionPayload) => void;
  updateUserInfo: (payload: UpdateUserInfoActionPayload) => void;
  logout: () => void;
  reset: () => void;
}

export interface AuthenticationProps extends UseAuthenticationProps {
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
    data?: IUser;
    error?: string;
    updating?: boolean;
    updated?: boolean;
  };
}

export interface UpdateUserInfoActionProp {
  type: string;
  payload: UpdateUserInfoActionPayload;
}
export interface UpdateUserInfoActionPayload {
  data: {
    email?: IUser['email'];
    name?: IUser['name'];
    contactNo?: IUser['contactNumber'];
  };
  avoidApiRequest?: boolean;
}
export interface UpdateUserInfoAPIResponse {
  data?: IUser;
  error?: {
    message: string;
  };
}

export interface UpdateUserInfoResponsePayload
  extends UpdateUserInfoAPIResponse {}

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
  userId?: string;
  data: {
    email: string;
    password?: string;
    name?: string;
  };
}

export interface SignUpActionPayload {
  provider: 'facebook' | 'google' | 'local' | 'apple';
  userId?: string;
  data: {
    surname: string;
    name: string;
    email: string;
    phone: string;
    birthdate: string;
    password: string;
  };
}

export interface FailureResponsePayload {
  msg: string;
  data?: object;
}

export interface FetchUserAPIResponse {
  data?: IUser;
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
