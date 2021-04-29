import { StyleSheet } from 'react-native';
import Colors from 'theme/Colors';
// import Colors from "theme/Colors";
import Dimensions from 'theme/Dimensions';
// import elevation from "theme/elevation";

const style = StyleSheet.create({
  container: {
    width: Dimensions.screenWidth,
    paddingBottom: Dimensions.bottomSpacing,
    paddingHorizontal: Dimensions.space2x,

    marginTop: -Dimensions.statusBarHeight,
  },
  contentContainer: {
    alignItems: 'center',
  },
  logo: {
    width: Dimensions.screenWidth * 0.8,
    height: 60,
  },
  loginThumb: {
    width: Dimensions.screenWidth * 0.8,
    height: Dimensions.screenHeight * 0.2,
  },
  formContainer: {
    justifyContent: 'flex-start',
  },
  buttonContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  socialLoginPitch: {
    fontWeight: '500',
    fontSize: 14,
    margin: Dimensions.space2x,
  },
  buttonWrapper: {
    flexDirection: 'row',
  },
  buttonWrapperColumn: {
    width: '100%',
    marginBottom: Dimensions.space2x,
    flexDirection: 'column',
  },
  signUpContainer: {
    justifyContent: 'flex-end',
  },
  signUpPitch: {
    width: '100%',
    color: Colors.textGrey,
    fontWeight: '600',
    fontSize: 14,
    textAlign: 'center',
  },
  signUpLabel: {
    color: Colors.textBlack,
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
});

export default style;
