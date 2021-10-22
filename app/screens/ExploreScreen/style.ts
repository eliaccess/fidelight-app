/**
 *
 * Styles for ExploreScreen
 *
 */

import { StyleSheet } from 'react-native';

import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';

const style = StyleSheet.create({
  contentContainerStyle: {
    width: Dimensions.screenWidth,
    paddingTop: 150,
    paddingBottom: Dimensions.bottomSpacing,
  },
  categoriesSectionWrapper: {
    paddingVertical: Dimensions.space4x,
    // backgroundColor: Colors.bg1Color,
  },
  modalHeading: {
    fontSize: 14,
    color: Colors.textBlack,
    fontWeight: '600',
  },
  modalContent: {
    padding: Dimensions.space2x,
    width: 300,
  },
  terms: {
    marginVertical: Dimensions.space2x,
    fontSize: 12,
    color: Colors.textGrey,
    lineHeight: 17,
  },
  contactInfoContainer: {},
  contactInfoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: Dimensions.space2x,
  },
  contactInfoIcon: {
    fontSize: 18,
    color: Colors.accent,
  },
  contactInfoItemLabel: {
    fontSize: 12,
    color: Colors.textGrey,
    lineHeight: 17,
    marginLeft: Dimensions.space2x,
  },
});

export default style;
