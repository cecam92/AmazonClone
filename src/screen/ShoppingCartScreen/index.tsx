/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, StyleSheet, Text, FlatList, View} from 'react-native';

import Button from '../../components/Button';
import cartItems from '../../components/data/cart';
import CartProductItem from '../../components/CartProductItem';

const ShoppingCartScreen = () => {
  const totalPrice = cartItems.reduce(
    (summedPrice, product) =>
      summedPrice + product.item.price * product.quantity,
    0,
  );
  return (
    <SafeAreaView style={styles.page}>
      <View>
        <View>
          <Text>
            {`Subtotal (${cartItems.length} items) : `}
            <Text
              style={{
                color: '#e47911',
                fontWeight: 'bold',
              }}>{`${totalPrice.toFixed(2)}`}</Text>
          </Text>
        </View>
        <Button
          text="Procced to checkout"
          onPress={() => console.warn('go to checkout')}
          containerStyle={{backgroundColor: '#f7e300', borderColor: '#f7e300'}}
        />
      </View>
      <FlatList
        data={cartItems}
        renderItem={({item}) => <CartProductItem cartItem={item} />}
        showsVerticalScrollIndicator={false}
        keyExtractor={({id}) => id}
      />
    </SafeAreaView>
  );
};

export default ShoppingCartScreen;

const styles = StyleSheet.create({
  page: {
    marginHorizontal: 10,
  },
});
