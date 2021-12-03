import { StyleSheet } from 'react-native';

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
});

export default style;
