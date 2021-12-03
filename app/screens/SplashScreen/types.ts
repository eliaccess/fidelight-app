import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'router/types';

type SplashScreenRouteProp = RouteProp<RootStackParamList, 'Splash'>;

type SplashScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Splash'
>;

export type SplashScreenProps = {
  route: SplashScreenRouteProp;
  navigation: SplashScreenNavigationProp;
};
