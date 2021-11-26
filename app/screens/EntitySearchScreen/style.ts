/**
 *
 * Styles for EntitySearchScreen
 *
 */

import { StyleSheet, Platform } from 'react-native';

import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';
import elevation from 'theme/elevation';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    ...Platform.select({
      android: {},
      ios: { marginTop: -40 },
    }),
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    opacity: 0.1,
  },
  searchHolder: {
    marginTop: Dimensions.space1x,
    position: 'relative',
    zIndex: 100,
  },
  inputHolder: {
    backgroundColor: Colors.transparent,
    width: Dimensions.screenWidth,
    flexDirection: 'row',
    position: 'relative',
    zIndex: 100,
  },
  cancelButton: {
    position: 'absolute',
    ...Platform.select({
      android: {
        top: '25%',
        right: Dimensions.space2x + 3,
      },
      ios: {
        top: '25%',
        right: Dimensions.space2x,
      },
    }),
  },
  list: {
    borderRadius: Dimensions.radius3x,
    overflow: 'hidden',
  },
  listContent: {
    paddingVertical: Dimensions.space2x,
  },
  linkItemContainer: {
    paddingVertical: Dimensions.space1x,
  },
  listItem: {
    flexDirection: 'row',
    padding: Dimensions.space2x,
    marginHorizontal: Dimensions.space2x,
    backgroundColor: Colors.white,
    borderRadius: Dimensions.radius4x,
    alignItems: 'center',
    ...elevation(2),
  },
  listItemIcon: {
    fontSize: 18,
    marginRight: 8,
    color: Colors.black,
    marginTop: 2,
  },
  listItemImage: {
    width: 24,
    height: 24,
    borderRadius: 3,
    marginRight: 8,
  },
  listItemLabel: {
    fontSize: 18,
    marginRight: 8,
    color: Colors.black,
  },
});

export default style;
