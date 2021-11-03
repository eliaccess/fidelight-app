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
    width: 36,
    height: 36,
    position: 'relative',
    backgroundColor: Colors.transparent,
    // borderWidth: 0.25,
    // borderColor: Colors.favorite,
  },
  buttonIcon: {
    width: ICON_SIZE * 4.5,
    height: ICON_SIZE * 4.5,
    paddingTop: 1,
  },
  buttonFallbackIcon: {
    color: Colors.favorite,
    fontSize: 22,
    position: 'absolute',
    paddingTop: 1,
    paddingLeft: 1,
    zIndex: 10,
  },
});

export default style;
