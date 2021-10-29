/**
 *
 * Styles for DealDetailScreen
 *
 */

import { StyleSheet } from 'react-native';

import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';
// import elevation from 'theme/elevation';
export const DOT_SIZE = 40;
export const ITEM_WIDTH = Dimensions.screenWidth - Dimensions.screenWidth / 6;
const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalHeader: {
    backgroundColor: Colors.bg2Color,
    padding: Dimensions.space4x,
    height: 140,
    width: '100%',
    borderTopLeftRadius: Dimensions.borderRadius2x,
    borderTopRightRadius: Dimensions.borderRadius2x,
  },
  dealTitle: {
    fontSize: 34,
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
    padding: Dimensions.space3x,
    borderRadius: Dimensions.borderRadius10x,
    backgroundColor: Colors.itemBackgroundColor,
  },
  dealValidDate: {
    fontSize: 12,
    color: Colors.errorBackground,
  },
  dealDetailWrapper: {
    width: '95%',
    marginVertical: Dimensions.space2x,
    padding: Dimensions.space3x,
    borderRadius: Dimensions.borderRadius10x,
    backgroundColor: Colors.itemBackgroundColor,
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
