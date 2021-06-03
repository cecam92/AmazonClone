import React from 'react';
import {Text, Pressable} from 'react-native';
import {styles} from './styles';
interface ButtonProps {
  text: string;
  onPress: () => void;
  containerStyle?: any;
}
const Button = ({text, onPress, containerStyle}: ButtonProps) => {
  return (
    <Pressable onPress={onPress} style={[styles.root, containerStyle]}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
};

export default Button;
