import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ShoppingCartScreen from '../screen/ShoppingCartScreen';
import AddressScreen from '../screen/AddressScreen';
const Stack = createStackNavigator();

const ShoppingStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={ShoppingCartScreen}
        name="shoppingCartScreen"
        options={{title: 'Cart'}}
      />
      <Stack.Screen
        component={AddressScreen}
        name="addressDetails"
        options={{title: 'Shipping'}}
      />
    </Stack.Navigator>
  );
};

export default ShoppingStack;
