import React from 'react';
import {
  Platform,
  Pressable,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import Animated from 'react-native-reanimated';

const AnimatedPressable =
  Platform.OS === 'android'
    ? Animated.createAnimatedComponent(Pressable)
    : Animated.createAnimatedComponent(TouchableOpacity);

const TouchFeedback: React.FC<TouchableOpacityProps> = (props) => (
  <AnimatedPressable
    android_ripple={{
      color: 'rgba(0, 0, 0, 0.04)',
    }}
    {...props}
  />
);

export default TouchFeedback;
