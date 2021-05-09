/**
 *
 * Styles for BusinessExploreOffers
 *
 */

import { StyleSheet } from 'react-native';

import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';
import elevation from 'theme/elevation';

const style = StyleSheet.create({
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: Dimensions.space2x,
  },
  activeHeading: {
    fontSize: 14,
    color: Colors.textBlack,
  },
  deactiveHeading: {
    fontSize: 14,
    color: Colors.errorBackground,
  },
  list: {
    backgroundColor: Colors.white,
    paddingHorizontal: Dimensions.space2x,
  },
  itemWrapper: {
    flexDirection: 'row',
    paddingVertical: Dimensions.space4x,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.primaryDark,
  },
  logoWrapper: {
    padding: Dimensions.space2x,
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: Colors.primaryDark,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Dimensions.space2x,
  },
  logo: {
    width: 20,
    height: 20,
  },
  contentWrapper: {
    width: '70%',
  },
  title: {
    fontSize: 16,
    color: Colors.textBlack,
    fontWeight: '600',
  },
  shortDescription: {
    fontSize: 14,
    color: Colors.textGrey,
    lineHeight: 18,
    marginTop: Dimensions.space1x,
  },
  editIconHolder: {
    position: 'absolute',
    right: 10,
    backgroundColor: Colors.white,
    padding: Dimensions.space1x,
    borderRadius: Dimensions.borderRadius10x,
    alignItems: 'center',
    ...elevation(1),
  },
  editIcon: {
    fontSize: 16,
    color: Colors.accent,
    fontWeight: '600',
  },
});

export default style;
