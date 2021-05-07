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
  rewardSectionContainer: {
    backgroundColor: Colors.white,
    marginTop: Dimensions.space1x,
  },
  itemWrapper: {
    flexDirection: 'row',
    paddingVertical: Dimensions.space2x,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.primaryDark,
  },
  logoWrapper: {
    padding: Dimensions.space2x,
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: Colors.primaryDark,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Dimensions.space2x,
  },
  logo: {
    width: 35,
    height: 35,
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
    marginTop: Dimensions.space1x,
  },
  points: {
    fontSize: 16,
    color: Colors.accent,
    fontWeight: '600',
    position: 'absolute',
    right: 0,
  },
});

export default style;
