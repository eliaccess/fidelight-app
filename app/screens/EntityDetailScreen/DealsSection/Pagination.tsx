import React from 'react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';
import style from './style';

import { deals } from './data';
import { UsePaginationAnimation } from './animations';

function Pagination({ scrollX }) {
  const usePagination = UsePaginationAnimation(scrollX);
  return (
    <View style={[style.pagination]}>
      <Animated.View style={[style.paginationIndicator, usePagination]} />
      {deals.map((item) => (
        <View key={item.id} style={style.paginationDotContainer}>
          <View style={style.paginationDot} />
        </View>
      ))}
    </View>
  );
}

export default Pagination;
