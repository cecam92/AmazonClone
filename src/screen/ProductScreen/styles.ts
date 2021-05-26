import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  ProductContainer: {
    padding: 10,
    backgroundColor: 'white',
  },
  title: {},
  description: {
    marginVertical: 10,
    lineHeight: 19,
  },
  oldPrice: {
    fontSize: 12,
    marginLeft: 5,
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
