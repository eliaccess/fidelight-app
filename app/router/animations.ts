import {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import Dimensions from 'theme/Dimensions';

export const RightToLeftAnimation = {
  gestureDirection: 'horizontal',
  cardStyleInterpolator: ({ current, layouts }) => ({
    cardStyle: {
      transform: [
        {
          translateX: current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [layouts.screen.width, 0],
          }),
        },
      ],
      opacity: current.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
      }),
    },
  }),
};
export const LeftToRightAnimation = {
  gestureDirection: 'horizontal',
  cardStyleInterpolator: ({ current, layouts }) => ({
    cardStyle: {
      transform: [
        {
          translateX: current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [-layouts.screen.width, 0],
          }),
        },
      ],
      opacity: current.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
      }),
    },
  }),
};
export const bottomToTopAnimation = {
  gestureDirection: 'vertical',
  cardStyleInterpolator: ({ current, layouts }) => ({
    cardStyle: {
      transform: [
        {
          translateY: current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [layouts.screen.height, 0],
          }),
        },
      ],
      //   opacity: current.progress.interpolate({
      //     inputRange: [0, 1],
      //     outputRange: [0, 1],
      //   }),
    },
  }),
};

export const useOverlay = (animation) =>
  useAnimatedStyle(() => {
    const opacity = interpolate(
      animation.value,
      [0, 1],
      [0, 0.5],
      Extrapolate.CLAMP,
    );
    const translateX = interpolate(
      animation.value,
      [0, 1],
      [-Dimensions.screenWidth, Dimensions.screenWidth],
      Extrapolate.CLAMP,
    );

    return {
      transform: [
        {
          translateX,
        },
      ],
      opacity,
    };
  });
