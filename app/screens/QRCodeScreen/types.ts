import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'router/types';

type QRCodeScreenRouteProp = RouteProp<RootStackParamList, 'QRCode'>;

type QRCodeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'QRCode'
>;

export type QRCodeScreenProps = {
  route: QRCodeScreenRouteProp;
  navigation: QRCodeScreenNavigationProp;
};
