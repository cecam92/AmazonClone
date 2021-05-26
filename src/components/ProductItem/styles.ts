import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 5,
  },
  rigthContainer: {
    marginLeft: 10,
    flex: 3,
  },

  image: {
    flex: 2,
    height: 150,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 18,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  raiting: {
    flexDirection: 'row',
    alignContent: 'center',
    marginVertical: 5,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    margin: 1,
  },
  reviews: {
    marginLeft: 3,
    color: '#888',
  },
  oldPrice: {
    fontSize: 12,
    marginLeft: 5,
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
  },
});
