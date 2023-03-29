import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    marginVertical: 4,
    paddingHorizontal: 10,
    justifyContent: 'space-around',
  },
  imageContainer: {flex: 2},
  image: {width: 55, height: 55, borderRadius: 10},
  detailsContainer: {
    flex: 4,
    justifyContent: 'space-evenly',
    marginLeft: 10,
  },
  pointsContainer: {
    flex: 2,
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
  },
  arrowContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  arrow: {
    margin: 10,
  },
});
