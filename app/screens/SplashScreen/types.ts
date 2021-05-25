import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'router/types';

type SplashRouteProp = RouteProp<RootStackParamList, 'Home'>;

type SplashNavigationProp = StackNavigationProp<RootStackParamList, 'Splash'>;

export type SplashProps = {
  route: SplashRouteProp;
  navigation: SplashNavigationProp;
};
