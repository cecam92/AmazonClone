import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {styles} from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Ionicons from 'react-native-vector-icons/Ionicons';

interface QtyProps {
  quantity: number;
  setQuantity: Function;
}
const QuantitySelector = ({quantity, setQuantity}: QtyProps) => {
  const onMinus = () => {
    setQuantity(quantity > 0 ? quantity - 1 : quantity);
  };
  const onPlus = () => {
    setQuantity(quantity + 1);
  };
  return (
    <View style={styles.SelectorContainer}>
      <Pressable onPress={onMinus} style={styles.button}>
        <Ionicons
          style={styles.iconButton}
          name="ios-trash-bin-outline"
          size={23}
        />
        {/* <Text style={styles.iconButton}>-</Text> */}
      </Pressable>
      <Text style={styles.quantity}>{quantity}</Text>

      <Pressable onPress={onPlus} style={styles.button}>
        <AntDesign
          name="plus"
          color="black"
          size={20}
          style={styles.iconButton}
        />
        {/* <Text style={styles.iconButton}>+</Text> */}
      </Pressable>
    </View>
  );
};

export default QuantitySelector;
