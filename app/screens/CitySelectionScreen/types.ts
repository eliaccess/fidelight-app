import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'router/types';

type CitySelectionScreenRouteProp = RouteProp<
  RootStackParamList,
  'CitySelection'
>;

type CitySelectionScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'CitySelection'
>;

export type CitySelectionScreenProps = {
  route: CitySelectionScreenRouteProp;
  navigation: CitySelectionScreenNavigationProp;
};
