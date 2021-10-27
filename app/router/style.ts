import { StyleSheet } from 'react-native';

import { useColors } from 'theme/Colors2';
import Dimensions from 'theme/Dimensions';
import elevation from 'theme/elevation';

export const useGetStyles = () => {
  const Colors = useColors();

  const style = StyleSheet.create({
    container: {
      zIndex: 100000000000,
      position: 'absolute',
      width: Dimensions.screenWidth,
      height: Dimensions.screenHeight,
      backgroundColor: Colors.itemBackgroundColor,
    },
    themeButtonContainer: {
      zIndex: 100000000000,
      position: 'absolute',
      bottom: Dimensions.bottomSpacing * 4,
      right: 10,
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: Colors.accent,
      alignItems: 'center',
      justifyContent: 'center',
      ...elevation(10, Colors.accentDark),
    },
    themeIcon: {
      fontSize: 22,
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
