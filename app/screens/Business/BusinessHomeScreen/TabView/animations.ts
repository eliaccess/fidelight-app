import {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated';

import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';

export function UseAnimatedIcon(animationValue) {
  return useAnimatedStyle(() => {
    const scale = interpolate(
      animationValue.value,
      [0, 1],
      [1, 1.1],
      Extrapolate.CLAMP,
    );
    const color = interpolateColor(
      animationValue.value,
      [0, 1],
      [Colors.textGrey, Colors.accent],
    );

    return {
      transform: [
        {
          scale,
        },
      ],

      color,
    };
  });
}

const TAB_WIDTH = Dimensions.screenWidth / 5;

export function UseAnimatedBar(animationValue) {
  return useAnimatedStyle(() => {
    const translateX = interpolate(
      animationValue.value,
      [0, 1, 2, 3, 4],
      [0, TAB_WIDTH, TAB_WIDTH * 2, TAB_WIDTH * 3, TAB_WIDTH * 4],
      Extrapolate.CLAMP,
    );
    return {
      transform: [
        {
          translateX,
        },
      ],
    };
  });
}
