/**
 *
 * WishlistButton
 *
 */

import React, { useEffect } from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import animations from 'animations';
import Animated, {
  Easing,
  interpolate,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import Icon from 'theme/Icon';
import TouchFeedback from 'theme/TouchFeedback';

import style from './style';

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

interface WishlistButtonProps {
  active?: boolean;
  onPress: (...args: any) => any;
}

const WishlistButton: React.FC<WishlistButtonProps> = ({ active, onPress }) => {
  const progress = useSharedValue(0);

  const animatedProps = useAnimatedProps(() => ({
    progress: progress.value,
  }));

  useEffect(() => {
    progress.value = withTiming(active ? 1 : 0, {
      duration: 1500,
      easing: Easing.linear,
    });
  }, [progress, active]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(progress.value, [0, 0.25], [1, 0]),
  }));

  return (
    <TouchFeedback onPress={onPress} style={style.button}>
      <View style={style.button}>
        <AnimatedLottieView
          style={style.buttonIcon}
          source={animations.wishlist}
          animatedProps={animatedProps}
        />
        <Icon
          animated
          name="heart"
          style={[style.buttonFallbackIcon, animatedStyle]}
        />
      </View>
    </TouchFeedback>
  );
};

export default React.memo(WishlistButton);
