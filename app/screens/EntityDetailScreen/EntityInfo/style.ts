/**
 *
 * Styles for EntityDetailScreen EntityInfo
 *
 */

import { StyleSheet } from 'react-native';

import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';

const style = StyleSheet.create({
  infoContainer: {
    paddingTop: Dimensions.space6x,
    padding: Dimensions.space2x,
    backgroundColor: Colors.white,
  },
  entityInfoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: Dimensions.space2x,
  },

  nameDescriptionWrapper: {
    width: '85%',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.textBlack,
  },
  description: {
    fontSize: 14,
    color: Colors.textGrey,
    marginRight: Dimensions.space2x,
    marginTop: Dimensions.space2x,
  },
  tagsWrapper: {
    flexDirection: 'row',
    marginTop: Dimensions.space3x - 3,
    alignItems: 'center',
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
    fontSize: 16,
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
    fontSize: 16,
    color: Colors.textGrey,
  },
  reviews: {
    fontSize: 16,
    color: Colors.accent,
  },
  separationLine: {
    width: Dimensions.screenWidth - 30,
    backgroundColor: Colors.textGrey,
    height: 0.5,
    marginVertical: Dimensions.space2x,
  },
  contactInfoContainer: {},
  contactInfoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: Dimensions.space2x,
  },
  contactInfoIcon: {
    fontSize: 18,
    color: Colors.accent,
  },
  contactInfoItemLabel: {
    fontSize: 14,
    color: Colors.textGrey,
    marginLeft: Dimensions.space2x,
  },
});

export default style;
