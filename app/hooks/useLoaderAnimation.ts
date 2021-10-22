import { useEffect } from 'react';
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
export function useLoaderAnimation() {
  const shared = useSharedValue(0);

  useEffect(() => {
    shared.value = withRepeat(
      withTiming(1, { duration: 1000 }),
      Infinity,
      true,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(shared.value, [0, 1], [0.2, 1]),
  }));
  return animatedStyle;
}
