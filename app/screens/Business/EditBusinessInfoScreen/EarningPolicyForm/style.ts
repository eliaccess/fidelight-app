import { StyleSheet } from 'react-native';
import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: Dimensions.space2x,
    backgroundColor: Colors.white,
    paddingBottom: Dimensions.space2x,
  },
  typeContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginBottom: Dimensions.space2x,
  },
  typeWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: Dimensions.space2x,
  },
  typeLabel: {
    fontSize: 14,
    color: Colors.textBlack,
    fontWeight: '600',
  },
  inputContainer: {
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    marginBottom: Dimensions.space1x,
  },
  submitButtonContainer: {
    width: '90%',
    alignSelf: 'center',
  },
});

export default style;
