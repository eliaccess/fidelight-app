/**
 *
 * Styles for EntityDetailScreen EntityInfo
 *
 */

import { StyleSheet } from 'react-native';

import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';

const style = StyleSheet.create({
  infoContainer: {
    paddingTop: Dimensions.space6x,
    padding: Dimensions.space2x,
    backgroundColor: Colors.white,
  },
  entityInfoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: Dimensions.space2x,
  },
  nameDescriptionWrapper: {
    width: '85%',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.textBlack,
  },
  description: {
    fontSize: 14,
    color: Colors.textGrey,
    marginRight: Dimensions.space2x,
    marginTop: Dimensions.space2x,
  },
  separationLine: {
    width: Dimensions.screenWidth - 30,
    backgroundColor: Colors.textGrey,
    height: 0.5,
    marginVertical: Dimensions.space2x,
  },
  contactInfoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: Dimensions.space2x,
  },
  contactInfoIcon: {
    fontSize: 18,
    color: Colors.accent,
  },
  contactInfoItemLabel: {
    fontSize: 14,
    color: Colors.textGrey,
    marginLeft: Dimensions.space2x,
  },
});

export default style;
