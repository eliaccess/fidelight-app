/**
 *
 * Text
 *
 */

import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import Colors from 'theme/Colors';

const defaultStyle = StyleSheet.create({
  fontFamily: {
    fontFamily: 'Poppins-Regular',
    backgroundColor: Colors.transparent,
  },
});

export interface TextProps {
  animated?: boolean;
  testID?: string;
  [key: string]: any;
}

const Text: React.FC<TextProps> = ({
  animated = false,
  style: componentStyles = {},
  ...props
}) => {
  const Component: any = animated ? Animated.Text : RNText;
  let style = [defaultStyle.fontFamily];
  if (componentStyles && Array.isArray(componentStyles)) {
    style = style.concat(componentStyles);
  } else if (componentStyles) {
    style.push(componentStyles);
  }
  return <Component style={style} {...props} />;
};

export default Text;
