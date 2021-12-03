/**
 *
 * Styles for ProfileScreen
 *
 */

import { StyleSheet } from 'react-native';

import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';
import elevation from 'theme/elevation';

const style = StyleSheet.create({
  contentContainerStyle: {
    paddingBottom: Dimensions.space3x,
  },
  container: {
    backgroundColor: Colors.bg1Color,
  },
  userInfoSection: {
    marginVertical: Dimensions.space2x,
    width: Dimensions.screenWidth,
    backgroundColor: Colors.white,
    padding: Dimensions.space3x,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageInfoWrapper: {
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
  editProfileButtonWrapper: {
    borderRadius: 25,
    padding: Dimensions.space2x,
    backgroundColor: Colors.white,
    ...elevation(1),
    alignItems: 'center',
    justifyContent: 'center',
  },
  editProfileIcon: {
    fontSize: 22,
    color: Colors.accent,
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
  userInfoLoader: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  avatarLoader: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.primaryDark,
  },
  userNameLoader: {
    width: 100,
    height: 8,
    borderRadius: Dimensions.borderRadius,
    backgroundColor: Colors.primaryDark,
  },
  userPhoneLoader: {
    marginTop: Dimensions.space1x,
    width: 150,
    height: 6,
    borderRadius: Dimensions.borderRadius,
    backgroundColor: Colors.primaryDark,
  },
});

export default style;
