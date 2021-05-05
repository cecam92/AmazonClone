import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';
const HomeScreen = () => {
  return (
    <View>
      <View style={styles.root}>
        <Image
          style={styles.image}
          source={{
            uri:
              'https://culimbo.com/static/8768f01b27a4c39f5f8837bccc683ecc/19ca5/RickLaptop.png',
          }}
        />
        <View></View>
      </View>
    </View>
  );
};

export default HomeScreen;
