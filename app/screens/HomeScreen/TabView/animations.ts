import {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated';

import Colors from 'theme/Colors';

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
