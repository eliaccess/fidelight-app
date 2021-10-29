/**
 *
 * Styles for RestaurantsList
 *
 */

import { StyleSheet } from 'react-native';

import { useColors } from 'theme/Colors2';
import Dimensions from 'theme/Dimensions';
// import elevation from 'theme/elevation';

export const useGetStyles = () => {
  const Colors = useColors();

  const style = StyleSheet.create({
    item: {
      flexDirection: 'row',
      backgroundColor: Colors.itemBackgroundColor,
      paddingHorizontal: Dimensions.space1x,
      paddingVertical: Dimensions.space2x,
      borderRadius: Dimensions.borderRadius2x,
      marginBottom: Dimensions.space2x,
    },
    imageWrapper: {
      width: 80,
      height: 80,
      borderRadius: Dimensions.borderRadius3x,
    },
    logo: {
      width: '100%',
      height: '100%',
      borderRadius: Dimensions.borderRadius3x,
    },
    contentWrapper: {
      width: '75%',
      marginLeft: Dimensions.space2x,
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      color: Colors.textBlack,
      marginBottom: Dimensions.space2x,
    },
    shortDescription: {
      fontSize: 14,
      color: Colors.textGrey,
      textAlign: 'justify',
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
      backgroundColor: Colors.skeleton,
    },
    titleLoader: {
      width: 200,
      height: 6,
      borderRadius: Dimensions.borderRadius,
      backgroundColor: Colors.skeleton,
      marginTop: Dimensions.space1x,
    },
    shortDescriptionLoader: {
      marginTop: Dimensions.space2x,
      width: 180,
      height: 6,
      borderRadius: Dimensions.borderRadius,
      backgroundColor: Colors.skeleton,
    },
  });

  return style;
};
