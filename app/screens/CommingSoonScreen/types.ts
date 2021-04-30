import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'router/types';

type CommingSoonScreenRouteProp = RouteProp<RootStackParamList, 'CommingSoon'>;

type CommingSoonScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'CommingSoon'
>;

export type CommingSoonScreenProps = {
  route: CommingSoonScreenRouteProp;
  navigation: CommingSoonScreenNavigationProp;
};
