import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'router/types';

type EditBusinessInfoScreenRouteProp = RouteProp<
  RootStackParamList,
  'EditBusinessInfo'
>;

type EditBusinessInfoScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'EditBusinessInfo'
>;

export type EditBusinessInfoScreenProps = {
  route: EditBusinessInfoScreenRouteProp;
  navigation: EditBusinessInfoScreenNavigationProp;
};
