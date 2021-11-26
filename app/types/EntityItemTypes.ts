export interface EntityItemTypes {
  id: number;
  typeId: number;
  name: string;
  logoUrl: string;
  description: string;
  streetNumber: string;
  streetName: string;
  city: string;
}

export interface EntityDetailItemTypes {
  id: number;
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
