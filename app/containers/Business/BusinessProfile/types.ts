export type UseBusinessProfileProps = {
  limit?: number;
  offset?: number;
};

export interface BusinessProfileProps extends UseBusinessProfileProps {
  children: (props: any) => any;
}

export interface State {
  fetching: boolean;
  error: boolean;
  updating: boolean;
  submitting: boolean;
  success: boolean;
  message: string;
  data: ResponsePayload['data'];
}

export interface FetchProps {
  type: string;
}

export interface BusinessProfileAPIResponse {
  data: IBusinessUser;
}

export interface UpdateProps {
  type: string;
  payload: UpdatePropsPayload;
}

export interface UpdatePropsPayload {
  data: {
    name: string;
    email: string;
    companyType: string;
    streetName: string;
    streetNumber: string;
    city: string;
    country: string;
    phone: string;
    description: string;
    websiteUrl: string;
  };
}

export interface UpdateResponsePayload extends UpdatePropsPayload {
  message: string;
}

export interface ResponsePayload extends BusinessProfileAPIResponse {}

export interface AddLogoPayload {
  data: {
    fileName: string;
    fileSize: number;
    height: number;
    type: 'string';
    uri: 'string';
    width: number;
  };
}

export interface AddLogoProps {
  type: string;
  payload: AddLogoPayload;
}
export interface AddLogoPropsPayload extends AddLogoPayload {}

export interface AddLogoAPIResponse {
  message: string;
  data?: {
    logoUrl: string;
  };
}

export interface AddBackgroundImagePayload {
  data: {
    fileName: string;
    fileSize: number;
    height: number;
    type: 'string';
    uri: 'string';
    width: number;
  };
}

export interface AddBackgroundImageProps {
  type: string;
  payload: AddBackgroundImagePayload;
}
export interface AddBackgroundImagePropsPayload
  extends AddBackgroundImagePayload {}

export interface AddBackgroundImageAPIResponse {
  message: string;
  data?: {
    backgroundPicture?: string;
  };
}

export interface FailureAPIResponse {
  message: string;
}

export interface AddScheduleProps {
  type: string;
  payload: AddSchedulePropsPayload;
}

export interface AddSchedulePropsPayload {
  data: {
    day: number;
    openAm: string;
    closeAm: string;
    openPm: string;
    closePm: string;
  }[];
}

export interface AddScheduleResponsePayload extends AddSchedulePropsPayload {
  message: string;
}

export interface AddScheduleAPIResponsePayload {
  message: string;
}
