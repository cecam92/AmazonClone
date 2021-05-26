import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  slider: {
    // width: '100%',
    // height: 280,
    // resizeMode: 'contain',
  },
  image: {
    margin: 10,
    height: 250,
    resizeMode: 'contain',
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    backgroundColor: '#ededed',
    borderColor: '#c9c9c9',
    borderWidth: 1,
    borderRadius: 25,
    margin: 5,
  },
});
