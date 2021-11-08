/**
 *
 * Styles for EntityHeader
 *
 */

import { StyleSheet } from 'react-native';

import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';
import elevation from 'theme/elevation';

const style = StyleSheet.create({
  container: {
    marginTop: -120,
    zIndex: 1000,
    backgroundColor: Colors.white,
  },
  coverImageWrapper: {
    width: Dimensions.screenWidth,
    height: 230,
    overflow: 'hidden',
  },
  coverImage: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.primary,
  },

  content: {
    position: 'absolute',
    bottom: '-17%',
    padding: Dimensions.space2x,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Dimensions.screenWidth,
  },
  logoWrapper: {
    backgroundColor: Colors.white,
    padding: Dimensions.space1x,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    ...elevation(2),
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  userPointsWrapper: {
    borderRadius: Dimensions.borderRadius10x,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    padding: Dimensions.space2x,
    ...elevation(2),
  },
  pointIcon: {
    fontSize: 20,
    color: Colors.accentDark,
    marginRight: Dimensions.space1x,
  },
  pointsLabel: {
    fontSize: 16,
    color: Colors.accentDark,
    fontWeight: 'bold',
    marginTop: Dimensions.space1x / 2,
  },
});

export default style;
