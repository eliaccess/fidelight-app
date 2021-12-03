/**
 *
 * Styles for AccountSelection Screen
 *
 */

import { StyleSheet } from 'react-native';

import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    alignSelf: 'center',
    marginTop: '47%',
    width: 110,
    height: 145,
  },
  content: {
    position: 'absolute',
    bottom: Dimensions.bottomSpacing,
    alignSelf: 'center',
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
