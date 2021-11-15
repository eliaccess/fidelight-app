import { StyleSheet } from 'react-native';
import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';
import elevation from 'theme/elevation';

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
  policyWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginHorizontal: Dimensions.space1x,
  },
  policyLable: {
    fontSize: 14,
    color: Colors.textGrey,
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
  daySelectorWrapper: {
    flexDirection: 'row',
    padding: Dimensions.space1x,
    marginLeft: Dimensions.horizontalSpace,
  },
  item: {
    width: 35,
    height: 50,
    borderRadius: Dimensions.borderRadius2x,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Dimensions.space2x,
    ...elevation(1),
  },
  itemName: {
    fontSize: 12,
    color: Colors.textGrey,
    textAlign: 'center',
  },
  // eslint-disable-next-line react-native/no-color-literals
  activeItem: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: '100%',
    borderRadius: Dimensions.borderRadius2x,
  },
  daySelectionLabel: {
    color: Colors.textGrey,
    fontWeight: '600',
    fontSize: 14,
    alignSelf: 'flex-start',
    marginVertical: Dimensions.space3x,
    marginLeft: Dimensions.space1x,
  },
});

export default style;
