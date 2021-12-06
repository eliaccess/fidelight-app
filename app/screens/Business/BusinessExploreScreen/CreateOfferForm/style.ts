import { StyleSheet } from 'react-native';

import Dimensions from 'theme/Dimensions';

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: Dimensions.space2x,
    width: '100%',
    marginBottom: 60,
    flex: 1,
  },
  inputContainer: {
    alignItems: 'center',
    position: 'relative',
    width: '105%',
    marginBottom: Dimensions.space1x,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    padding: Dimensions.space1x,
  },
  dateSelectorsWrapper: {
    flexDirection: 'row',
  },
  dateSelectorWrapper: {
    width: '45%',
    marginRight: Dimensions.space3x,
  },
});

export default style;
