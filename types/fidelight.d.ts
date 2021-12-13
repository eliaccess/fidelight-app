export declare global {
  interface IUser {
    id: number;
    surname: string;
    name: string;
    qrCode: string;
    email: string;
    phone: string;
    birthdate: string;
    google: boolean;
    facebook: boolean;
    passwordSet: boolean;
    accountType: 'business' | 'user';
  }
  interface IBusinessUser {
    id: number;
    name: string;
    email: string;
    description: string;
    phone: string;
    companyType: string;
    country: string;
    city: string;
    streetName: string;
    streetNumber: string;
    logoUrl: string;
    backgroundPicture: string;
    websiteUrl: string;
    schedule?: {
      day: number;
      dayName: string;
      openAM: string;
      closeAM: string;
      openPM: string;
      closePm: string;
    }[];
  }
}
