import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'router/types';

type BusinessExploreScreenRouteProp = RouteProp<RootStackParamList, 'Explore'>;

type BusinessExploreScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'BusinessExplore'
>;

export type BusinessExploreScreenProps = {
  route: BusinessExploreScreenRouteProp;
  navigation: BusinessExploreScreenNavigationProp;
};
