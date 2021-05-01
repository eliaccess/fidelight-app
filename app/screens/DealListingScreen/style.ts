/**
 *
 * Styles for DealListingScreen
 *
 */

import { StyleSheet } from 'react-native';

import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';

const style = StyleSheet.create({
  container: {
    paddingHorizontal: Dimensions.space2x,
  },
  item: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    paddingHorizontal: Dimensions.space1x,
    paddingVertical: Dimensions.space3x,
    borderRadius: Dimensions.borderRadius2x,
    marginBottom: Dimensions.space2x,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.primaryDark,
  },
  image: {
    width: 43,
    height: 43,
    borderRadius: 21,
  },
  contentWrapper: {
    marginLeft: Dimensions.space2x,
    justifyContent: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.textBlack,
    marginBottom: Dimensions.space1x,
  },
  shortDescription: {
    fontSize: 12,
    color: Colors.textGrey,
  },
});

export default style;
