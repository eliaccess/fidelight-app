/**
 *
 * Styles for AccountSelection Screen
 *
 */

import { StyleSheet } from 'react-native';

import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';
// import elevation from 'theme/elevation';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    width: Dimensions.screenWidth,
    height: Dimensions.screenHeight - Dimensions.screenWidth / 2,
  },
  content: {
    marginTop: -Dimensions.space8x,
  },
  chooseOptionHeading: {
    fontSize: 22,
    color: Colors.textBlack,
    fontWeight: '600',
    alignSelf: 'center',
    marginBottom: Dimensions.space2x,
  },
  buttonHolder: {
    width: Dimensions.screenWidth - 40,
    alignSelf: 'center',
    marginBottom: Dimensions.space1x,
  },
});

export default style;
