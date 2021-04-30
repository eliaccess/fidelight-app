/**
 *
 * Styles for ExploreScreen
 *
 */

import { StyleSheet } from 'react-native';

import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';

const style = StyleSheet.create({
  contentContainerStyle: {
    width: Dimensions.screenWidth,
    paddingBottom: Dimensions.bottomSpacing,
  },
  categoriesSectionWrapper: {
    paddingVertical: Dimensions.space4x,
    backgroundColor: Colors.bg1Color,
  },
});

export default style;
