import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'router/types';

type EntityDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  'EntityDetail'
>;

type EntityDetailScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'EntityDetail'
>;

export type EntityDetailScreenProps = {
  route: EntityDetailScreenRouteProp;
  navigation: EntityDetailScreenNavigationProp;
};
