/*
 *
 * Search
 *
 */

import React from 'react';
// import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import HomeHeader from 'components/HomeHeader';
import style from './style';

import { FavouritePlacesScreenProps } from './types';
import RestaurantsList from './RestaurantsList';

function FavouritePlacesScreen(_props: FavouritePlacesScreenProps) {
  return (
    <>
      <HomeHeader />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.contentContainerStyle}
      >
        <RestaurantsList />
      </ScrollView>
    </>
  );
}

export default React.memo(FavouritePlacesScreen);
