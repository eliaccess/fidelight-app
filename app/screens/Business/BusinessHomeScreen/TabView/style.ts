import { StyleSheet, Platform } from 'react-native';

import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions/';
import elevation from 'theme/elevation';

const style = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: Colors.white,
    width: Dimensions.screenWidth,
    height: Dimensions.screenHeight,

    borderRadius: Dimensions.borderRadius10x,
  },
  tabBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopWidth: 0.5,
    borderTopColor: Colors.white,
    ...Platform.select({
      ios: { paddingBottom: Dimensions.bottomSpacing },
      android: {
        paddingBottom: Dimensions.bottomSpacing + Dimensions.space1x,
      },
    }),
    backgroundColor: Colors.white,
    ...elevation(5),
  },
  tabBarButton: {
    flex: 0.2,
    alignItems: 'center',
    paddingTop: Dimensions.space2x,
    borderTopColor: Colors.white,
    borderTopWidth: 1,
  },
  tabBarButtonIcon: {
    fontSize: 22,
    color: Colors.textBlack,
    marginBottom: Dimensions.space1x,
  },
  activeTab: {
    color: Colors.accentDark,
  },
  tabBarMajorButtonView: {
    flex: 0,
    width: 62,
    height: 62,
    borderRadius: 31,
    backgroundColor: Colors.accent,
    borderTopWidth: 0,
    marginTop: -30,
    ...elevation(4, Colors.accentDark),
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: Dimensions.space2x,
  },
  tabBarMajorButtonIcon: {
    fontSize: 30,
    color: Colors.white,
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: '100%',
    borderRadius: 50,
  },
});

export const initialLayout = {
  height: 0,
  width: Dimensions.screenWidth,
};

export default style;
