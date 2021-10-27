/**
 *
 * Styles for ExploreScreen
 *
 */

import { StyleSheet } from 'react-native';

import { useColors } from 'theme/Colors2';

import Dimensions from 'theme/Dimensions';

export const useGetStyles = () => {
  const Colors = useColors();

  const style = StyleSheet.create({
    contentContainerStyle: {
      width: Dimensions.screenWidth,
      paddingTop: 150,
      paddingBottom: Dimensions.bottomSpacing,
      backgroundColor: Colors.white,
    },
    categoriesSectionWrapper: {
      paddingVertical: Dimensions.space4x,
    },
    modalHeading: {
      fontSize: 14,
      color: Colors.textBlack,
      fontWeight: '600',
    },
    modalContent: {
      padding: Dimensions.space2x,
      width: 300,
    },
    terms: {
      marginVertical: Dimensions.space2x,
      fontSize: 12,
      color: Colors.textGrey,
      lineHeight: 17,
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
      fontSize: 12,
      color: Colors.textGrey,
      lineHeight: 17,
      marginLeft: Dimensions.space2x,
    },
  });

  return style;
};
