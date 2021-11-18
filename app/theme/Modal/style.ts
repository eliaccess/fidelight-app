/**
 *
 * Styles for Modal Theme
 *
 */

import { StyleSheet } from 'react-native';

import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';
import elevation from 'theme/elevation';

const style = StyleSheet.create({
  modal: {
    paddingVertical: Dimensions.headerHeight,
    flexDirection: 'row',
    width: Dimensions.screenWidth,
    height: '100%',
    backgroundColor: Colors.translucentBlackMinor,
    padding: Dimensions.space3x,
  },
  modalContent: {
    width: '100%',
    backgroundColor: Colors.white,
    paddingHorizontal: Dimensions.space3x,
    paddingTop: Dimensions.space4x,
    borderRadius: Dimensions.borderRadius3x,
  },
  container: {
    position: 'absolute',
    top: 0,
    width: Dimensions.screenWidth,
    height: '100%',
    backgroundColor: Colors.translucentBlackMinor,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Dimensions.borderRadius2x,
    zIndex: 1000000,
  },
  content: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    borderRadius: Dimensions.borderRadius3x,
    ...elevation(5),
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
