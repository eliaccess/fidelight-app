export type UseChangePasswordProps = {};

export interface UseChangePasswordReturn extends State {
  submit: (args: SubmitPropsPayload) => void;
  reset: () => void;
}

export interface ChangePasswordProps extends UseChangePasswordProps {
  children: (props: any) => any;
}

export interface State {
  submitting: boolean;
  success: boolean;
  error?: string;
  currentPassword?: string;
  newPassword: string;
}

export interface SendCodeProps {
  type: string;
  payload: SendCodePropsPayload;
}

export interface SendCodePropsPayload extends UseChangePasswordProps {
  currentPassword?: string;
}

export interface SubmitProps {
  type: string;
  payload: SubmitPropsPayload;
}

export interface SubmitPropsPayload extends UseChangePasswordProps {
  currentPassword?: string;
  newPassword: string;
}

export interface ResponsePayload {
  msg?: string;
  error?: string;
}

export interface ChangePasswordAPIResponse {}
