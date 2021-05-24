import { interpolate } from 'react-native-reanimated';
// import Dimensions from 'theme/Dimensions';
export function UseDrawerAnimation(animationValue) {
  const scale = interpolate(animationValue, {
    inputRange: [0, 1],
    outputRange: [1, 0.7],
  });
  const translateY = interpolate(animationValue, {
    inputRange: [0, 1],
    outputRange: [0, 100],
  });
  const translateX = interpolate(animationValue, {
    inputRange: [0, 1],
    outputRange: [0, 250],
  });
  const opacity = interpolate(animationValue, {
    inputRange: [0, 1],
    outputRange: [1, 0.7],
  });

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
}

export function UseDrawerMenuAnimation(animationValue) {
  const opacity = interpolate(animationValue, {
    inputRange: [0, 1],
    outputRange: [1, 0.7],
  });
  return {
    opacity,
  };
}
