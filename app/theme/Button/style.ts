import { StyleSheet } from 'react-native';

import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';

const style = StyleSheet.create({
  button: {
    paddingVertical: Dimensions.space3x - 3,
    margin: Dimensions.space1x,
    borderRadius: Dimensions.space5x,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    flexDirection: 'row',
  },
  large: {
    padding: Dimensions.space2x,
    paddingHorizontal: Dimensions.space2x,
  },
  flex: {
    flex: 1,
  },
  primaryButton: {
    backgroundColor: Colors.white,
    borderColor: Colors.separator,
  },
  accentButton: {
    backgroundColor: Colors.accent,
    borderColor: Colors.accent,
  },
  tertiaryButton: {
    backgroundColor: Colors.tertiary,
    borderColor: Colors.tertiary,
  },
  appleButton: {
    backgroundColor: Colors.black,
    borderColor: Colors.black,
  },
  linearButton: {
    backgroundColor: Colors.transparent,
    borderColor: Colors.transparent,
  },
  primaryForeground: {
    color: Colors.accent,
  },
  accentForeground: {
    color: Colors.accentReverse,
  },
  tertiaryForeground: {
    color: Colors.tertiaryReverse,
  },
  linearForeground: {
    color: Colors.white,
  },
  noBackgroundLabel: {
    color: Colors.textGrey,
  },
  noBackground: {
    backgroundColor: Colors.transparent,
  },
  greyButtonLabel: {
    color: Colors.textBlack,
  },
  disabled: {
    opacity: 0.5,
  },
  enabled: {
    opacity: 1,
  },
  icon: {
    fontSize: 14,
    color: Colors.accent,
  },
  largeIcon: {
    fontSize: 18,
  },
  image: {
    width: 18,
    height: 18,
  },
  label: {
    fontSize: 14,
    color: Colors.textBlack,
    fontWeight: '600',
    marginHorizontal: Dimensions.space1x,
    textAlign: 'center',
  },
  largeLabel: {
    fontSize: 16,
    fontWeight: '500',
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: '100%',
    borderRadius: Dimensions.space4x,
  },
});
export default style;
