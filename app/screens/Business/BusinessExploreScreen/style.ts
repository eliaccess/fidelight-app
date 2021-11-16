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
    paddingTop: Dimensions.space8x,
    paddingBottom: Dimensions.bottomSpacing,
    backgroundColor: Colors.bg1Color,
  },
  container: {
    width: Dimensions.screenWidth,
    height: 180,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    borderRadius: Dimensions.borderRadius10x,
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: '100%',
  },
  iconsWrapper: {
    width: Dimensions.screenWidth,
    flexDirection: 'row',
    padding: Dimensions.space2x,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menuIconWrapper: {
    backgroundColor: Colors.white,
    padding: Dimensions.space2x,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    ...elevation(2),
  },
  menuIcon: {
    fontSize: 22,
    color: Colors.accentDark,
  },
  entityName: {
    fontSize: 20,
    color: Colors.white,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  tabContainer: {
    position: 'absolute',
    bottom: '-10%',
    flexDirection: 'row',
    padding: Dimensions.space1x,
    backgroundColor: Colors.white,
    borderRadius: Dimensions.borderRadius10x,
    alignItems: 'center',
    ...elevation(1),
  },
  tab: {
    padding: Dimensions.space2x,
    paddingHorizontal: Dimensions.space3x,
    marginHorizontal: Dimensions.space2x,
  },
  tabLabel: {
    fontSize: 16,
    color: Colors.textGrey,
    fontWeight: '600',
  },
  activeTab: {
    backgroundColor: Colors.bg2Color,
    borderRadius: Dimensions.borderRadius10x,
    color: Colors.textBlack,
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
  modalHeading: {
    fontSize: 14,
    color: Colors.textBlack,
    fontWeight: '600',
  },
  modalContent: {
    padding: Dimensions.space2x,
    paddingTop: Dimensions.space3x,
    width: Dimensions.screenWidth - Dimensions.screenWidth / 6,
    height: 600,
  },
  rewardModalContent: {
    padding: Dimensions.space2x,
    paddingTop: Dimensions.space3x,
    width: Dimensions.screenWidth - Dimensions.screenWidth / 6,
    height: 610,
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
});

export default style;
