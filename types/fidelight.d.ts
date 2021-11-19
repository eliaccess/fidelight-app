export declare global {
  interface IUser {
    email: string;
    provider: 'local' | 'facebook' | 'google' | 'apple';
    contactNumber: string;
    name: string;
    id: number;
    qrCode: string;
    preferences: any;
    profilePicture?: string;
    transactionCount?: number;
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
