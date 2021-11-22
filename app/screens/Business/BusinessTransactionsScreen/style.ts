/**
 *
 * Styles for BusinessTransactionsScreen
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
  header: {
    paddingTop: Dimensions.space8x,
    width: Dimensions.screenWidth,
    height: 120,
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
    paddingTop: Dimensions.space1x,
    height: 220,
  },
});

export default style;
