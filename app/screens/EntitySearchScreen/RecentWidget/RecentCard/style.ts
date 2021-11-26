import { StyleSheet } from 'react-native';

import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';

const style = StyleSheet.create({
  container: {
    marginRight: Dimensions.space2x,
  },
  entityCard: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  entityLogoHolder: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: Colors.white,
    padding: Dimensions.space1x / 2,
    marginBottom: Dimensions.space1x,
    borderColor: Colors.accent,
    borderWidth: 2,
  },
  logo: {
    width: '100%',
    height: '100%',
    borderRadius: 28,
  },
  entityName: {
    textAlign: 'center',
    color: Colors.textBlack,
    fontSize: 14,
    fontWeight: '500',
  },
});

export default style;
