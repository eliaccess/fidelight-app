/**
 *
 * Styles for FullScreenLoader Theme
 *
 */

import { StyleSheet } from 'react-native';
import Dimensions from 'theme/Dimensions';
import Colors from 'theme/Colors';

const style = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: Colors.translucentWhite,
    alignItems: 'center',
    justifyContent: 'center',
    padding: Dimensions.headerHeight,
    zIndex: 100000000000,
    elevation: 100,
  },
});

export default style;
