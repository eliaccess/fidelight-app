/*
 *
 * Search
 *
 */

import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import CategoriesWidget from './Categories';
import HottestDealsWidget from './HottestDeals';
import RestaurantsList from './RestaurantsList';

import { ExploreScreenProps } from './types';

import { useGetStyles } from './style';

function ExploreScreen(_props: ExploreScreenProps) {
  const style = useGetStyles();

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.contentContainerStyle}
      >
        <View style={style.categoriesSectionWrapper}>
          <CategoriesWidget />
        </View>
        <HottestDealsWidget />
        <RestaurantsList />
      </ScrollView>
    </>
  );
}

export default React.memo(ExploreScreen);
