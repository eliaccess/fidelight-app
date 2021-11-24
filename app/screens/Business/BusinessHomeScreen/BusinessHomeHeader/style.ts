/**
 *
 * Styles for BusinessHomeHeader
 *
 */

import { Platform, StyleSheet } from 'react-native';

import { useColors } from 'theme/Colors2';
import Dimensions from 'theme/Dimensions';
import elevation from 'theme/elevation';

export const useGetStyles = () => {
  const Colors = useColors();

  const style = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      width: Dimensions.screenWidth,
      alignItems: 'center',
      zIndex: 10,
      borderRadius: Dimensions.borderRadius10x,
      paddingTop: Dimensions.statusBarHeight,
    },
    backdrop: {
      position: 'absolute',
      height: 150,
      width: '100%',
    },
    lessHeight: {
      height: 120,
    },
    iconsWrapper: {
      width: Dimensions.screenWidth,
      flexDirection: 'row',
      padding: Dimensions.space2x,
      justifyContent: 'space-between',
    },
    menuIconWrapper: {
      backgroundColor: Colors.white,
      padding: Dimensions.space2x,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 30,
      ...elevation(2),
    },
    menuIcon: {
      fontSize: 22,
      color: Colors.accentDark,
    },

    animation: {
      width: 300,
      height: 300,
    },
    companyNameWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    companyName: {
      fontSize: 16,
      color: Colors.white,
      marginRight: Dimensions.space1x,
      fontWeight: 'bold',
    },
    companyNameIcon: {
      fontSize: 22,
      color: Colors.white,
      ...Platform.select({
        android: {
          marginTop: Dimensions.space1x,
        },
      }),
    },

    tabContainer: {
      flexDirection: 'row',
      padding: Dimensions.space1x,
      backgroundColor: Colors.white,
      borderRadius: Dimensions.borderRadius10x,
      alignItems: 'center',
      zIndex: 1000000000,
      ...elevation(1),
    },
    tab: {
      padding: Dimensions.space2x,
      paddingHorizontal: Dimensions.space3x,
      marginHorizontal: Dimensions.space2x,
    },
    tabLabel: {
      fontSize: 16,
      color: Colors.textGrey,
      fontWeight: '600',
    },
    activeTab: {
      backgroundColor: Colors.bg2Color,
      borderRadius: Dimensions.borderRadius10x,
      color: Colors.textBlack,
    },
  });

  return style;
};
