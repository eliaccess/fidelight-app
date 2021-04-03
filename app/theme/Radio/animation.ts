import { interpolateColor, useAnimatedStyle } from 'react-native-reanimated';
import Colors from 'theme/Colors';

export function UseSquareAnimation(animationValue) {
  return useAnimatedStyle(() => {
    const borderColor = interpolateColor(
      animationValue.value,
      [0, 1],
      [Colors.textBlack, Colors.accent],
    );
    return {
      borderColor,
    };
  });
}

export function UseInnerSquareAnimation(animationValue) {
  return useAnimatedStyle(() => ({
    transform: [
      {
        scale: animationValue.value,
      },
    ],
    opacity: animationValue.value,
  }));
}
