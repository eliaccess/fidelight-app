/**
 *
 * Text
 *
 */

import findIndex from 'lodash/findIndex';
import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import Colors from 'theme/Colors';

const defaultStyle = StyleSheet.create({
  fontFamily: {
    fontFamily: 'Gilroy-Regular',
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
    // TODO: need to fix for multiple font values

    if (findIndex(componentStyles, { fontWeight: 'bold' }) !== -1) {
      // @ts-ignore
      style.push({ fontFamily: 'Gilroy-Bold' });
    }
  } else if (componentStyles) {
    style.push(componentStyles);

    // TODO: need to fix for multiple font values
    // @ts-ignore
    if (componentStyles?.fontWeight === 'bold') {
      // @ts-ignore
      style.push({ fontFamily: 'Gilroy-Bold' });
    }
  }

  return <Component style={style} {...props} />;
};

export default Text;
