/**
 *
 * Styles for HomeHeader
 *
 */

import { StyleSheet } from 'react-native';

import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';
import elevation from 'theme/elevation';

const style = StyleSheet.create({
  container: {
    width: Dimensions.screenWidth,
    height: 180,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: '100%',
  },
  iconsWrapper: {
    width: Dimensions.screenWidth,
    flexDirection: 'row',
    padding: Dimensions.space2x,
    justifyContent: 'space-between',
  },
  menuIconWrapper: {
    backgroundColor: Colors.white,
    padding: Dimensions.space2x,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    ...elevation(2),
  },
  menuIcon: {
    fontSize: 22,
    color: Colors.accentDark,
  },
  logo: {
    width: 30,
    height: 'auto',
  },
  avatar: {
    backgroundColor: Colors.white,
    padding: Dimensions.space1x - 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    ...elevation(2),
  },
  avatarImage: {
    width: 40,
    height: 40,
    borderRadius: 30,
  },
  searchBarWrapper: {
    position: 'absolute',
    bottom: -20,
    flexDirection: 'row',
    borderRadius: Dimensions.borderRadius10x,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    paddingVertical: Dimensions.space2x,
    paddingHorizontal: Dimensions.space3x,
    backgroundColor: Colors.white,
    ...elevation(3),
  },
  searchIcon: {
    fontSize: 22,
    color: Colors.textBlack,
  },
  searchPlaceHolder: {
    marginLeft: Dimensions.space2x,
    fontSize: 18,
    color: Colors.primaryDark,
  },
  animation: {
    width: 300,
    height: 300,
  },
});

export default style;
