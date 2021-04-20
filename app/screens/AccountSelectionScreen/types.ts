import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'router/types';

type AccountSelectionScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

type AccountSelectionScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

export type AccountSelectionScreenProps = {
  route: AccountSelectionScreenRouteProp;
  navigation: AccountSelectionScreenNavigationProp;
};
