/**
 *
 * Styles for EntityDetailScreen
 *
 */

import { Platform, StyleSheet } from 'react-native';

import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';

export const DOT_SIZE = 40;
export const ITEM_WIDTH = Dimensions.screenWidth - Dimensions.screenWidth / 6;
const style = StyleSheet.create({
  container: {
    backgroundColor: Colors.bg1Color,
  },

  sectionWrapper: {
    backgroundColor: Colors.white,
    ...Platform.select({
      ios: { height: 200 },
      android: { height: 220 },
    }),
  },
  loaderHeader: {
    width: Dimensions.screenWidth,
    height: 230,
    backgroundColor: Colors.skeleton,
  },
  entityNameLoader: {
    marginTop: Dimensions.space6x,
    marginLeft: Dimensions.horizontalSpace,
    borderRadius: Dimensions.borderRadius,
    borderColor: Colors.textGrey,
    backgroundColor: Colors.skeleton,
    height: 14,
    width: '50%',
  },
  entityDescriptionLoader: {
    marginTop: Dimensions.space3x,
    marginLeft: Dimensions.horizontalSpace,
    borderRadius: Dimensions.borderRadius2x,
    borderColor: Colors.textGrey,
    backgroundColor: Colors.skeleton,
    height: 8,
    width: '60%',
  },

  loaderContentWrapper: {
    marginTop: Dimensions.space10x,
  },
  labelLoader: {
    marginVertical: Dimensions.space2x,
    marginLeft: Dimensions.horizontalSpace,
    borderRadius: Dimensions.borderRadius2x,
    borderColor: Colors.textGrey,
    backgroundColor: Colors.skeleton,
    height: 8,
    width: '80%',
  },
});

export default style;