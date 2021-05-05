import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'router/types';

type SupportScreenRouteProp = RouteProp<RootStackParamList, 'Support'>;

type SupportScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Support'
>;

export type SupportScreenProps = {
  route: SupportScreenRouteProp;
  navigation: SupportScreenNavigationProp;
};
