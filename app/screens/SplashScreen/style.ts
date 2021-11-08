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
    paddingTop: -120,
    width: '100%',
    height: '100%',
  },
  logo: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  logoContainer: {
    width: '100%',
    height: '100%',
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: '100%',
  },
});

export default style;
