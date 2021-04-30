/*
 *
 * Search
 *
 */

import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Header from './Header';
import CategoriesWidget from './Categories';
import HottestDealsWidget from './HottestDeals';
import style from './style';
import { ExploreScreenProps } from './types';
import RestaurantsList from './RestaurantsList';

function ExploreScreen(_props: ExploreScreenProps) {
  return (
    <ScrollView contentContainerStyle={style.contentContainerStyle}>
      <Header />
      <View style={style.categoriesSectionWrapper}>
        <CategoriesWidget />
      </View>
      <HottestDealsWidget />
      <RestaurantsList />
    </ScrollView>
  );
}

export default React.memo(ExploreScreen);
