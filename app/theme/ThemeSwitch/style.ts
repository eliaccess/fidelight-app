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
      bottom: Dimensions.bottomSpacing * 4,
      right: 10,
      width: 60,
      height: 60,
      borderRadius: 40,
      backgroundColor: Colors.white,
      alignItems: 'center',
      justifyContent: 'center',
      ...elevation(10, Colors.accentDark),
    },
    innerContainer: {
      width: 52,
      height: 52,
      borderRadius: 26,
      backgroundColor: Colors.white,
      alignItems: 'center',
      justifyContent: 'center',
    },
    themeIcon: {
      fontSize: 28,
      color: Colors.themeIconColor,
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
