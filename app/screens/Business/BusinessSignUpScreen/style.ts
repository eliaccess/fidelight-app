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
  signInContainer: {
    marginTop: Dimensions.space4x,
    alignSelf: 'center',
    alignItems: 'center',
  },
  signInPitch: {
    width: '100%',
    color: Colors.textGrey,
    fontWeight: '600',
    fontSize: 14,
    textAlign: 'center',
  },
  signInLabel: {
    color: Colors.accentDark,
    padding: Dimensions.space1x,
    textDecorationLine: 'underline',
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
  termsLable: {
    fontSize: 16,
    color: Colors.textGrey,
    textDecorationLine: 'underline',
    alignSelf: 'center',
    marginTop: Dimensions.space4x,
  },
});

export default style;
