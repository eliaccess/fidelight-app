import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'router/types';

type SignUpScreenRouteProp = RouteProp<RootStackParamList, 'SignUp'>;

type SignUpScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SignUp'
>;

export type SignUpScreenProps = {
  route: SignUpScreenRouteProp;
  navigation: SignUpScreenNavigationProp;
};
