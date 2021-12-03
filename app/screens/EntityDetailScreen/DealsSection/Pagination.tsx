import React from 'react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';

import style from './style';
import { UsePaginationAnimation } from './animations';

type PaginationProps = {
  length: number;
  scrollX: any;
};

function Pagination({ scrollX, length }: PaginationProps) {
  const usePagination = UsePaginationAnimation(scrollX);

  return (
    <View style={[style.pagination]}>
      <Animated.View style={[style.paginationIndicator, usePagination]} />
      {Array.from({ length }, (_a, i) => (
        <View key={i} style={style.paginationDotContainer}>
          <View style={style.paginationDot} />
        </View>
      ))}
    </View>
  );
}

export default React.memo(Pagination);
