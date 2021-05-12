import { interpolate, useAnimatedStyle } from 'react-native-reanimated';

export function UseDrawerAnimation(animationValue) {
  return useAnimatedStyle(() => {
    const scale = interpolate(animationValue.value, [0, 1], [1, 0.7]);
    const translateY = interpolate(animationValue.value, [0, 1], [0, 100]);
    const translateX = interpolate(animationValue.value, [0, 1], [0, 250]);
    const opacity = interpolate(animationValue.value, [0, 1], [1, 0.7]);
    return {
      transform: [
        {
          scale,
        },
        { translateY },
        { translateX },
      ],
      opacity,
    };
  });
}

export function UseDrawerMenuAnimation(animationValue) {
  return useAnimatedStyle(() => {
    const opacity = interpolate(animationValue.value, [0, 1], [0, 1]);
    return {
      opacity,
    };
  });
}
