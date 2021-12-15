import { StyleSheet } from 'react-native';
import Dimensions from 'theme/Dimensions';
import Colors from 'theme/Colors';

const INPUT_HEIGHT = 44;
const MULTILINE_HEIGHT = 130;

export const inputStyleProps = {
  underlineColorAndroid: Colors.transparent,
  placeholderTextColor: Colors.placeholder,
};

export default StyleSheet.create({
  container: {
    margin: Dimensions.space2x,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  input: {
    fontFamily: 'Poppins-Regular',
    height: Dimensions.inputHeight,
    width: '100%',
    borderRadius: Dimensions.borderRadius,
    borderBottomWidth: 1,
    borderBottomColor: Colors.inputBorder,
    color: Colors.textBlack,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  successInput: {
    borderBottomColor: Colors.accent,
  },
  inputWithLabel: {
    padding: Dimensions.space3x,
  },
  errorInput: {
    borderBottomColor: Colors.errorBackground,
  },
  multiline: {
    height: MULTILINE_HEIGHT,
    paddingTop: Dimensions.space3x,
    paddingHorizontal: Dimensions.space1x + 3,
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: Colors.inputBorder,
  },
  label: {
    color: Colors.textGrey,
    fontWeight: '600',
    fontSize: 14,
    overflow: 'hidden',
    alignSelf: 'flex-start',
    alignItems: 'center',
    position: 'absolute',
    top: Dimensions.space1x,
    zIndex: 1,
    left: 0,
    borderRadius: Dimensions.borderRadius,
  },
  multilineLabel: {
    left: 5,
    top: 2,
  },
  errorWrapper: {
    overflow: 'hidden',
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: -25,
    right: 0,
    zIndex: 1,
  },
  error: {
    color: Colors.errorBackground,
    fontWeight: '600',
    fontSize: 13,
  },
  inputCheckbox: {
    position: 'absolute',
    right: 0,
  },
  showPasswordButton: {
    position: 'absolute',
    right: Dimensions.space2x,
    top: Dimensions.inputHeight / 2,
    opacity: 0.7,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.inputBorder,
    color: Colors.textBlack,
    backgroundColor: Colors.white,
    borderRadius: Dimensions.borderRadius,
    marginVertical: Dimensions.space2x,
  },
  phoneInput: {
    fontFamily: 'Poppins-Regular',
    minHeight: INPUT_HEIGHT,
    width: '80%',
  },
  flagHolder: {
    flexDirection: 'row',
    marginLeft: Dimensions.space1x,
    alignItems: 'center',
  },
  countryPickerIcon: {
    fontSize: 16,
    marginLeft: 3,
    marginRight: -3,
  },
});
