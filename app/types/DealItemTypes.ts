export interface DealItemTypes {
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
}
