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
    paddingTop: Dimensions.space4x,
    borderBottomWidth: 1,
    borderBottomColor: Colors.primaryDark,
    marginBottom: Dimensions.space2x,
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
    width: 45,
    height: 45,
    borderRadius: 25,
  },
  deleteLogoWrapper: {
    position: 'absolute',
    bottom: -15,
    right: -7,
    backgroundColor: Colors.white,
    padding: Dimensions.space1x,
    borderRadius: Dimensions.borderRadius10x,
    alignItems: 'center',
    marginBottom: Dimensions.space2x,
    ...elevation(2),
  },
  contentWrapper: {
    width: '75%',
  },
  title: {
    fontSize: 16,
    color: Colors.textBlack,
    fontWeight: '600',
  },
  shortDescription: {
    fontSize: 14,
    color: Colors.textGrey,
    marginTop: Dimensions.space1x,
  },
  actionsWrapper: {},
  actionIconHolder: {
    backgroundColor: Colors.white,
    padding: Dimensions.space1x,
    borderRadius: Dimensions.borderRadius10x,
    alignItems: 'center',
    marginBottom: Dimensions.space2x,
    ...elevation(1),
  },
  editIcon: {
    fontSize: 16,
    color: Colors.accent,
    fontWeight: '600',
  },
  deleteIcon: {
    fontSize: 16,
    color: Colors.errorBackground,
    fontWeight: '600',
  },
  photoIcon: {
    fontSize: 16,
    color: Colors.accent,
    fontWeight: '600',
  },
  modalHeading: {
    fontSize: 14,
    color: Colors.textBlack,
    fontWeight: '600',
  },
  OfferContainer: {
    minHeight: 560,
  },
});

export default style;
