/**
 *
 * DealListingLoader
 *
 */
import React from 'react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';
import { useSkeletonValue } from 'react-native-animated-skeleton';

import style from './style';

interface DealListingLoaderProps {
  numberOfItems: number;
}

const { interpolate, Extrapolate } = Animated;

const DealListingLoader: React.FC<DealListingLoaderProps> = ({
  numberOfItems,
}) => {
  const progress: Animated.Value<number> = useSkeletonValue();
  const length = numberOfItems;
  const delta = 1 / length;

  return (
    <View style={style.loaderContainer}>
      {Array.from(Array(numberOfItems), (_a, i) => {
        const start = i * delta;
        const end = start + delta;
        const opacity = interpolate(progress, {
          inputRange: [start, end],
          outputRange: [0.4, 1],
          extrapolate: Extrapolate.CLAMP,
        });
        return (
          <Animated.View key={i} style={[style.item, { opacity }]}>
            <Animated.View style={style.logoLoader} />
            <View style={style.contentWrapper}>
              <Animated.View style={style.titleLoader} />
              <Animated.View style={style.shortDescriptionLoader} />
            </View>
          </Animated.View>
        );
      })}
    </View>
  );
};

export default DealListingLoader;
