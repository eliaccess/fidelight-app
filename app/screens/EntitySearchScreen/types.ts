import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'router/types';

type EntitySearchScreenRouteProp = RouteProp<
  RootStackParamList,
  'EntitySearch'
>;

type EntitySearchScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'EntitySearch'
>;

export type EntitySearchScreenProps = {
  route: EntitySearchScreenRouteProp;
  navigation: EntitySearchScreenNavigationProp;
};
