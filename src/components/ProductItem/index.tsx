import React from 'react';
import {View, Image, Text, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface ProductItemProps {
  item: {
    id: string;
    title: string;
    image: string;
    avgRating: number;
    ratings: number;
    price: number;
    oldPrice?: number;
  };
}

const ProductItem = ({item}: ProductItemProps) => {
  const {title, image, avgRating, ratings, price, oldPrice} = item;
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('ProductDetails', {id: item.id});
  };

  return (
    <Pressable onPress={onPress}>
      <View style={styles.root}>
        <Image style={styles.image} source={{uri: image}} />
        <View style={styles.rigthContainer}>
          <Text style={styles.title} numberOfLines={3}>
            {title}
          </Text>
          <View style={styles.raiting}>
            {[...Array(5)].map((element, index) => (
              <FontAwesome
                key={index}
                style={styles.star}
                name={
                  index < Math.floor(avgRating)
                    ? 'star'
                    : avgRating - index >= 0.5
                    ? 'star-half-full'
                    : 'star-o'
                }
                size={18}
                color={'#e47911'}
              />
            ))}

            <Text style={styles.reviews}>{ratings}</Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>{price}</Text>
            {oldPrice && <Text style={styles.oldPrice}>{oldPrice}</Text>}
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default ProductItem;
