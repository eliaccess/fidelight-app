/**
 *
 * Styles for EntityDetailScreen DealsSection
 *
 */

import { StyleSheet } from 'react-native';

import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';
import elevation from 'theme/elevation';
export const DOT_SIZE = 40;
export const ITEM_WIDTH = Dimensions.screenWidth - Dimensions.screenWidth / 6;
const style = StyleSheet.create({
  timingsContainer: {
    backgroundColor: Colors.white,
    borderRadius: Dimensions.borderRadius2x,
    flexDirection: 'row',
    padding: Dimensions.space2x,
    marginVertical: Dimensions.space2x,
    ...elevation(1),
  },
  timeItem: {
    flexDirection: 'row',
    marginHorizontal: Dimensions.space1x,
  },
  timeHeading: {
    fontSize: 16,
    color: Colors.accentDark,
    fontWeight: '600',
  },
  timeValue: {
    fontSize: 16,
    color: Colors.textBlack,
  },
  tagSeparator: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    marginHorizontal: Dimensions.space1x,
    backgroundColor: Colors.textBlack,
    alignSelf: 'center',
  },
  seeAllLabel: {
    fontSize: 12,
    color: Colors.accentDark,
    fontWeight: 'bold',
  },
  // eslint-disable-next-line react-native/no-color-literals
  itemWrapper: {
    width: Dimensions.screenWidth - Dimensions.screenWidth / 6,
    backgroundColor: '#D4ECFB',
    borderRadius: Dimensions.borderRadius3x,
    paddingHorizontal: Dimensions.space3x,
    paddingVertical: Dimensions.space5x,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: Dimensions.space2x,
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
    bottom: '-35%',
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
});

export default style;
