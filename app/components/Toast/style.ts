/* eslint-disable react-native/no-color-literals */
// @ts-ignore
import { StyleSheet, Platform } from 'react-native';
import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';

const style = StyleSheet.create({
  toastWrapper: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 12,
    textAlign: 'center',
    zIndex: 100000000000,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    borderRadius: 6,
    ...Platform.select({
      ios: {
        shadowColor: '#000000',
        shadowOpacity: 3 * 0.08,
        shadowRadius: 12,
        shadowOffset: {
          width: 0,
          height: 6,
        },
        overflow: 'visible',
      },
      android: {
        elevation: 2,
      },
    }),
  },
  toastMessage: {
    color: '#ffffff',
    fontWeight: '600',
  },
  animation: {
    width: 40,
    height: 40,
  },
  successImage: {
    width: 25,
    height: 25,
  },
  iconWrapper: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.accentLight,
    padding: Dimensions.space1x / 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  icon: {
    fontSize: 18,
    color: Colors.accentLight,
  },
  errorIcon: {
    fontSize: 22,
    color: Colors.errorBackground,
    marginRight: Dimensions.space1x,
  },
});

export default style;
