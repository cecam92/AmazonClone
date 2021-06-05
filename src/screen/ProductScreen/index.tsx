import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {styles} from './styles';
import Product from '../../components/data/product';
import {Picker} from '@react-native-picker/picker';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';

interface Product {
  id: string;
  title: String;
  image: string;
  images: string[];
  avgRating: number;
  ratings: number;
  price: number;
  oldPrice: number;
}

const ProductScreen = () => {
  const {title, description, images, options, price, oldPrice} = Product;
  const [selectedOption, setSelectedOption] = useState(
    options ? options[0] : null,
  );
  const [qty, setQty] = useState(0);

  const route = useRoute();
  const {id} = route.params;

  return (
    <ScrollView style={styles.ProductContainer}>
      <Text style={styles.title}>{title}</Text>
      <ImageCarousel images={images} />
      <Picker
        selectedValue={selectedOption}
        onValueChange={itemValue => setSelectedOption(itemValue)}>
        {options.map((option, index) => (
          <Picker.Item key={index} label={option} value={option} />
        ))}
      </Picker>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{`From $${price}`}</Text>
        {oldPrice && <Text style={styles.oldPrice}>{` $${oldPrice}`}</Text>}
      </View>
      <Text style={styles.description}>{description}</Text>
      <QuantitySelector quantity={qty} setQuantity={setQty} />
      <Button
        text="Add To Cart"
        onPress={() => {
          console.warn('Add To Cart');
        }}
      />
      <Button
        text="Buy Now"
        onPress={() => {
          console.warn('Buy Now');
        }}
      />
    </ScrollView>
  );
};

export default ProductScreen;
