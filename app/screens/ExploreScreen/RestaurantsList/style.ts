/**
 *
 * Styles for RestaurantsList
 *
 */

import { StyleSheet } from 'react-native';

import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';
import elevation from 'theme/elevation';

const style = StyleSheet.create({
  item: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    paddingHorizontal: Dimensions.space1x,
    paddingVertical: Dimensions.space2x,
    borderRadius: Dimensions.borderRadius2x,
    marginBottom: Dimensions.space2x,
    ...elevation(1),
  },
  imageWrapper: {
    width: 80,
    height: 80,
    borderRadius: Dimensions.borderRadius3x,
  },
  coverImage: {
    width: '100%',
    height: '100%',
    borderRadius: Dimensions.borderRadius3x,
  },
  logoWrapper: {
    position: 'absolute',
    bottom: '10%',
    right: '5%',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.white,
    padding: Dimensions.space1x,
    alignItems: 'center',
    justifyContent: 'center',
    ...elevation(2),
  },
  logo: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  contentWrapper: {
    marginLeft: Dimensions.space2x,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.textBlack,
    marginBottom: Dimensions.space1x,
  },
  shortDescription: {
    fontSize: 14,
    color: Colors.textGrey,
  },
  tagsWrapper: {
    flexDirection: 'row',
    marginTop: Dimensions.space2x,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingIcon: {
    fontSize: 16,
    color: Colors.textGrey,
    marginRight: Dimensions.space1x,
  },
  ratingValue: {
    fontSize: 14,
    color: Colors.textGrey,
  },
  tagSeparator: {
    fontSize: 44,
    color: Colors.textGrey,
    opacity: 0.7,
    lineHeight: 22,
    marginHorizontal: Dimensions.space1x,
  },
  distance: {
    fontSize: 14,
    color: Colors.textGrey,
  },
  logoLoader: {
    width: 80,
    height: 80,
    borderRadius: Dimensions.borderRadius3x,
    backgroundColor: Colors.primaryDark,
  },
  titleLoader: {
    width: 200,
    height: 6,
    borderRadius: Dimensions.borderRadius,
    backgroundColor: Colors.primaryDark,
    marginTop: Dimensions.space1x,
  },
  shortDescriptionLoader: {
    marginTop: Dimensions.space2x,
    width: 180,
    height: 6,
    borderRadius: Dimensions.borderRadius,
    backgroundColor: Colors.primaryDark,
  },
});

export default style;
