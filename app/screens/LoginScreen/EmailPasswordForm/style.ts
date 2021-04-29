import { StyleSheet } from 'react-native';
import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: Dimensions.space1x,
    width: '100%',
    flex: 1,
  },
  inputContainer: {
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    marginBottom: Dimensions.space1x,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    marginBottom: Dimensions.space2x,
    padding: Dimensions.space1x,
  },
  forgotPasswordLabel: {
    fontWeight: '600',
    fontSize: 12,
    color: Colors.textGrey,
    textAlign: 'left',
    alignSelf: 'flex-end',
    marginHorizontal: Dimensions.space2x,
    paddingVertical: Dimensions.space1x,
    textDecorationLine: 'underline',
    marginTop: -Dimensions.space2x,
    marginBottom: Dimensions.space2x,
  },
});

export default style;
