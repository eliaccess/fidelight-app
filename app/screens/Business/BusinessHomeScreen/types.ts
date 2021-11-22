import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'router/types';

type BusinessHomeScreenRouteProp = RouteProp<
  RootStackParamList,
  'BusinessHome'
>;

type BusinessHomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'BusinessHome'
>;

export type BusinessHomeScreenProps = {
  route: BusinessHomeScreenRouteProp;
  navigation: BusinessHomeScreenNavigationProp;
};
