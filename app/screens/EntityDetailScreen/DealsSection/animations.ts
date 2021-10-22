import { interpolate, useAnimatedStyle } from 'react-native-reanimated';

import { DOT_SIZE, ITEM_WIDTH } from './style';

export function UsePaginationAnimation(animationValue) {
  const inputRange = [-ITEM_WIDTH, 0, ITEM_WIDTH];
  return useAnimatedStyle(() => {
    const translateX = interpolate(animationValue.value, inputRange, [
      -DOT_SIZE,
      0,
      DOT_SIZE,
    ]);

    return {
      transform: [
        {
          translateX,
        },
      ],
    };
  });
}
