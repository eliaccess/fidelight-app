import { StyleSheet } from 'react-native';
import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: Dimensions.space2x,
    width: '100%',
    flex: 1,
  },
  inputContainer: {
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    marginBottom: Dimensions.space1x,
  },
  policyWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginHorizontal: Dimensions.space1x,
  },
  policyLable: {
    fontSize: 14,
    color: Colors.textGrey,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    width: '50%',
    marginTop: Dimensions.space3x,
    padding: Dimensions.space1x,
  },
  scanQRInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontFamily: 'Poppins-Regular',
    height: 30,
    width: '92%',
    borderRadius: Dimensions.borderRadius,
    borderBottomWidth: 1,
    borderBottomColor: Colors.inputBorder,
    color: Colors.textBlack,
    alignItems: 'flex-start',
  },
  scanQrCodeLabel: {
    fontSize: 14,
    color: Colors.textGrey,
  },
  scanQRIcon: {
    fontSize: 22,
    color: Colors.accent,
  },
  qrCodeValue: {
    fontSize: 14,
    color: Colors.textBlack,
  },
  modalContentStyle: {
    backgroundColor: Colors.transparent,
  },
  scannerWrapper: {
    top: '10%',
    left: '-12.5%',
    alignItems: 'center',
    justifyContent: 'center',
    width: '125%',
    height: Dimensions.screenHeight,
    backgroundColor: Colors.black,
    zIndex: 10000,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  scannerContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 60,
  },
  scannerHeading: {
    fontSize: 12,
    padding: Dimensions.space3x,
    color: Colors.white,
  },
  closeButtonWrapper: {
    position: 'absolute',
    top: '2%',
    right: '5%',
    width: 40,
    height: 40,
    borderRadius: 25,

    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    marginBottom: Dimensions.space1x,
  },
  closeButtonIcon: {
    fontSize: 22,
    color: Colors.textBlack,
  },
});

export default style;
