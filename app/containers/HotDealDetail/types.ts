export interface UseHotDealDetailProps {
  dealId: string;
}

export interface HotDealDetailProps extends UseHotDealDetailProps {
  children: (props: any) => any;
}

export interface StateItem {
  fetching: boolean;
  error: boolean;
  data: ResponsePayload['data'];
}

export interface State {
  [key: string]: StateItem;
}

export interface FetchProps {
  type: string;
  payload: FetchPropsPayload;
}

export interface FetchPropsPayload extends UseHotDealDetailProps {
  key: string;
}

export interface HotDealDetailAPIResponse {
  data?: {
    id: string;
    company: number;
    discountType: number;
    timesUsed: number;
    cost: number;
    name: string;
    description: string;
    pictureLink: string;
    product: string;
    nbMax: string | null;
    creationDate: string;
    startDate: string;
    expirationDate: string | null;
    perDay: {
      monday: string | null;
      tuesday: string | null;
      wednesday: string | null;
      thursday: string | null;
      friday: string | null;
      saturday: string | null;
      sunday: string | null;
    };
    value: number;
  };
}

export interface ResponsePayload extends HotDealDetailAPIResponse {
  key: string;
}
