import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'router/types';

type ProfileEditScreenRouteProp = RouteProp<RootStackParamList, 'ProfileEdit'>;

type ProfileEditScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ProfileEdit'
>;

export type ProfileEditScreenProps = {
  route: ProfileEditScreenRouteProp;
  navigation: ProfileEditScreenNavigationProp;
};
