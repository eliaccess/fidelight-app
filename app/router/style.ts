import { StyleSheet } from 'react-native';

import { useColors } from 'theme/Colors2';
import Dimensions from 'theme/Dimensions';

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
  });

  return style;
};
