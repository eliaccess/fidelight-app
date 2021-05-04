/**
 *
 * Styles for EntityDetailScreen
 *
 */

import { StyleSheet } from 'react-native';

import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';
import elevation from 'theme/elevation';
export const DOT_SIZE = 40;
export const ITEM_WIDTH = Dimensions.screenWidth - Dimensions.screenWidth / 6;
const style = StyleSheet.create({
  container: {
    backgroundColor: Colors.bg1Color,
  },
  timingsContainer: {
    backgroundColor: Colors.white,
    borderRadius: Dimensions.borderRadius2x,
    flexDirection: 'row',
    padding: Dimensions.space2x,
    marginVertical: Dimensions.space2x,
    ...elevation(1),
  },
  timeItem: {
    flexDirection: 'row',
    marginHorizontal: Dimensions.space1x,
  },
  timeHeading: {
    fontSize: 16,
    color: Colors.accentDark,
    fontWeight: '600',
  },
  timeValue: {
    fontSize: 16,
    color: Colors.textBlack,
  },
  tagSeparator: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    marginHorizontal: Dimensions.space1x,
    backgroundColor: Colors.textBlack,
    alignSelf: 'center',
  },
  sectionWrapper: {
    backgroundColor: Colors.white,
    height: 220,
  },
  modalHeader: {
    backgroundColor: Colors.bg2Color,
    padding: Dimensions.space4x,
    height: 140,
    width: 300,
    borderTopLeftRadius: Dimensions.borderRadius2x,
    borderTopRightRadius: Dimensions.borderRadius2x,
  },
  dealTitle: {
    fontSize: 22,
    color: Colors.textBlack,
    fontWeight: 'bold',
  },
  dealShortDescription: {
    fontSize: 14,
    color: Colors.textGrey,
    marginTop: Dimensions.space1x,
  },
  dealImage: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: 52,
    height: 52,
  },
  modalContent: {
    backgroundColor: Colors.white,
    padding: Dimensions.space2x,
  },
  dealValidDateWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Dimensions.space8x,
    padding: Dimensions.space2x,
    borderRadius: Dimensions.borderRadius10x,
    backgroundColor: Colors.primary,
  },
  dealValidDate: {
    fontSize: 12,
    color: Colors.errorBackground,
  },
  dealDetailWrapper: {
    width: 275,
    marginVertical: Dimensions.space2x,
    padding: Dimensions.space2x,
    borderRadius: Dimensions.borderRadius3x,
    backgroundColor: Colors.primary,
  },
  offerDetailLabel: {
    fontSize: 14,
    color: Colors.textBlack,
    fontWeight: '600',
  },
  dealDetail: {
    fontSize: 12,
    color: Colors.textGrey,
    marginTop: Dimensions.space1x,
    lineHeight: 18,
    textAlign: 'justify',
  },
});

export default style;
