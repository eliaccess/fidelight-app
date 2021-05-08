import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'router/types';

type BusinessLoginScreenRouteProp = RouteProp<
  RootStackParamList,
  'BusinessLogin'
>;

type BusinessLoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'BusinessLogin'
>;

export type BusinessLoginScreenProps = {
  route: BusinessLoginScreenRouteProp;
  navigation: BusinessLoginScreenNavigationProp;
};
