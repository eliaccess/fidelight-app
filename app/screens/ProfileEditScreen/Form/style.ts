import { StyleSheet } from 'react-native';
import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';

const style = StyleSheet.create({
  container: {
    padding: Dimensions.space1x,
    width: '100%',
    backgroundColor: Colors.white,
    height: Dimensions.screenHeight,
    paddingTop: Dimensions.space3x,
  },
  profilePictureContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 1,
    alignSelf: 'center',
    marginVertical: Dimensions.space6x,
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 40,
  },
  profileEditIcon: {
    position: 'absolute',
    bottom: -5,
    right: -2,
    backgroundColor: Colors.accent,
    padding: Dimensions.space1x,
    borderRadius: Dimensions.borderRadius10x,
    alignItems: 'center',
    justifyContent: 'center',
  },
  editIcon: {
    fontSize: 16,
    color: Colors.white,
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
    padding: Dimensions.space1x,
    marginVertical: Dimensions.space3x,
  },
  dateSelectorWrapper: {
    alignItems: 'center',
    alignSelf: 'center',
    position: 'relative',
    width: '95%',
    marginBottom: Dimensions.space1x,
  },
});

export default style;
