import { StyleSheet } from 'react-native';

import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';
import elevation from 'theme/elevation';

const style = StyleSheet.create({
  container: {
    ...elevation(2),
    zIndex: 100,
    position: 'relative',
    backgroundColor: Colors.white,
  },
  inputHolder: {
    alignItems: 'center',
    position: 'relative',
    width: '100%',
  },
  input: {
    marginHorizontal: Dimensions.space2x,
    width: Dimensions.screenWidth - Dimensions.space4x,
  },
  cancelButtonContainer: {
    position: 'absolute',
    right: Dimensions.space1x,
    top: Dimensions.space2x / 1.3,
  },
  listHolder: {
    backgroundColor: Colors.white,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderColor: Colors.primary,
    padding: Dimensions.space2x,
    marginHorizontal: Dimensions.space2x,
    zIndex: 100,
  },
  listItemIcon: {
    fontSize: 18,
    color: Colors.textBlack,
    marginRight: Dimensions.space1x,
  },
  listItemText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.textBlack,
  },
});

export default style;
