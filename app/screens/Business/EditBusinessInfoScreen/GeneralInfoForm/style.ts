import { StyleSheet } from 'react-native';
import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: Dimensions.space2x,
    backgroundColor: Colors.white,
    paddingBottom: Dimensions.space2x,
  },
  inputContainer: {
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    marginBottom: Dimensions.space1x,
  },
  rememberMeForgetWrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: Dimensions.space2x,
    paddingHorizontal: Dimensions.space1x,
  },
  rememberMeWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberMeLabel: {
    fontSize: 12,
    color: Colors.textGrey,
  },
  forgotPasswordLabel: {
    fontWeight: '600',
    fontSize: 12,
    color: Colors.accent,
    textDecorationLine: 'underline',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    marginBottom: Dimensions.space2x,
    padding: Dimensions.space1x,
  },
  updateButtonContainer: {
    width: '90%',
    alignSelf: 'center',
  },
});

export default style;
