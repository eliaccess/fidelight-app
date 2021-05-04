import { Platform, StyleSheet } from 'react-native';

import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';

const style = StyleSheet.create({
  section: {
    marginTop: Dimensions.space4x,
    marginHorizontal: Dimensions.space3x,
  },
  sectionHeader: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: Dimensions.space2x,
    zIndex: 10000,
  },
  sectionHeading: {
    fontSize: 16,
    color: Colors.textBlack,
    fontWeight: '600',
  },
  headingLoader: {
    width: '50%',
    height: 24,
    borderRadius: Dimensions.borderRadius,
    borderColor: Colors.textGrey,
    backgroundColor: Colors.primaryDark,
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

export default style;
