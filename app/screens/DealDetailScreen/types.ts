import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'router/types';

type DealDetailScreenRouteProp = RouteProp<RootStackParamList, 'DealDetail'>;

type DealDetailScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'DealDetail'
>;

export type DealDetailScreenProps = {
  route: DealDetailScreenRouteProp;
  navigation: DealDetailScreenNavigationProp;
};
