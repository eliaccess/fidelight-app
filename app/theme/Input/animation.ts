import {
  interpolate,
  // interpolateColor,
} from 'react-native-reanimated';
// import Colors from 'theme/Colors';

export function UseLabelAnimation(animationValue) {
  const scale = interpolate(animationValue, {
    inputRange: [0, 1],
    outputRange: [1, 0.9],
  });
  const translateY = interpolate(animationValue, {
    inputRange: [0, 1],
    outputRange: [6, -22],
  });
  const translateX = interpolate(animationValue, {
    inputRange: [0, 1],
    outputRange: [0, -3],
  });

  return {
    transform: [
      {
        scale,
      },
      { translateY },
      { translateX },
    ],
  };
}

export function UseInnerSquareAnimation(animationValue) {
  return {
    transform: [
      {
        scale: animationValue,
      },
    ],
    opacity: animationValue,
  };
}
