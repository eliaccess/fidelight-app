/**
 *
 * DealListingLoader
 *
 */
import React from 'react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';
import { useLoaderAnimation } from 'hooks/useLoaderAnimation';

import style from './style';

interface DealListingLoaderProps {
  numberOfItems: number;
}

const DealListingLoader: React.FC<DealListingLoaderProps> = ({
  numberOfItems,
}) => {
  const animatedStyle = useLoaderAnimation();

  return (
    <View style={style.loaderContainer}>
      {Array.from(Array(numberOfItems), (_a, i) => (
        <Animated.View key={i} style={[style.item, animatedStyle]}>
          <Animated.View style={style.logoLoader} />
          <View style={style.contentWrapper}>
            <Animated.View style={style.titleLoader} />
            <Animated.View style={style.shortDescriptionLoader} />
          </View>
        </Animated.View>
      ))}
    </View>
  );
};

export default DealListingLoader;
