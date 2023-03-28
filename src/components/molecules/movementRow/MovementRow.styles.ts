import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    marginVertical: 4,
    paddingHorizontal: 10,
    justifyContent: 'space-around',
  },
  imageContainer: {width: 'auto'},
  image: {width: 55, height: 55, borderRadius: 10},
  detailsContainer: {
    justifyContent: 'space-evenly',
    marginLeft: 10,
  },
  pointsContainer: {
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
  },
  arrowContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
  },
  arrow: {
    margin: 10,
  },
});
