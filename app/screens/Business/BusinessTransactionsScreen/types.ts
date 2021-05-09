import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'router/types';

type BusinessTransactionsScreenRouteProp = RouteProp<
  RootStackParamList,
  'BusinessTransactions'
>;

type BusinessTransactionsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'BusinessTransactions'
>;

export type BusinessTransactionsScreenProps = {
  route: BusinessTransactionsScreenRouteProp;
  navigation: BusinessTransactionsScreenNavigationProp;
};
