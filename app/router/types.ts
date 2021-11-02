// import { Route } from '@react-navigation/native';

export type RootStackParamList = {
  Splash: {};
  Home: {};
  AccountSelection: {};
  Login?: {};
  SignUp?: {};
  ForgetPassword: {};
  CommingSoon?: {};
  Explore?: {};
  FavoriteEntities?: {};
  DealListing: {};
  EntityDetail?: {};
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
};
