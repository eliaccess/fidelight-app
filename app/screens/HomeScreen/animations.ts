import { interpolate } from 'react-native-reanimated';
// import Dimensions from 'theme/Dimensions';
export function UseDrawerAnimation(animationValue) {
  const scale = interpolate(animationValue, {
    inputRange: [0, 1],
    outputRange: [1, 0.7],
  });
  const borderRadius = interpolate(animationValue, {
    inputRange: [0, 1],
    outputRange: [0, 20],
  });
  const translateX = interpolate(animationValue, {
    inputRange: [0, 1],
    outputRange: [0, 240],
  });
  const opacity = interpolate(animationValue, {
    inputRange: [0, 1],
    outputRange: [1, 0.6],
  });

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
}

export function UseDrawerMenuAnimation(animationValue) {
  const opacity = interpolate(animationValue, {
    inputRange: [0, 1],
    outputRange: [0, 1],
  });
  return {
    opacity,
  };
}
