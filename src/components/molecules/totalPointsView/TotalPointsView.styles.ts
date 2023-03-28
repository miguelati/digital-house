import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {Colors} from '~/themes';

export const style = StyleSheet.create({
  mainContainer: {height: 203, width: '100%'},
  subTitleContainer: {margin: 20, height: 20},
  pointsContainer: {alignItems: 'center', justifyContent: 'center'},
  container: {
    height: moderateScale(143),
    width: moderateScale(286),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.blue,
    borderRadius: moderateScale(20),
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,

    elevation: 10,
  },
  month: {
    position: 'absolute',
    top: 21,
    left: 18,
  },
});
