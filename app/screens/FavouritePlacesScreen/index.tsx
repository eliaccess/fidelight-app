/*
 *
 * Search
 *
 */

import React, { useState } from 'react';
// import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import HomeHeader from 'components/HomeHeader';
import QRCode from 'components/QRCode';

import style from './style';

import { FavouritePlacesScreenProps } from './types';
import RestaurantsList from './RestaurantsList';

function FavouritePlacesScreen(_props: FavouritePlacesScreenProps) {
  const [visibleQR, setVisibleQR] = useState(false);
  return (
    <>
      <HomeHeader />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.contentContainerStyle}
      >
        <RestaurantsList onPress={() => setVisibleQR(true)} />
      </ScrollView>
      <QRCode visible={visibleQR} onRequestClose={() => setVisibleQR(false)} />
    </>
  );
}

export default React.memo(FavouritePlacesScreen);
