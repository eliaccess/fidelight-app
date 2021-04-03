/**
 *
 * Styles for HorizontalSlidingList
 *
 */

import { StyleSheet } from 'react-native';

// @ts-ignore
import Dimensions from 'theme/Dimensions';

const style = StyleSheet.create({
  container: {
    width: Dimensions.screenWidth,
  },
  scrollerContent: {
    paddingRight: Dimensions.space3x,
  },
});

export default style;
