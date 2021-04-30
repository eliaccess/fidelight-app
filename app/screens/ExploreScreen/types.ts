import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'router/types';

type ExploreScreenRouteProp = RouteProp<RootStackParamList, 'Explore'>;

type ExploreScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Explore'
>;

export type ExploreScreenProps = {
  route: ExploreScreenRouteProp;
  navigation: ExploreScreenNavigationProp;
};
