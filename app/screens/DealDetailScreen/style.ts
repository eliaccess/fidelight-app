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
    borderTopLeftRadius: Dimensions.borderRadius3x,
    borderTopRightRadius: Dimensions.borderRadius3x,
    overflow: 'hidden',
  },
  ellipse: {
    position: 'absolute',
    right: '-6%',
    bottom: '-75%',
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: Colors.white,
    opacity: 0.3,
  },
  innerEllipse: {
    position: 'absolute',
    right: '-5%',
    bottom: '-90%',
    width: 150,
    height: 160,
    borderRadius: 80,
    backgroundColor: Colors.white,
    opacity: 0.4,
  },
  dealTitle: {
    fontSize: 30,
    color: Colors.textBlack,
    fontWeight: 'bold',
  },
  dealProduct: {
    fontSize: 14,
    color: Colors.textGrey,
    marginTop: Dimensions.space1x,
  },
  dealImage: {
    position: 'absolute',
    bottom: 10,
    right: '10%',
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
    width: Dimensions.screenWidth / 1.2,
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
  loaderContainer: {
    width: '100%',
    height: 350,
    marginHorizontal: Dimensions.space4x,
    backgroundColor: Colors.skeleton,
  },
});

export default style;
