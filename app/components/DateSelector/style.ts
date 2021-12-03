import { StyleSheet } from 'react-native';
import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';

const style = StyleSheet.create({
  container: {
    width: '100%',
    margin: Dimensions.space1x,
    paddingBottom: Dimensions.space1x,
    borderBottomWidth: 1,
    borderBottomColor: Colors.inputBorder,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: Dimensions.space3x,
  },
  heading: {
    position: 'absolute',
    top: '-120%',
    fontSize: 14,
    color: Colors.textGrey,
  },
  value: {
    fontSize: 14,
    color: Colors.textBlack,
  },
  label: {
    fontSize: 14,
    color: Colors.textGrey,
  },
  icon: {
    fontSize: 18,
    color: Colors.accent,
  },
  error: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    color: Colors.errorBackground,
    fontWeight: '600',
    fontSize: 13,
  },
});

export default style;
