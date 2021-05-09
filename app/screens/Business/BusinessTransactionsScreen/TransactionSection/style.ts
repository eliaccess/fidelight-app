/**
 *
 * Styles for ProfileScreen TransactionSection
 *
 */

import { StyleSheet } from 'react-native';

import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';
// import elevation from 'theme/elevation';

const style = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
  itemWrapper: {
    flexDirection: 'row',
    paddingVertical: Dimensions.space3x,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.primaryDark,
  },
  contentWrapper: {},
  title: {
    fontSize: 18,
    color: Colors.textBlack,
    fontWeight: '600',
  },
  date: {
    fontSize: 14,
    color: Colors.textGrey,
    marginTop: Dimensions.space2x,
  },
  pointsWrapper: {
    position: 'absolute',
    right: 0,
    padding: Dimensions.space2x,
    backgroundColor: Colors.bg2Color,
    borderRadius: Dimensions.borderRadius10x,
  },
  points: {
    fontSize: 14,
    color: Colors.accent,
    fontWeight: 'bold',
  },
});

export default style;
