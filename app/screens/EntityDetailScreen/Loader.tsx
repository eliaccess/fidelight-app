/**
 *
 * EntityDetailLoader
 *
 */
import React from 'react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';
import { useLoaderAnimation } from 'hooks/useLoaderAnimation';

import style from './style';

const EntityDetailLoader: React.FC<{}> = () => {
  const animatedStyle = useLoaderAnimation();

  return (
    <>
      <Animated.View style={[style.loaderHeader, animatedStyle]} />
      <Animated.View style={[style.entityNameLoader, animatedStyle]} />
      <Animated.View style={[style.entityDescriptionLoader, animatedStyle]} />

      <View style={style.loaderContentWrapper}>
        <Animated.View style={[style.labelLoader, animatedStyle]} />
        <Animated.View style={[style.labelLoader, animatedStyle]} />
        <Animated.View style={[style.labelLoader, animatedStyle]} />
      </View>
    </>
  );
};

export default EntityDetailLoader;
