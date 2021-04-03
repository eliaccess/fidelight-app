/**
 *
 * Styles for Modal Theme
 *
 */

import { StyleSheet } from 'react-native';

import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';

const CONTENT_HEIGHT =
  (Dimensions.screenHeight - Dimensions.statusBarHeight) * 0.75;

const style = StyleSheet.create({
  modal: {
    padding: 0,
    margin: 0,
  },
  container: {
    width: Dimensions.screenWidth,
    position: 'absolute',
    bottom: 0,
    left: 0,
    // minHeight: CONTENT_HEIGHT,
    backgroundColor: Colors.white,
    zIndex: 1000,
  },
  header: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: Dimensions.space2x,
    borderBottomColor: Colors.separator,
    borderBottomWidth: 1,
    zIndex: 1,
    overflow: 'hidden',
    backgroundColor: Colors.white,
  },
  headerIcon: {
    fontSize: 24,
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: 36,
    textAlign: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.textBlack,
    flex: 1,
  },
  scrollView: {
    maxHeight: CONTENT_HEIGHT + Dimensions.bottomSpacing,
  },
  scrollContent: {
    paddingBottom: Dimensions.bottomSpacing + 100,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
  },
});

export default style;
