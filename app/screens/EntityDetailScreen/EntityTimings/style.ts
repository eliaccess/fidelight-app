/**
 *
 * Styles for EntityDetailScreen
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
    padding: Dimensions.space1x,
    marginVertical: Dimensions.space2x,
    ...elevation(1),
  },
  timeItem: {
    flexDirection: 'row',
    marginHorizontal: Dimensions.space1x,
    marginVertical: Dimensions.space1x,
  },
  dayName: {
    fontSize: 14,
    color: Colors.textBlack,
    fontWeight: '600',
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
    color: Colors.black,
  },
  activeDay: {
    color: Colors.accentDark,
  },
});

export default style;
