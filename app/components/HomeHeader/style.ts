/**
 *
 * Styles for HomeHeader
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
      width: Dimensions.screenWidth,
      height: 150,
      alignItems: 'center',
      zIndex: 1000,
      borderRadius: Dimensions.borderRadius10x,
      paddingTop: Dimensions.statusBarHeight,
    },
    backdrop: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      width: '100%',
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
    avatar: {
      width: 45,
      height: 45,
      backgroundColor: Colors.white,
      padding: Dimensions.space1x - 3,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 25,
      ...elevation(2),
    },
    avatarIcon: {
      fontSize: 22,
      color: Colors.accentDark,
    },
    searchBarWrapper: {
      position: 'absolute',
      bottom: -20,
      flexDirection: 'row',
      borderRadius: Dimensions.borderRadius10x,
      width: '92%',
      alignSelf: 'center',
      alignItems: 'center',
      paddingVertical: Dimensions.space2x,
      paddingHorizontal: Dimensions.space3x,
      backgroundColor: Colors.white,
      ...elevation(2),
    },
    searchIcon: {
      fontSize: 20,
      color: Colors.textGrey,
    },
    searchPlaceHolder: {
      marginLeft: Dimensions.space2x,
      fontSize: 16,
      color: Colors.textGrey,
    },
    animation: {
      width: 300,
      height: 300,
    },
    cityNameWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    cityName: {
      fontSize: 16,
      color: Colors.white,
      marginRight: Dimensions.space1x,
      fontWeight: 'bold',
    },
    updateCityIcon: {
      fontSize: 22,
      color: Colors.white,
      ...Platform.select({
        android: {
          marginTop: Dimensions.space1x,
        },
      }),
    },
  });

  return style;
};
