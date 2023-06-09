import {
  interpolate,
  // interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated';
// import Colors from 'theme/Colors';

export function UseLabelAnimation(animationValue) {
  return useAnimatedStyle(() => {
    const scale = interpolate(animationValue.value, [0, 1], [1, 0.9]);
    const translateY = interpolate(animationValue.value, [0, 1], [6, -18]);
    const translateX = interpolate(animationValue.value, [0, 1], [0, -3]);
    // const color = interpolateColor(
    //   animationValue.value,
    //   [0, 1],
    //   [Colors.textBlack, Colors.inputLabel],
    // );
    return {
      // color,
      transform: [
        {
          scale,
        },
        { translateY },
        { translateX },
      ],
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
