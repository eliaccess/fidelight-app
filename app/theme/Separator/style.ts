/**
 *
 * Styles for Separator
 *
 */

import { StyleSheet } from 'react-native';
import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Dimensions.space4x,
  },
  line: {
    width: '40%',
    height: 1,
    backgroundColor: Colors.primaryDark,
    alignItems: 'center',
  },
  orLabel: {
    fontSize: 14,
    color: Colors.textGrey,
    marginHorizontal: Dimensions.space2x,
  },
});

export default style;
