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
});

export default style;
