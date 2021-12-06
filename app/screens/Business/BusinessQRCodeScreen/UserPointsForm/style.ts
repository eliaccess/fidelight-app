/**
 *
 * Styles for BusinessQRCodeScreen
 *
 */

import { StyleSheet } from 'react-native';

import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';

const style = StyleSheet.create({
  container: {
    height: 160,
    alignItems: 'center',
  },
  input: {
    width: '40%',
    borderRadius: 10,
    padding: Dimensions.space2x,
    borderWidth: 0.5,
    borderColor: Colors.primaryDark,
    marginTop: Dimensions.space2x,
  },
  heading: {
    fontSize: 14,
    color: Colors.textBlack,
    fontWeight: 'bold',
  },
  submitButtonHolder: {
    width: 200,
    alignSelf: 'center',
    marginTop: Dimensions.space1x,
  },
});

export default style;
