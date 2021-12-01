import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'router/types';

type BusinessDealListingScreenRouteProp = RouteProp<
  RootStackParamList,
  'BusinessDealListing'
>;

type BusinessDealListingScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'BusinessDealListing'
>;

export type BusinessDealListingScreenProps = {
  route: BusinessDealListingScreenRouteProp;
  navigation: BusinessDealListingScreenNavigationProp;
};
