/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import countryList from 'country-list';

import {Picker} from '@react-native-picker/picker';
import {styles} from './styles';
import Button from '../../components/Button';

const AddressScreen = () => {
  const countries = countryList.getData();
  const [selectedCountry, setSelectedCountry] = useState(countries[0].code);
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [addressError, setAddressError] = useState('');

  const onCheckout = () => {
    if (addressError) {
      Alert.alert('Please fix all the errors');
      return;
    }

    if (!fullName) {
      Alert.alert('Please fill in the full name field');
      return;
    }
    if (!phoneNumber) {
      Alert.alert('Please fill in the phone field');
      return;
    }
  };

  const validateAddress = () => {
    if (address.length < 3 && address.length >= 1) {
      setAddressError('Address is too short');
    }
    if (address.length > 10) {
      setAddressError('Address is too long');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 20 : 0}>
      <ScrollView style={styles.root}>
        <View style={styles.row}>
          <Picker
            selectedValue={selectedCountry}
            onValueChange={setSelectedCountry}>
            {countries.map(country => (
              <Picker.Item
                key={country.code}
                value={country.code}
                label={country.name}
              />
            ))}
          </Picker>
        </View>
        {/* Full Name  */}
        <View style={styles.row}>
          <Text style={styles.label}>Full Name (First and Last name)</Text>
          <TextInput
            style={styles.input}
            placeholder={'Full Name'}
            value={fullName}
            onChangeText={setFullName}
          />
        </View>
        {/* PhoneNumber */}
        <View style={styles.row}>
          <Text style={styles.label}>Phone number</Text>
          <TextInput
            style={styles.input}
            placeholder={'Phone number'}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Address</Text>
          <TextInput
            style={styles.input}
            placeholder={'Address'}
            value={address}
            onChangeText={text => {
              setAddress(text);
              setAddressError('');
            }}
            onEndEditing={validateAddress}
          />
          {!!addressError && (
            <Text style={{color: 'red'}}> {addressError} </Text>
          )}
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>City</Text>
          <TextInput
            style={styles.input}
            placeholder={'City'}
            value={city}
            onChangeText={setCity}
          />
        </View>
        <Button text="Checkout" onPress={onCheckout} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddressScreen;
