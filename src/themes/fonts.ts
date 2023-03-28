import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {Colors} from './colors';

export const Fonts = StyleSheet.create({
  titleBold: {
    fontWeight: '800',
    fontSize: moderateScale(20),
    fontFamily: 'Avenir-Regular',
    color: Colors.black,
  },
  titleThin: {
    fontWeight: '400',
    fontSize: moderateScale(20),
    fontFamily: 'Avenir-Regular',
  },
  subTitle: {
    fontWeight: '800',
    fontSize: moderateScale(14),
    fontFamily: 'Avenir-Regular',
    color: Colors.gray,
  },
  points: {
    fontWeight: '800',
    fontSize: moderateScale(24),
    fontFamily: 'Avenir-Regular',
    color: Colors.black,
  },
  bigPoints: {
    fontWeight: '800',
    fontSize: moderateScale(32),
    fontFamily: 'Avenir-Regular',
    color: Colors.white,
  },
  smallPoints: {
    fontWeight: '800',
    fontSize: moderateScale(16),
    fontFamily: 'Avenir-Regular',
    color: Colors.black,
  },
  headerTitle: {
    fontWeight: '800',
    fontSize: moderateScale(24),
    fontFamily: 'Avenir-Regular',
    color: Colors.black,
  },
  detailText: {
    fontWeight: '800',
    fontSize: moderateScale(16),
    fontFamily: 'Avenir-Regular',
    color: Colors.black,
  },
  buttonText: {
    fontWeight: '800',
    fontSize: moderateScale(16),
    fontFamily: 'Avenir-Regular',
    color: Colors.black,
  },
  productName: {
    fontWeight: '800',
    fontSize: moderateScale(14),
    fontFamily: 'Avenir-Regular',
    color: Colors.black,
  },
  productDate: {
    fontWeight: '400',
    fontSize: moderateScale(12),
    fontFamily: 'Avenir-Regular',
    color: Colors.black,
  },
  signPositive: {
    fontWeight: '800',
    fontSize: moderateScale(16),
    fontFamily: 'Avenir-Regular',
    color: Colors.green,
  },
  signNegative: {
    fontWeight: '800',
    fontSize: moderateScale(16),
    fontFamily: 'Avenir-Regular',
    color: Colors.red,
  },
});
