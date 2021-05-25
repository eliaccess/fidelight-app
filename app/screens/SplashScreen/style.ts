/**
 *
 * Styles for SplashScreen Screen
 *
 */

import { StyleSheet } from 'react-native';

// import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';

const style = StyleSheet.create({
  flexContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  logo: {
    width: Dimensions.screenWidth,
    height: Dimensions.screenHeight,
  },
  logoContainer: {},
});

export default style;
