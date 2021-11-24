import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'router/types';

type BusinessQRCodeScreenRouteProp = RouteProp<
  RootStackParamList,
  'BusinessQRCode'
>;

type BusinessQRCodeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'BusinessQRCode'
>;

export type BusinessQRCodeScreenProps = {
  route: BusinessQRCodeScreenRouteProp;
  navigation: BusinessQRCodeScreenNavigationProp;
};
