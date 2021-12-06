/**
 *
 * Styles for EditBusinessInfoScreen
 *
 */

import { StyleSheet } from 'react-native';

import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';

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
    fontSize: 20,
    color: Colors.accent,
  },
  uploadLabel: {
    fontSize: 10,
    color: Colors.accent,
    marginTop: Dimensions.space1x,
  },
  saveButtonContainer: {
    width: '90%',
    alignSelf: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  editImageIconWrapper: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    padding: Dimensions.space1x,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.accent,
    borderRadius: 20,
  },
  editImageIcon: {
    fontSize: 18,
    color: Colors.white,
  },
});

export default style;
