export interface EntityItemTypes {
  id: number;
  typeId: number;
  companyName: string;
  logoUrl: string;
  description: string;
  streetNumber: string;
  streetName: string;
  city: string;
  isFavorite: boolean;
}

export interface EntityDetailItemTypes {
  name: string;
  phone: string;
  registration_date: string;
  description: string;
  logoUrl: string;
  backgroundPicture: string;
  streetNumber: string;
  streetName: string;
  city: string;
  country: string;
  isFavorite: boolean;
  websiteUrl: string;
  userPoints: number;
  schedule: {
    day: number;
    dayName: string;
    openAM: string;
    closeAM: string;
    openPM: string;
    closePm: string;
  }[];
}
