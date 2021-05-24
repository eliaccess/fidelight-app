export declare global {
  interface IUser {
    email: string;
    provider: 'local' | 'facebook' | 'google' | 'apple';
    contactNumber: string;
    name: string;
    id: number;
    preferences: any;
    profilePicture?: string;
    transactionCount?: number;
  }
}
