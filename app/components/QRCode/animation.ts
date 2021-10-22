import {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

import Dimensions from 'theme/Dimensions';

const height = Dimensions.screenHeight;

export function UseQRCodeAnimation(animationValue) {
  return useAnimatedStyle(() => {
    const opacity = interpolate(
      animationValue.value,
      [0, 1],
      [0, 1],
      Extrapolate.CLAMP,
    );
    const translateY = interpolate(
      animationValue.value,
      [0, 1],
      [height, 1],
      Extrapolate.CLAMP,
    );
    return {
      transform: [
        {
          translateY,
        },
      ],
      opacity,
    };
  });
}
