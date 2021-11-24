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
  ChangePassword?: {};
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
    dealId: string;
  };
  QRCode: {
    rewardId?: number;
    qrValue: string;
  };
  BusinessProfile: {};
  BusinessQRCode: {};
};
