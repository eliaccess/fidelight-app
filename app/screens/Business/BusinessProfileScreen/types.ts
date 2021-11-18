import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'router/types';

type BusinessProfileScreenRouteProp = RouteProp<
  RootStackParamList,
  'BusinessProfile'
>;

type BusinessProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'BusinessProfile'
>;

export type BusinessProfileScreenProps = {
  route: BusinessProfileScreenRouteProp;
  navigation: BusinessProfileScreenNavigationProp;
};
