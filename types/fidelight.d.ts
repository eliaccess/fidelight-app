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
}
