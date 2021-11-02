import { StyleSheet } from 'react-native';

import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';

const ICON_SIZE = 20;

const style = StyleSheet.create({
  button: {
    padding: Dimensions.space1x,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 36,
    maxWidth: 36,
    height: 36,
    position: 'relative',
    backgroundColor: Colors.transparent,
    borderWidth: 0.5,
    borderColor: Colors.accentLight,
  },
  buttonIcon: {
    width: ICON_SIZE * 5,
    height: ICON_SIZE * 4,
  },
  buttonFallbackIcon: {
    color: Colors.accent,
    fontSize: 22,
    position: 'absolute',
    paddingTop: 0,
    paddingLeft: 2,
    zIndex: 10,
  },
});

export default style;
