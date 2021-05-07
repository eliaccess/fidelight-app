/**
 *
 * Styles for ProfileScreen
 *
 */

import { StyleSheet } from 'react-native';

import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';
// import elevation from 'theme/elevation';

const style = StyleSheet.create({
  container: {
    marginTop: -Dimensions.space2x,
    width: Dimensions.screenWidth,
    height: Dimensions.screenHeight,
    backgroundColor: Colors.bg1Color,
  },
  userInfoSection: {
    marginVertical: Dimensions.space2x,
    width: Dimensions.screenWidth,
    backgroundColor: Colors.white,
    padding: Dimensions.space3x,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  userInfo: {
    marginLeft: Dimensions.space2x,
  },
  userName: {
    fontSize: 18,
    color: Colors.textBlack,
    fontWeight: 'bold',
  },
  userPhone: {
    fontSize: 14,
    color: Colors.textGrey,
    marginTop: Dimensions.space1x,
  },
  changePasswordWrapper: {
    marginVertical: Dimensions.space2x,
    backgroundColor: Colors.white,
    padding: Dimensions.space3x,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  changePasswordLabel: {
    fontSize: 16,
    color: Colors.textBlack,
    fontWeight: '600',
  },
  changePasswordIcon: {
    fontSize: 20,
    color: Colors.black,
  },
});

export default style;
