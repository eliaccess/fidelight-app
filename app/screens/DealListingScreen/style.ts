import { StyleSheet } from 'react-native';

import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';

const style = StyleSheet.create({
  container: {
    paddingHorizontal: Dimensions.space2x,
  },
  item: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    paddingHorizontal: Dimensions.space1x,
    paddingVertical: Dimensions.space3x,
    borderRadius: Dimensions.borderRadius2x,
    marginBottom: Dimensions.space2x,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.primaryDark,
  },
  image: {
    width: 43,
    height: 43,
    borderRadius: 21,
  },
  contentWrapper: {
    marginLeft: Dimensions.space2x,
    justifyContent: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.textBlack,
    marginBottom: Dimensions.space1x,
  },
  shortDescription: {
    fontSize: 12,
    color: Colors.textGrey,
  },
  loaderContainer: {
    width: Dimensions.screenWidth,
    paddingHorizontal: Dimensions.space2x,
  },
  logoLoader: {
    width: 43,
    height: 43,
    borderRadius: 21,
    backgroundColor: Colors.primaryDark,
  },
  titleLoader: {
    width: 80,
    height: 6,
    borderRadius: Dimensions.borderRadius,
    backgroundColor: Colors.primaryDark,
  },
  shortDescriptionLoader: {
    marginTop: Dimensions.space1x,
    width: 100,
    height: 4,
    borderRadius: Dimensions.borderRadius,
    backgroundColor: Colors.primaryDark,
  },
});

export default style;
