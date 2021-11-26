import { interpolate, useAnimatedStyle } from 'react-native-reanimated';
// import Dimensions from 'theme/Dimensions';
export function UseBottomAnimation(animationValue, state) {
  return useAnimatedStyle(() => {
    const translateY = interpolate(
      animationValue.value,
      [0, 1],
      [0, -state.bottomOffset],
    );

    return {
      transform: [{ translateY }],
    };
  });
}

export function UseTopAnimation(animationValue, state) {
  return useAnimatedStyle(() => {
    const translateY = interpolate(
      animationValue.value,
      [0, 1],
      [0, state.topOffset],
    );

    return {
      transform: [{ translateY }],
    };
  });
}

export function UseOpacityAnimation(animationValue) {
  return useAnimatedStyle(() => {
    const opacity = interpolate(animationValue.value, [0, 1], [0, 1]);
    return {
      opacity,
    };
  });
}
