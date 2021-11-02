/**
 *
 * EntityCardLoader
 *
 */
import React from 'react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';

import { useLoaderAnimation } from 'hooks/useLoaderAnimation';

import { useGetStyles } from './style';

const EntityCardLoader: React.FC<{}> = () => {
  const animatedStyle = useLoaderAnimation();
  const style = useGetStyles();

  return (
    <Animated.View style={[style.item, animatedStyle]}>
      <Animated.View style={style.logoLoader} />
      <View style={style.contentWrapper}>
        <Animated.View style={style.titleLoader} />
        <Animated.View style={style.shortDescriptionLoader} />
      </View>
    </Animated.View>
  );
};

export default EntityCardLoader;
