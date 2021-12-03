/**
 *
 * Styles for QRCode
 *
 */

import { StyleSheet } from 'react-native';

import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';

const style = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    width: Dimensions.screenWidth,
    height: '100%',
    backgroundColor: Colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Dimensions.borderRadius2x,
    zIndex: 1000000,
  },
  background1: {
    width: '80%',
    height: '80%',
    backgroundColor: Colors.white,
    opacity: 0.2,
    borderRadius: Dimensions.borderRadius10x,
  },
  background2: {
    position: 'absolute',
    width: '90%',
    height: '75%',
    backgroundColor: Colors.white,
    opacity: 0.2,
    borderRadius: Dimensions.borderRadius10x,
  },
  closeButtonHolder: {
    position: 'absolute',
    top: '5%',
    right: '5%',
    padding: Dimensions.space1x,
    borderRadius: Dimensions.borderRadius10x,
    backgroundColor: Colors.white,
  },
  closeIcon: {
    fontSize: 18,
    color: Colors.black,
  },
  content: {
    position: 'absolute',
    top: '14%',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: Dimensions.space12x,
    backgroundColor: Colors.white,
    borderRadius: Dimensions.borderRadius10x + 20,
    width: '100%',
    height: '90%',
  },
  qrCodeHeading: {
    fontSize: 22,
    color: Colors.textBlack,
    fontWeight: 'bold',
  },
  scanToAvailLabel: {
    fontSize: 14,
    color: Colors.textGrey,
    marginTop: Dimensions.space2x,
  },
  offerDetailWrapper: {
    alignItems: 'center',
  },
  offerTitle: {
    fontSize: 22,
    color: Colors.textBlack,
    fontWeight: 'bold',
  },
  offerPoints: {
    marginVertical: Dimensions.space2x,
    fontSize: 18,
    color: Colors.accent,
    fontWeight: 'bold',
  },
  offerShortDescription: {
    fontSize: 14,
    color: Colors.textGrey,
  },
});

export default style;
