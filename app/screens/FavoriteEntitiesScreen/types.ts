import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'router/types';

type FavoriteEntitiesScreenRouteProp = RouteProp<
  RootStackParamList,
  'FavoriteEntities'
>;

type FavoriteEntitiesScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'FavoriteEntities'
>;

export type FavoriteEntitiesScreenProps = {
  route: FavoriteEntitiesScreenRouteProp;
  navigation: FavoriteEntitiesScreenNavigationProp;
};
