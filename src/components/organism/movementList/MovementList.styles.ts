import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {Colors} from '~/themes';

export const style = StyleSheet.create({
  container: {
    width: 'auto',
    height: 'auto',
    marginHorizontal: 20,
  },
  subTitle: {
    marginVertical: 20,
  },
  flatList: {
    height: moderateScale(350),
    backgroundColor: Colors.white,
    borderRadius: 10,
  },
  flatListContent: {
    marginVertical: 23,
  },
});
