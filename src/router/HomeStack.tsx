/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screen/HomeScreen';
import ProductScreen from '../screen/ProductScreen';
import {SafeAreaView, TextInput, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {styles} from './styles';
const Stack = createStackNavigator();

interface HeaderComponentProps {
  searchValue: string;
  setSearchValue: any;
}
const HeaderComponent = ({
  searchValue,
  setSearchValue,
}: HeaderComponentProps) => {
  return (
    <SafeAreaView style={styles.headerContainer}>
      <View style={styles.container}>
        <Feather name="search" size={20} />
        <TextInput
          placeholder="Search..."
          style={styles.headerTextInput}
          value={searchValue}
          onChangeText={setSearchValue}
        />
      </View>
    </SafeAreaView>
  );
};

const HomeStack = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <Stack.Navigator
      screenOptions={{
        header: () => (
          <HeaderComponent
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        ),
      }}>
      <Stack.Screen name="HomeScreen" options={{title: 'Home'}}>
        {() => <HomeScreen searchVaue={searchValue} />}
      </Stack.Screen>
      <Stack.Screen component={ProductScreen} name="ProductDetails" />
    </Stack.Navigator>
  );
};

export default HomeStack;
