import { interpolate, Extrapolate } from 'react-native-reanimated';

import { DOT_SIZE, ITEM_WIDTH } from './style';

export function UsePaginationAnimation(animationValue) {
  const inputRange = [-ITEM_WIDTH, 0, ITEM_WIDTH];
  const translateX = interpolate(animationValue, {
    inputRange,
    outputRange: [-DOT_SIZE, 0, DOT_SIZE],
    extrapolate: Extrapolate.CLAMP,
  });
  return {
    transform: [
      {
        translateX,
      },
    ],
  };
}
