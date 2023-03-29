import {StyleSheet} from 'react-native';
import {Colors} from '~/themes';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  imageContainer: {
    width: 350,
    height: 350,
    marginVertical: 20,
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,

    elevation: 10,
  },
  image: {
    flex: 1,
  },
  labelDetails: {
    marginTop: 12,
    marginBottom: 20,
  },
  labelPoints: {
    marginTop: 20,
    marginBottom: 32,
  },
  buttonContainer: {
    height: 50,
    marginTop: 47,
    marginBottom: 40,
  },
});
