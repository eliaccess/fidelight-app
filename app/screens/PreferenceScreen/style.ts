/**
 *
 * Styles for PreferenceScreen
 *
 */

import { StyleSheet } from 'react-native';

import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';

const style = StyleSheet.create({
  container: {
    padding: Dimensions.space2x,
  },
  itemWrapper: {
    padding: Dimensions.space2x,
    borderRadius: Dimensions.borderRadius2x,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.6,
    marginBottom: Dimensions.space2x,
    borderBottomColor: Colors.primaryDark,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  socialIconImage: {
    width: 18,
    height: 18,
    marginRight: Dimensions.space2x,
  },
  buttonWrapper: {
    padding: Dimensions.space2x,
  },
  buttonLabel: {
    fontSize: 14,
    color: Colors.accent,
  },
  passwordButtonWrapper: {
    paddingVertical: Dimensions.space3x - 3,
    margin: Dimensions.space3x,
    borderRadius: Dimensions.space5x,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    flexDirection: 'row',
    borderColor: Colors.separator,
  },
  passwordIcon: {
    fontSize: 16,
    color: Colors.textBlack,
    marginRight: Dimensions.space3x,
  },
  chevronIcon: {
    fontSize: 25,
    color: Colors.textGrey,
  },
});

export default style;
