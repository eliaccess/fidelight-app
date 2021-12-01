import { StyleSheet } from 'react-native';

import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';

const style = StyleSheet.create({
  container: {
    paddingHorizontal: Dimensions.space2x,
    paddingTop: Dimensions.space1x,
    marginTop: Dimensions.space4x,
  },
  heading: {
    color: Colors.textBlack,
    fontSize: 16,
    fontWeight: '700',
  },
  scrollView: {},
  scrollViewContent: {
    paddingTop: Dimensions.space2x,
    paddingBottom: Dimensions.space1x,
    marginBottom: Dimensions.space2x,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});

export default style;
