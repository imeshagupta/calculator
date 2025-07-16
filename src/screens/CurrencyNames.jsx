import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { useState } from 'react';
import { currencyOptions } from '../screenOptions/Curriencies';

const CurrencyNames = ({ navigation, route }) => {
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');

  const { type } = route.params || {};

  const handleCurrencySelect = selectedCurrency => {
    if (type === 'from') {
      setFromCurrency(selectedCurrency);
    } else {
      setToCurrency(selectedCurrency);
    }

    navigation.navigate('Home', {
      fromCurrency: type === 'from' ? selectedCurrency : fromCurrency,
      toCurrency: type === 'to' ? selectedCurrency : toCurrency,
      view: 1,
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={currencyOptions}
        keyExtractor={item => item.value}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleCurrencySelect(item.value)}>
            <Text style={styles.item}>{item.label}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CurrencyNames;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  item: {
    fontSize: 16,
    color: 'white',
    paddingVertical: 12,
    borderBottomColor: '#333',
    borderBottomWidth: 1,
  },
});
