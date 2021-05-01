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
  container: {
    paddingTop: Dimensions.space6x,
    padding: Dimensions.space2x,
  },
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
  favoriteIconWrapper: {
    position: 'absolute',
    top: '10%',
    right: '2%',
    backgroundColor: Colors.white,
    padding: Dimensions.space1x,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.accentDark,
    borderWidth: 0.5,
    ...elevation(2),
  },
  favoriteIcon: {
    fontSize: 22,
    color: Colors.accent,
  },
});

export default style;
