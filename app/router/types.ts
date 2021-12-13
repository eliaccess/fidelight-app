// import { Route } from '@react-navigation/native';

export type RootStackParamList = {
  Splash: {};
  CitySelection: {};
  Home: {};
  AccountSelection: {};
  Login?: {};
  SignUp?: {};
  ForgetPassword: {};
  CommingSoon?: {};
  Explore?: {};
  FavoriteEntities?: {};
  DealListing: {};
  EntityDetail: {
    entityId: number;
  };
  Support?: {};
  ChangePassword?: {
    showCurrentPassword?: boolean;
  };
  Preference?: {};
  Profile?: {};
  ProfileEdit?: {};
  BusinessLogin?: {};
  BusinessSignUp?: {};
  BusinessHome?: {};
  BusinessExplore?: {};
  BusinessTransactions?: {};
  EditBusinessInfo?: {};
  DealDetail: {
    dealId: number;
  };
  QRCode: {
    rewardId?: number;
    qrValue: string;
  };
  BusinessProfile: {};
  BusinessQRCode: {};
  EntitySearch: {};
  BusinessDealListing: {};
};
