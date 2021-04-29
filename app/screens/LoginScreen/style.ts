import { StyleSheet } from 'react-native';
import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';
// import elevation from "theme/elevation";

const style = StyleSheet.create({
  container: {
    // flex: 1,
    // height: Dimensions.screenHeight - 150,
    paddingHorizontal: Dimensions.space4x,
    // backgroundColor: Colors.primaryDark,
  },
  contentContainer: {
    alignItems: 'center',
  },
  formContainer: {
    justifyContent: 'flex-start',
    marginTop: Dimensions.space2x,
  },
  buttonContainer: {
    marginTop: Dimensions.space4x,
    alignItems: 'center',
  },
  socialLoginPitch: {
    color: Colors.textGrey,
    fontWeight: '500',
    fontSize: 14,
    marginVertical: Dimensions.space4x,
  },
  buttonWrapper: {
    width: '100%',
    marginBottom: Dimensions.space2x,
    flexDirection: 'row',
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
