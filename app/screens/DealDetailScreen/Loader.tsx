/**
 *
 * DealDetailLoader
 *
 */
import React from 'react';

import Animated from 'react-native-reanimated';
import { useLoaderAnimation } from 'hooks/useLoaderAnimation';

import style from './style';

const DealDetailLoader: React.FC<{}> = () => {
  const animatedStyle = useLoaderAnimation();

  return <Animated.View style={[style.loaderContainer, animatedStyle]} />;
};

export default DealDetailLoader;
