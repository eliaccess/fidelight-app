import { StyleSheet } from 'react-native';
import Dimensions from 'theme/Dimensions';
import Colors from 'theme/Colors';

const style = StyleSheet.create({
  container: {
    paddingHorizontal: Dimensions.space1x,
    backgroundColor: Colors.white,
    height: Dimensions.screenHeight,
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
  recentSelectedCitiesLabel: {
    color: Colors.textBlack,
    fontSize: 16,
    fontWeight: '700',
  },
  popularCitiesLabel: {
    color: Colors.textBlack,
    fontSize: 16,
    fontWeight: '700',
  },
  typeAheadContainer: {
    zIndex: 100,
    position: 'relative',
    marginBottom: Dimensions.space6x,
    backgroundColor: Colors.primary,
  },
  recentSelectedCitiesList: {
    flexDirection: 'row',
    marginTop: Dimensions.space2x,
    marginLeft: Dimensions.horizontalSpace,
  },
  tagName: {
    alignSelf: 'center',
    color: Colors.textBlack,
    fontSize: 16,
  },
  tagStyle: {
    padding: Dimensions.space1x,
    paddingHorizontal: Dimensions.space2x,
    backgroundColor: Colors.primary,
    borderRadius: Dimensions.borderRadius2x,
  },
});

export default style;
