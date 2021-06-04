/**
 *
 * Styles for HottestDeals
 *
 */

import { StyleSheet } from 'react-native';

import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  seeAllLabel: {
    fontSize: 12,
    color: Colors.accentDark,
    fontWeight: 'bold',
  },
  item: {
    flexDirection: 'row',
    marginVertical: Dimensions.space2x,
    marginRight: Dimensions.space2x,
    overflow: 'hidden',
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
  loaderContainer: {
    width: Dimensions.screenWidth,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  logoLoader: {
    width: 43,
    height: 43,
    borderRadius: 21,
    backgroundColor: Colors.primaryDark,
  },
  titleLoader: {
    width: 80,
    height: 6,
    borderRadius: Dimensions.borderRadius,
    backgroundColor: Colors.primaryDark,
  },
  shortDescriptionLoader: {
    marginTop: Dimensions.space1x,
    width: 100,
    height: 4,
    borderRadius: Dimensions.borderRadius,
    backgroundColor: Colors.primaryDark,
  },
});

export default style;
