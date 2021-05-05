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
  content: {},
  itemTitle: {
    fontSize: 14,
    color: Colors.textBlack,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 12,
    color: Colors.textGrey,
    marginTop: Dimensions.space2x,
  },
});

export default style;
