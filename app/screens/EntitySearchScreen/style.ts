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
    paddingHorizontal: Dimensions.horizontalSpace,
  },
  inputHolder: {
    marginTop: Dimensions.space2x,
    marginHorizontal: Dimensions.space1x,
    flexDirection: 'row',
    borderRadius: Dimensions.borderRadius10x,
    width: '95%',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        paddingVertical: Dimensions.space2x,
      },
    }),
    paddingHorizontal: Dimensions.space3x,
    backgroundColor: Colors.white,
    ...elevation(1),
  },
  input: {
    width: '90%',
  },
  searchIcon: {
    fontSize: 22,
    color: Colors.textGrey,
    marginRight: Dimensions.space2x,
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
    padding: Dimensions.space2x + 3,
    marginHorizontal: Dimensions.space2x,
    backgroundColor: Colors.white,
    borderRadius: Dimensions.borderRadius2x,
    alignItems: 'center',
    ...elevation(2),
  },
  listItemLabel: {
    fontSize: 14,
    marginLeft: Dimensions.space1x,
    color: Colors.black,
  },
});

export default style;
