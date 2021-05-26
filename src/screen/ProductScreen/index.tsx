import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
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
  const {
    id,
    title,
    description,
    image,
    images,
    options,
    avgRating,
    ratings,
    price,
    oldPrice,
  } = Product;
  const [selectedOption, setSelectedOption] = useState(
    options ? options[0] : null,
  );
  const [qty, setQty] = useState(0);

  return (
    <ScrollView style={styles.ProductContainer}>
      <Text style={styles.title}>{title}</Text>
      {/* image Carouse */}
      <ImageCarousel images={images} />
      {/* option Selector */}
      <Picker
        selectedValue={selectedOption}
        onValueChange={itemValue => setSelectedOption(itemValue)}>
        {options.map((option, index) => (
          <Picker.Item key={index} label={option} value={option} />
        ))}
      </Picker>

      {/* Price */}
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{`From $${price}`}</Text>
        {oldPrice && <Text style={styles.oldPrice}>{` $${oldPrice}`}</Text>}
      </View>

      {/* Descripton */}
      <Text style={styles.description}>{description}</Text>

      {/* quantity Selection */}
      <QuantitySelector quantity={qty} setQuantity={setQty} />
      {/* Button */}
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
