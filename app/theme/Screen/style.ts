import { StyleSheet } from 'react-native';

import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';

const style = StyleSheet.create({
  header: {
    width: Dimensions.screenWidth,
    position: 'absolute',
    top: 0,
    left: 0,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: Dimensions.statusBarHeight,
    borderBottomWidth: 0.3,
    borderBottomColor: Colors.transparent,
    zIndex: 100000,
    flex: 1,
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: '100%',
  },
  headerBackground: {
    borderBottomColor: Colors.separator,
    borderBottomWidth: 0.3,
  },
  headerContent: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    height: Dimensions.headerContentHeight + Dimensions.space2x,
    paddingHorizontal: 60,
  },
  backButton: {
    position: 'absolute',
    left: Dimensions.space1x,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  backButtonDark: {
    backgroundColor: Colors.transparent,
  },
  backButtonIcon: {
    fontSize: 30,
    fontWeight: '900',
    color: Colors.white,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: Colors.white,
  },
  contentWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: Colors.white,
  },
  contentHolder: {
    paddingTop: Dimensions.headerHeight,
    flex: 1,
  },
  scrollContentContainer: {
    paddingTop: Dimensions.headerHeight + Dimensions.space2x,
    paddingBottom: Dimensions.bottomSpacing,
  },
  screenTitle: {
    fontSize: 24,
    color: Colors.textGrey,
    margin: Dimensions.space2x,
  },
  screenSubtitle: {
    marginTop: -Dimensions.space1x,
    marginHorizontal: Dimensions.space2x,
    fontSize: 14,
    color: Colors.textGrey,
    lineHeight: 24,
    textAlign: 'justify',
  },
  screenSubtitleLarge: {
    fontSize: 16,
    marginTop: Dimensions.space2x,
  },
  footer: {
    padding: Dimensions.space1x,
    paddingHorizontal: Dimensions.space2x,
    paddingBottom: Dimensions.bottomSpacing,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: Dimensions.screenWidth,
  },
  footerText: {
    fontSize: 10,
  },
  backLabel: {
    marginLeft: -Dimensions.space1x,
    fontWeight: '600',
    color: Colors.white,
  },
  darkStyle: {
    color: Colors.textBlack,
  },
});

export default style;
