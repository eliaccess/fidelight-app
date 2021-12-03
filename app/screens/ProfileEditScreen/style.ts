import { StyleSheet } from 'react-native';

import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';

const style = StyleSheet.create({
  container: {
    marginTop: -Dimensions.space2x,
    width: Dimensions.screenWidth,
    height: Dimensions.screenHeight,
    backgroundColor: Colors.bg1Color,
  },
  formContainer: {
    justifyContent: 'flex-start',
    marginTop: Dimensions.space2x,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  errorMessage: {
    backgroundColor: Colors.errorBackground,
    color: Colors.errorForeground,
    padding: Dimensions.space2x,
    paddingVertical: Dimensions.space1x,
    marginHorizontal: Dimensions.space4x,
    marginTop: Dimensions.space4x,
    borderRadius: Dimensions.borderRadius,
    overflow: 'hidden',
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default style;
