/**
 *
 * Styles for EntityDetailScreen
 *
 */

import { StyleSheet } from 'react-native';

import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';

export const DOT_SIZE = 40;
export const ITEM_WIDTH = Dimensions.screenWidth - Dimensions.screenWidth / 6;

const style = StyleSheet.create({
  timingsContainer: {
    backgroundColor: Colors.white,
    padding: Dimensions.space1x,
    marginVertical: Dimensions.space2x,
  },
  timeItem: {
    flexDirection: 'row',
    marginHorizontal: Dimensions.space1x,
    marginVertical: Dimensions.space1x,
  },
  dayName: {
    fontSize: 14,
    color: Colors.textBlack,
    fontWeight: 'bold',
    alignSelf: 'center',
    width: 100,
  },
  dayTimingsWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayTimingItem: {
    flexDirection: 'row',
    marginVertical: Dimensions.space1x / 2,
  },
  timingItemLabel: {
    fontSize: 14,
    color: Colors.textBlack,
  },
  timingIconWrapper: {
    position: 'absolute',
    right: '2%',
    top: 20,
  },
  timingIcon: {
    fontSize: 22,
    color: Colors.textGrey,
  },
  activeDay: {
    color: Colors.accentDark,
  },
  closedLabel: {
    fontSize: 14,
    color: Colors.favorite,
    alignSelf: 'center',
  },
});

export default style;
