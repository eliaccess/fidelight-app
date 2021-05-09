import { StyleSheet } from 'react-native';

import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions/';
// import elevation from 'theme/elevation';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    width: Dimensions.screenWidth,
    height: Dimensions.screenHeight,
    top: 0,
    left: 0,
    position: 'absolute',
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: '100%',
    borderRadius: 50,
  },
  drawer: {
    width: Dimensions.screenWidth + 10,
    height: Dimensions.screenHeight + 10,
    top: -2,
    left: -2,
    position: 'absolute',
    paddingTop: '60%',
  },
  drawerMenu: {
    padding: Dimensions.space3x,
  },
  menuItem: {
    marginVertical: Dimensions.space3x,
  },
  menuItemLabel: {
    fontSize: 20,
    color: Colors.white,
    fontWeight: '600',
  },
  authButtonHolder: {
    position: 'absolute',
    bottom: 100,
    left: 15,
    width: 120,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.accentLight,
    borderRadius: Dimensions.borderRadius10x,
  },
  logoutButtonLable: {
    fontSize: 18,
    color: Colors.white,
    fontWeight: '600',
  },
  tabViewWrapper: {
    // transform: [{ scale: 0.8 }, { translateY: 100 }, { translateX: 200 }],
  },
});

export const initialLayout = {
  height: 0,
  width: Dimensions.screenWidth,
};

export default style;
