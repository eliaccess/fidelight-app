import { Platform, StyleSheet } from 'react-native';

// import Colors from 'theme/Colors';
import { useColors } from 'theme/Colors2';
import Dimensions from 'theme/Dimensions';

export const useGetStyles = () => {
  const Colors = useColors();

  const style = StyleSheet.create({
    section: {
      marginVertical: Dimensions.space3x,
      marginHorizontal: Dimensions.space2x,
    },
    sectionHeader: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: Dimensions.space2x,
    },
    sectionHeading: {
      fontSize: 16,
      color: Colors.textBlack,
      fontWeight: '600',
    },
    headingLoader: {
      borderRadius: Dimensions.borderRadius,
      borderColor: Colors.textGrey,
      backgroundColor: Colors.skeleton,
      ...Platform.select({
        ios: {
          height: 21,
          width: '50%',
        },
        android: {
          height: 25,
          width: '60%',
        },
      }),
    },
  });

  return style;
};
