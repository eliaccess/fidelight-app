import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'router/types';

type DealListingScreenRouteProp = RouteProp<RootStackParamList, 'DealListing'>;

type DealListingScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'DealListing'
>;

export type DealListingScreenProps = {
  route: DealListingScreenRouteProp;
  navigation: DealListingScreenNavigationProp;
};
