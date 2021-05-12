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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    borderRadius: Dimensions.borderRadius3x,
    ...elevation(5),
  },
  closeButtonHolder: {
    padding: Dimensions.space2x,
    alignSelf: 'flex-end',
    marginRight: '10%',
  },
  closeIcon: {
    fontSize: 26,
    color: Colors.white,
  },
});

export default style;
