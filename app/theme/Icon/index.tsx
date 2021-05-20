/**
 *
 * Icon
 *
 */
import React from 'react';
import { Platform } from 'react-native';
import Animated from 'react-native-reanimated';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from 'assets/fonts/fidelight.json';

const FidelightIcons = Platform.select({
  ios: createIconSetFromFontello(fontelloConfig),
  android: createIconSetFromFontello(
    { ...fontelloConfig, name: 'Fidelight.ttf' },
    'Fidelight',
  ),
});

export type IconProps = {
  animated?: boolean;
  font?: 'feather' | 'simpleLine' | 'ionicons' | 'fidelight';
  name?: string;
  size?: number;
  color?: string;
  [x: string]: any;
};

const animatedElements = {
  feather: Animated.createAnimatedComponent(Feather),
  simpleLine: Animated.createAnimatedComponent(SimpleLineIcons),
  ionicons: Animated.createAnimatedComponent(Ionicons),
  fidelight: Animated.createAnimatedComponent(FidelightIcons),
};

const normalElements = {
  feather: Feather,
  simpleLine: SimpleLineIcons,
  ionicons: Ionicons,
  fidelight: FidelightIcons,
};

const Icon: React.FC<IconProps> = ({
  animated = false,
  font = 'feather',
  ...props
}) => {
  const Element = animated ? animatedElements[font] : normalElements[font];
  return <Element {...props} />;
};

export default Icon;
