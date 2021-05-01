import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'router/types';

type FavouritePlacesScreenRouteProp = RouteProp<
  RootStackParamList,
  'FavouritePlaces'
>;

type FavouritePlacesScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'FavouritePlaces'
>;

export type FavouritePlacesScreenProps = {
  route: FavouritePlacesScreenRouteProp;
  navigation: FavouritePlacesScreenNavigationProp;
};
