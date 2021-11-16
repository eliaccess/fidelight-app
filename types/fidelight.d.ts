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
    description: string;
    phone: string;
    companyType: 5;
    country: string;
    city: string;
    streetName: string;
    streetNumber: 357;
    logoUrl: string;
    backgroundPicture: string;
    websiteUrl: string | null;
    schedule: {
      day: number;
      dayName: string;
      openAM: string;
      closeAM: string;
      openPM: string;
      closePm: string;
    }[];
  }
}
