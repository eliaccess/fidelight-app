/**
 *
 * Styles for HottestDeals
 *
 */

import { StyleSheet } from 'react-native';

import { useColors } from 'theme/Colors2';
import Dimensions from 'theme/Dimensions';

export const useGetStyles = () => {
  const Colors = useColors();

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
    listWrapper: {
      flexDirection: 'row',
    },
    item: {
      flexDirection: 'row',
      marginVertical: Dimensions.space2x,
      width: Dimensions.screenWidth / 2,
      marginRight: Dimensions.space8x,
    },
    image: {
      width: 60,
      height: 60,
      borderRadius: 30,
    },
    contentWrapper: {
      width: '80%',
      marginLeft: Dimensions.space2x,
      justifyContent: 'center',
    },
    title: {
      fontSize: 14,
      fontWeight: 'bold',
      color: Colors.textBlack,
      marginBottom: Dimensions.space2x,
    },
    shortDescription: {
      fontSize: 12,
      color: Colors.textGrey,
    },
    loaderContainer: {
      width: Dimensions.screenWidth,
      flexDirection: 'row',
    },
    logoLoader: {
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: Colors.skeleton,
    },
    titleLoader: {
      width: 80,
      height: 6,
      borderRadius: Dimensions.borderRadius,
      marginBottom: Dimensions.space2x,
      backgroundColor: Colors.skeleton,
    },
    shortDescriptionLoader: {
      marginTop: Dimensions.space1x,
      width: 100,
      height: 4,
      borderRadius: Dimensions.borderRadius,
      backgroundColor: Colors.skeleton,
    },
    loaderItem: {
      flexDirection: 'row',
      marginVertical: Dimensions.space2x,
      width: Dimensions.screenWidth / 2,
      marginRight: Dimensions.space2x,
    },
  });

  return style;
};
