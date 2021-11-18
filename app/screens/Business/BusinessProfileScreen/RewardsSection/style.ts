/**
 *
 * Styles for EntityDetailScreen Rewards Section
 *
 */

import { StyleSheet } from 'react-native';

import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';
// import elevation from 'theme/elevation';

const style = StyleSheet.create({
  rewardSectionContainer: {
    backgroundColor: Colors.white,
    marginTop: Dimensions.space2x,
  },
  itemWrapper: {
    flexDirection: 'row',
    paddingBottom: Dimensions.space4x,
    alignItems: 'center',
    marginBottom: Dimensions.space3x,
    borderBottomWidth: 0.5,
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
  shortDescription: {
    fontSize: 14,
    color: Colors.textGrey,
    marginTop: Dimensions.space1x,
  },
  progressBarWrapper: {
    marginTop: Dimensions.space3x,
    width: Dimensions.screenWidth - 120,
    height: 7,
    borderRadius: Dimensions.borderRadius2x,
    backgroundColor: Colors.accentLight,
    flexDirection: 'row',
  },
  activeProgress: {
    height: 7,
    borderRadius: Dimensions.borderRadius2x,
    backgroundColor: Colors.accentDark,
  },
  progressValueWrapper: {
    position: 'absolute',
    top: -10,
    padding: Dimensions.space1x,
    paddingHorizontal: Dimensions.space2x,
    borderRadius: Dimensions.borderRadius10x,
    backgroundColor: Colors.accentDark,
  },
  progressValue: {
    fontSize: 14,
    color: Colors.white,
  },
  loaderStyle: {
    width: Dimensions.screenWidth - Dimensions.screenWidth / 11,
    height: 80,
    backgroundColor: Colors.skeleton,
    borderRadius: Dimensions.borderRadius3x,
    marginBottom: Dimensions.space4x,
  },
});

export default style;
