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
import { getFontFamily } from 'theme/utils';

const defaultStyle = StyleSheet.create({
  fontFamily: {
    fontFamily: 'Gilroy',
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
    if (findIndex(componentStyles, 'fontWeight') !== -1) {
      const index = findIndex(componentStyles, 'fontWeight');

      // @ts-ignore
      style.push({
        fontFamily: getFontFamily(componentStyles[index].fontWeight),
      });
    }
  } else if (componentStyles) {
    style.push(componentStyles);

    if (componentStyles?.fontWeight) {
      // @ts-ignore
      style.push({ fontFamily: getFontFamily(componentStyles.fontWeight) });
    }
  }

  return <Component style={style} {...props} />;
};

export default Text;
