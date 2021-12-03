import { StyleSheet } from 'react-native';

import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';

const style = StyleSheet.create({
  container: {
    paddingHorizontal: Dimensions.space4x,
  },
  formContainer: {
    justifyContent: 'flex-start',
    marginTop: Dimensions.space2x,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  signUpContainer: {
    position: 'absolute',
    bottom: Dimensions.bottomSpacing,
    alignSelf: 'center',
  },
  signUpPitch: {
    width: '100%',
    color: Colors.textGrey,
    fontWeight: '600',
    fontSize: 14,
    textAlign: 'center',
  },
  signUpLabel: {
    color: Colors.accentDark,
    padding: Dimensions.space1x,
    textDecorationLine: 'underline',
  },
});

export default style;
