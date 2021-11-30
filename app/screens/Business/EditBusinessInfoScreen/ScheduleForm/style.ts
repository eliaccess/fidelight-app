import { StyleSheet } from 'react-native';
import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';
import elevation from 'theme/elevation';

const style = StyleSheet.create({
  itemContainer: {
    marginHorizontal: Dimensions.horizontalSpace,
    marginVertical: Dimensions.space2x,
    backgroundColor: Colors.white,
    borderRadius: Dimensions.borderRadius2x,
    padding: Dimensions.space2x,
    ...elevation(2),
  },
  activeItem: {
    borderLeftWidth: 3,
    borderLeftColor: Colors.accent,
  },
  itemContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dayWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    flex: 0.5,
    marginTop: Dimensions.space1x / 2,
  },
  radioSymbol: {
    width: 10,
    height: 10,
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: Colors.white,
    padding: Dimensions.space1x,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Dimensions.space1x,
  },
  innerRadio: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.black,
  },
  day: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.textBlack,
  },
  startEndTimeHolder: {
    flex: 0.7,
  },
  timeWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Dimensions.space1x,
  },
  timings: {
    fontSize: 12,
    color: Colors.textBlack,
  },
  deleteButton: {
    backgroundColor: Colors.errorBackground,
    borderRadius: Dimensions.borderRadius,
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionIcon: {
    fontSize: 22,
    color: Colors.white,
  },
  addTimingButton: {
    alignSelf: 'flex-end',
    backgroundColor: Colors.accent,
    borderRadius: Dimensions.borderRadius,
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },

  modalContent: {
    padding: Dimensions.space2x,
    width: Dimensions.screenWidth - Dimensions.screenWidth / 6,
    height: 230,
    marginBottom: Dimensions.space5x,
  },
  addTimings: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.textBlack,
  },
  formContainer: {},
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: Dimensions.space2x,
    borderRadius: Dimensions.borderRadius,
    borderColor: Colors.textBlack,
    borderWidth: 0.5,
    marginTop: Dimensions.space2x,
  },
  inputRightIcon: {
    fontSize: 20,
    color: Colors.textGrey,
  },
  datePicker: {
    backgroundColor: Colors.accent,
    paddingTop: Dimensions.space2x,
  },
  timeLabel: {
    fontSize: 14,
    color: Colors.textBlack,
  },
  timeLabelWrapper: {},
  submitButtonWrapper: { marginTop: Dimensions.space2x, height: 60 },
});

export default style;
