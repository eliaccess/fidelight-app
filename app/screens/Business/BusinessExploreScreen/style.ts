/**
 *
 * Styles for BusinessExploreScreen
 *
 */

import { StyleSheet } from 'react-native';

import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';
import elevation from 'theme/elevation';

const style = StyleSheet.create({
  contentContainerStyle: {
    width: Dimensions.screenWidth,
    height: 'auto',
    paddingTop: '45%',
    paddingBottom: Dimensions.bottomSpacing,
    backgroundColor: Colors.bg1Color,
  },
  addButtonWrapper: {
    position: 'absolute',
    bottom: '10%',
    right: '5%',
    backgroundColor: Colors.white,
    ...elevation(5, Colors.accentDark),
    padding: Dimensions.space2x,
    borderRadius: Dimensions.borderRadius10x,
  },
  addIcon: {
    fontSize: 28,
    color: Colors.accent,
  },
  OfferContainer: {
    height: 560,
  },
  modalHeading: {
    fontSize: 14,
    color: Colors.textBlack,
    fontWeight: '600',
  },
  daySelectorWrapper: {
    flexDirection: 'row',
    padding: Dimensions.space1x,
    marginLeft: Dimensions.horizontalSpace,
  },
  item: {
    width: 35,
    height: 45,
    borderRadius: Dimensions.borderRadius2x,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Dimensions.space1x + 3,
    ...elevation(1),
  },
  itemName: {
    fontSize: 12,
    color: Colors.textGrey,
    textAlign: 'center',
  },
  activeItem: {
    color: Colors.white,
    fontWeight: 'bold',
  },
  daySelectionLabel: {
    color: Colors.textGrey,
    fontWeight: '600',
    fontSize: 14,
    alignSelf: 'flex-start',
    marginVertical: Dimensions.space1x,
    marginLeft: Dimensions.space2x,
  },
  daySelectorBackdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: '100%',
    borderRadius: Dimensions.borderRadius2x,
  },

  rewardContainer: {
    height: 600,
  },
});

export default style;
