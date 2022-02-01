import { StyleSheet } from 'react-native';
import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';

export const inputProps = {
  underlineColorAndroid: Colors.transparent,
  placeholderTextColor: Colors.primaryDark,
};

const INPUT_HEIGHT = 44;

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontFamily: 'Poppins-Regular',
    minHeight: INPUT_HEIGHT,
    width: '95%',
    margin: Dimensions.space3x,
    padding: Dimensions.space3x,
    paddingHorizontal: Dimensions.space3x,
    borderRadius: Dimensions.borderRadius,
    borderWidth: 1,
    borderColor: Colors.inputBorder,
    color: Colors.textBlack,
    backgroundColor: Colors.white,
    alignSelf: 'center',
    alignItems: 'flex-start',
    textAlignVertical: 'center',
    position: 'relative',
  },
  label: {
    padding: Dimensions.space1x,
    color: Colors.textGrey,
    fontWeight: '600',
    fontSize: 14,
    overflow: 'hidden',
    alignSelf: 'flex-start',
    top: 0,
    zIndex: 1,
    left: 15,
    position: 'absolute',
    backgroundColor: Colors.white,
    borderRadius: Dimensions.borderRadius,
  },
  placeholder: {
    fontSize: 14,
    color: Colors.placeholder,
  },
  error: {
    padding: Dimensions.space1x,
    paddingHorizontal: Dimensions.space2x,
    borderRadius: Dimensions.borderRadius,
    color: Colors.errorBackground,
    fontWeight: '600',
    fontSize: 13,
    overflow: 'hidden',
    alignSelf: 'flex-end',
    bottom: -2,
    right: 6,
    backgroundColor: Colors.white,
    position: 'absolute',
    zIndex: 1,
  },
  dropDownIcon: {
    fontSize: 22,
    color: Colors.grey,
    fontWeight: '800',
    marginRight: -Dimensions.space1x,
  },
  selectedValue: {
    fontSize: 14,
    color: Colors.textBlack,
  },
});
