import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {Colors} from './colors';

export const Fonts = StyleSheet.create({
  titleBold: {
    fontWeight: '800',
    fontSize: moderateScale(20),
    fontFamily: 'Avenir-Black',
    color: Colors.black,
  },
  titleThin: {
    fontWeight: '400',
    fontSize: moderateScale(20),
    fontFamily: 'Avenir-Book',
    color: Colors.black,
  },
  subTitle: {
    fontWeight: '800',
    fontSize: moderateScale(14),
    fontFamily: 'Avenir-Black',
    color: Colors.gray,
  },
  points: {
    fontWeight: '800',
    fontSize: moderateScale(24),
    fontFamily: 'Avenir-Black',
    color: Colors.black,
  },
  monthPoints: {
    fontWeight: '800',
    fontSize: moderateScale(16),
    fontFamily: 'Avenir-Black',
    color: Colors.white,
  },
  bigPoints: {
    fontWeight: '800',
    fontSize: moderateScale(32),
    fontFamily: 'Avenir-Black',
    color: Colors.white,
  },
  smallPoints: {
    fontWeight: '800',
    fontSize: moderateScale(16),
    fontFamily: 'Avenir-Black',
    color: Colors.black,
  },
  headerTitle: {
    fontWeight: '800',
    fontSize: moderateScale(24),
    fontFamily: 'Avenir-Black',
    color: Colors.black,
  },
  detailText: {
    fontWeight: '800',
    fontSize: moderateScale(16),
    fontFamily: 'Avenir-Black',
    color: Colors.black,
  },
  detailPointsText: {
    fontWeight: '800',
    fontSize: moderateScale(20),
    fontFamily: 'Avenir-Black',
    color: Colors.black,
  },
  buttonText: {
    fontWeight: '800',
    fontSize: moderateScale(16),
    fontFamily: 'Avenir-Black',
    color: Colors.white,
  },
  productName: {
    fontWeight: '800',
    fontSize: moderateScale(14),
    fontFamily: 'Avenir-Black',
    color: Colors.black,
  },
  productDate: {
    fontWeight: '400',
    fontSize: moderateScale(12),
    fontFamily: 'Avenir-Book',
    color: Colors.black,
  },
  signPositive: {
    fontWeight: '800',
    fontSize: moderateScale(16),
    fontFamily: 'Avenir-Black',
    color: Colors.green,
  },
  signNegative: {
    fontWeight: '800',
    fontSize: moderateScale(16),
    fontFamily: 'Avenir-Black',
    color: Colors.red,
  },
});
