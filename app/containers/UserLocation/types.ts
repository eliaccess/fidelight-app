export type UseUserLocationProps = {
  city: string;
  country: string;
  image: string;
};

export interface UserLocationProps extends UseUserLocationProps {
  children: (props: any) => any;
}

export interface State {
  fetching: boolean;
  setting: boolean;
  error: boolean;
  checkedLocal: boolean;
  data: ResponsePayload['data'];
  setCity: (data: ICityItem) => void;
}

export interface SetProps {
  type: string;
  payload: SetPayload;
}

export interface SetPayload {
  data: ICityItem;
}

export interface UserLocationAPIResponse {
  data: ICityItem;
}

export interface ResponsePayload extends UserLocationAPIResponse {
  key?: string;
}
