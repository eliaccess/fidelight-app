/**
 *
 * Styles for Modal Theme
 *
 */

import { StyleSheet } from 'react-native';

import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';
// import elevation from 'theme/elevation';

const style = StyleSheet.create({
  modal: {
    paddingVertical: Dimensions.headerHeight,
    width: Dimensions.screenWidth,
    height: Dimensions.screenHeight,
    backgroundColor: Colors.translucentBlackMinor,
    padding: Dimensions.space3x,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    width: '100%',
    backgroundColor: Colors.white,
    paddingHorizontal: Dimensions.space3x,
    paddingTop: Dimensions.space4x,
    borderRadius: Dimensions.borderRadius3x,
  },
  closeButtonHolder: {
    width: Dimensions.screenWidth / 3,
    alignSelf: 'center',
    marginBottom: Dimensions.space1x,
  },
  closeIcon: {
    fontSize: 26,
    color: Colors.white,
  },
});

export default style;
