/**
 *
 * Styles for EntityDetailScreen DealsSection
 *
 */

import { StyleSheet } from 'react-native';

import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';

export const DOT_SIZE = 30;
export const ITEM_WIDTH = Dimensions.screenWidth - Dimensions.screenWidth / 11;
const style = StyleSheet.create({
  seeAllLabel: {
    fontSize: 12,
    color: Colors.accentDark,
    fontWeight: 'bold',
  },
  // eslint-disable-next-line react-native/no-color-literals
  itemWrapper: {
    width: Dimensions.screenWidth - Dimensions.screenWidth / 11,
    backgroundColor: '#D4ECFB',
    borderRadius: Dimensions.borderRadius3x,
    paddingHorizontal: Dimensions.space3x,
    paddingVertical: Dimensions.space5x,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: Dimensions.space2x,
  },
  itemContent: {},
  title: {
    fontSize: 22,
    color: Colors.textBlack,
    fontWeight: 'bold',
  },
  shortDescription: {
    fontSize: 16,
    color: Colors.textBlack,
    marginTop: Dimensions.space2x,
  },
  dealImage: {
    width: 52,
    height: 52,
  },
  ellipse: {
    position: 'absolute',
    right: '-10%',
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: Colors.white,
    opacity: 0.3,
  },
  innerEllipse: {
    position: 'absolute',
    right: '-20%',
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: Colors.white,
    opacity: 0.4,
  },
  pagination: {
    position: 'absolute',
    bottom: '-25%',
    flexDirection: 'row',
    height: DOT_SIZE,
    alignSelf: 'center',
  },
  paginationDot: {
    width: DOT_SIZE * 0.3,
    height: DOT_SIZE * 0.3,
    borderRadius: DOT_SIZE * 0.15,
    backgroundColor: Colors.primaryDark,
  },
  paginationDotContainer: {
    width: DOT_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paginationIndicator: {
    position: 'absolute',
    width: DOT_SIZE * 0.5,
    height: DOT_SIZE * 0.5,
    borderRadius: DOT_SIZE * 0.3,
    top: '25%',
    left: '8%',
    backgroundColor: Colors.accent,
    zIndex: 1000,
  },
  loaderStyle: {
    width: Dimensions.screenWidth - Dimensions.screenWidth / 11,
    height: 120,
    backgroundColor: Colors.skeleton,
    borderRadius: Dimensions.borderRadius3x,
  },
});

export default style;
