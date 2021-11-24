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
    margin: Dimensions.space1x,
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
    marginTop: Dimensions.space1x,
  },
  pointsWrapper: {
    backgroundColor: Colors.bg1Color,
    position: 'absolute',
    right: 0,
    padding: Dimensions.space2x - 3,
    borderRadius: Dimensions.borderRadius10x,
  },
  points: {
    fontSize: 10,
    color: Colors.accent,
    fontWeight: 'bold',
  },
  logoLoader: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.primaryDark,
  },
  titleLoader: {
    width: 100,
    height: 8,
    borderRadius: Dimensions.borderRadius,
    backgroundColor: Colors.primaryDark,
  },
  dateLoader: {
    marginTop: Dimensions.space1x,
    width: 150,
    height: 6,
    borderRadius: Dimensions.borderRadius,
    backgroundColor: Colors.primaryDark,
  },
});

export default style;
