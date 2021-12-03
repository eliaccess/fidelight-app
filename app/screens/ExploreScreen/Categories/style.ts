/**
 *
 * Styles for ExploreScreen
 *
 */

import { StyleSheet } from 'react-native';

import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';

const style = StyleSheet.create({
  item: {
    width: 65,
    height: 95,
    borderRadius: 75,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Dimensions.space2x,
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: '100%',
    borderRadius: 50,
  },
  itemIconHolder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.itemBackgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Dimensions.space2x,
  },
  itemImage: {
    width: 16,
    height: 16,
    borderRadius: Dimensions.borderRadius,
  },
  itemTitle: {
    fontSize: 12,
    color: Colors.textGrey,
    textAlign: 'center',
    marginHorizontal: Dimensions.space1x,
  },
  activeItem: {
    color: Colors.white,
    fontWeight: 'bold',
  },
  loaderContainer: {
    flexDirection: 'row',
  },
  loaderStyle: {
    width: 60,
    height: 90,
    borderRadius: 75,
    backgroundColor: Colors.skeleton,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Dimensions.space2x,
  },
});

export default style;
