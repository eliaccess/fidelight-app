/**
 *
 * Styles for EditBusinessInfoScreen
 *
 */

import { StyleSheet } from 'react-native';

import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';
// import elevation from 'theme/elevation';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg1Color,
    paddingBottom: Dimensions.bottomSpacing,
  },
  sectionContainer: {
    marginTop: Dimensions.space4x,
  },
  sectionHeading: {
    paddingHorizontal: Dimensions.space3x,
    marginBottom: Dimensions.space2x,
    fontSize: 16,
    color: Colors.textBlack,
    fontWeight: '600',
  },
  businessImageContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    width: Dimensions.screenWidth,
    padding: Dimensions.space2x,
  },
  addWrapper: {
    padding: Dimensions.space1x,
    alignItems: 'center',
  },
  addLabel: {
    fontSize: 14,
    color: Colors.textGrey,
    opacity: 0.8,
    fontWeight: '600',
    marginBottom: Dimensions.space1x,
  },
  addImageWrapper: {
    width: 80,
    height: 80,
    backgroundColor: Colors.bg1Color,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadIcon: {
    fontSize: 22,
    color: Colors.accent,
  },
  uploadLabel: {
    fontSize: 12,
    color: Colors.accent,
    marginTop: Dimensions.space1x,
  },
  saveButtonContainer: {
    width: '90%',
    alignSelf: 'center',
  },
});

export default style;
