import Animated from 'react-native-reanimated';
// import Colors from 'theme/Colors';
// import Dimensions from 'theme/Dimensions';

export function UseAnimatedIcon(animationValue) {
  const scale = Animated.interpolate(animationValue, {
    inputRange: [0, 1],
    outputRange: [1, 1.1],
    extrapolate: Animated.Extrapolate.CLAMP,
  });
  // const color = interpolateColor(
  //   animationValue.value,
  //   [0, 1],
  //   [Colors.textGrey, Colors.accent],
  // );
  return {
    transform: [
      {
        scale,
      },
    ],
  };
}
