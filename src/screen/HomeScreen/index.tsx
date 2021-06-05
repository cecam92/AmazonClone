import React from 'react';
import ProductItem from '../../components/ProductItem';
import {View, StyleSheet, FlatList} from 'react-native';
import Products from '../../components/data/products';

const HomeScreen = ({searchVaue}: {searchVaue: string}) => {
  console.log(searchVaue);
  return (
    <View style={styles.page}>
      <FlatList
        data={Products}
        renderItem={({item}) => <ProductItem item={item} />}
        showsVerticalScrollIndicator={false}
        keyExtractor={({id}) => id}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});
