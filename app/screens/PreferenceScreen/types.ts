import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'router/types';

type PreferenceScreenRouteProp = RouteProp<RootStackParamList, 'Preference'>;

type PreferenceScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Preference'
>;

export type PreferenceScreenProps = {
  route: PreferenceScreenRouteProp;
  navigation: PreferenceScreenNavigationProp;
};
