import { StyleSheet, Platform } from 'react-native';

import { useColors } from 'theme/Colors2';
import Dimensions from 'theme/Dimensions/';
import elevation from 'theme/elevation';

export const useGetStyles = () => {
  const Colors = useColors();
  const style = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.white,
      width: Dimensions.screenWidth,
      height: Dimensions.screenHeight,
      top: 0,
      left: 0,
      position: 'absolute',
    },
    tabBarContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      borderTopWidth: 0.5,
      borderTopColor: Colors.white,
      ...Platform.select({
        ios: { paddingBottom: Dimensions.bottomSpacing },
        android: { paddingBottom: Dimensions.bottomSpacing },
      }),
      backgroundColor: Colors.white,
      ...elevation(2, Colors.black),
    },
    tabBarButton: {
      flex: 0.2,
      alignItems: 'center',
      paddingTop: Dimensions.space2x,
      borderTopColor: Colors.white,
      borderTopWidth: 1,
    },
    tabBarButtonIcon: {
      fontSize: 22,
      color: Colors.textGrey,
      marginBottom: Dimensions.space1x,
    },
    activeTab: {
      color: Colors.accent,
    },
    tabBarMajorButtonView: {
      flex: 0,
      width: 62,
      height: 62,
      borderRadius: 31,
      backgroundColor: Colors.accent,
      borderTopWidth: 0,
      marginTop: -30,
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: Dimensions.space2x,
      ...Platform.select({
        ios: { ...elevation(4, Colors.accentDark) },
        android: { ...elevation(3) },
      }),
    },
    tabBarMajorButtonIcon: {
      fontSize: 30,
      color: Colors.white,
    },
    backdrop: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      width: '100%',
      borderRadius: 50,
    },
  });
  return style;
};

export const initialLayout = {
  height: 0,
  width: Dimensions.screenWidth,
};
