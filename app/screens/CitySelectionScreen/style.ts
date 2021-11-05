import { StyleSheet } from 'react-native';
import Dimensions from 'theme/Dimensions';
import Colors from 'theme/Colors';
// import elevation from 'theme/elevation';

const style = StyleSheet.create({
  container: {
    paddingTop: Dimensions.space6x,
    paddingHorizontal: Dimensions.space1x,
    backgroundColor: Colors.white,
    height: Dimensions.screenHeight,
  },
  typeAheadContainer: {
    zIndex: 100,
    position: 'relative',
    marginBottom: Dimensions.space6x,
    backgroundColor: Colors.primary,
  },
  pitch: {
    fontSize: 28,
    lineHeight: 40,
    paddingLeft: Dimensions.space2x,
    paddingRight: Dimensions.space6x,
    fontWeight: '500',
    marginBottom: Dimensions.space4x,
    color: Colors.textBlack,
  },
});

export default style;
