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
  container: {
    backgroundColor: Colors.bg1Color,
  },
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
  sectionWrapper: {
    backgroundColor: Colors.white,
    height: 220,
  },
});

export default style;
