import { interpolate, useAnimatedStyle } from 'react-native-reanimated';
// import Dimensions from 'theme/Dimensions';
export function UseDrawerAnimation(animationValue) {
  return useAnimatedStyle(() => {
    const scale = interpolate(animationValue.value, [0, 1], [1, 0.7]);
    const borderRadius = interpolate(animationValue.value, [0, 1], [0, 20]);
    const translateX = interpolate(animationValue.value, [0, 1], [0, 240]);
    const opacity = interpolate(animationValue.value, [0, 1], [1, 0.6]);
    return {
      transform: [
        {
          scale,
        },
        { translateX },
      ],
      opacity,
      borderRadius,
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
