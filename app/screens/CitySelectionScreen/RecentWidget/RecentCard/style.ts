import { StyleSheet } from 'react-native';

import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';

const style = StyleSheet.create({
  container: {
    marginRight: Dimensions.space2x,
  },

  tagName: {
    alignSelf: 'center',
    color: Colors.textBlack,
    fontSize: 16,
  },
  tagStyle: {
    padding: Dimensions.space1x,
    paddingHorizontal: Dimensions.space2x,
    backgroundColor: Colors.primary,
    borderRadius: Dimensions.borderRadius2x,
    flexDirection: 'row',
  },
});

export default style;
