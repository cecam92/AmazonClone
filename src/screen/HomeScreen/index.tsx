import React from 'react';
import ProductItem from '../../components/ProductItem';
import {SafeAreaView, StyleSheet, FlatList} from 'react-native';
import Products from '../../components/data/products';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.page}>
      <FlatList
        data={Products}
        renderItem={({item}) => <ProductItem item={item} />}
        showsVerticalScrollIndicator={false}
        keyExtractor={({id}) => id}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});
