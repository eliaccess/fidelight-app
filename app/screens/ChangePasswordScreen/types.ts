import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'router/types';

type ChangePasswordScreenRouteProp = RouteProp<
  RootStackParamList,
  'ChangePassword'
>;

type ChangePasswordScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ChangePassword'
>;

export type ChangePasswordScreenProps = {
  route: ChangePasswordScreenRouteProp;
  navigation: ChangePasswordScreenNavigationProp;
};
