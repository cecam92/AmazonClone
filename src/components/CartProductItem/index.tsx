import React, {FunctionComponent, useState} from 'react';
import {View, Image, Text} from 'react-native';

import QuantitySelector from '../QuantitySelector';
import {styles} from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface CartProductItemProps {
  cartItem: {
    id: string;
    quantity: number;
    option?: string;
    item: {
      id: string;
      title: string;
      image: string;
      avgRating: number;
      ratings: number;
      price: number;
      oldPrice?: number;
    };
  };
}
const CartProductItem: FunctionComponent<CartProductItemProps> = ({
  cartItem,
}) => {
  const {id, quantity: quantityProp, option, item} = cartItem;
  const [quantity, setQuantity] = useState(quantityProp);
  const {title, image, avgRating, ratings, price, oldPrice} = item;

  return (
    <View style={styles.root}>
      <View style={styles.productItemContainer}>
        <Image style={styles.image} source={{uri: image}} />
        <View style={styles.rigthContainer}>
          <Text style={styles.title} numberOfLines={3}>
            {title}
          </Text>
          <View style={styles.raiting}>
            {[...Array(5)].map((element, index) => (
              <FontAwesome
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
      <View style={styles.quantityContainer}>
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      </View>
    </View>
  );
};

export default CartProductItem;
