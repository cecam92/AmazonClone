import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import AddressScreen from './src/screen/AddressScreen';

// import HomeScreen from './src/screen/HomeScreen';
// import ProductScreen from './src/screen/ProductScreen';
// import ShoppingCartScreen from './src/screen/ShoppingCartScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {/* <HomeScreen /> */}
      {/* <ProductScreen /> */}
      {/* <ShoppingCartScreen /> */}
      <AddressScreen />
    </SafeAreaView>
  );
};

export default App;
