import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'router/types';

type BusinessSignUpScreenRouteProp = RouteProp<
  RootStackParamList,
  'BusinessSignUp'
>;

type BusinessSignUpScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'BusinessSignUp'
>;

export type BusinessSignUpScreenProps = {
  route: BusinessSignUpScreenRouteProp;
  navigation: BusinessSignUpScreenNavigationProp;
};
