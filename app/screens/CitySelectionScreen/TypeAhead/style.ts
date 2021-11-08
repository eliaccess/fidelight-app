import { Platform, StyleSheet } from 'react-native';

import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';
// import elevation from 'theme/elevation';

const style = StyleSheet.create({
  inputHolder: {
    marginHorizontal: Dimensions.space2x,
    flexDirection: 'row',
    borderRadius: Dimensions.borderRadius10x,
    width: '90%',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        paddingVertical: Dimensions.space2x,
      },
    }),
    paddingHorizontal: Dimensions.space3x,
    backgroundColor: Colors.itemBackgroundColor,
  },
  input: {
    width: '90%',
  },
  searchIcon: {
    fontSize: 22,
    color: Colors.textGrey,
    marginRight: Dimensions.space2x,
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
    marginHorizontal: Dimensions.horizontalSpace,
    zIndex: 100,
  },
  listItemIcon: {
    fontSize: 18,
    color: Colors.textBlack,
    marginRight: Dimensions.space1x,
  },
  listItemText: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.textBlack,
  },
});

export default style;
