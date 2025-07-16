import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Keypad from '../reusable/Keypad';
import { defaultButtons } from '../screenOptions/Buttons';
import { HandleKeypadInput } from '../reusable/HandleKeypadInput';
import { currencyOptions } from '../screenOptions/Curriencies';
import { useRoute } from '@react-navigation/native';

const ExchangeRate = ({ navigation }) => {
  const [input1, setinput1] = useState('');
  const [input2, setinput2] = useState('');

  const route = useRoute();

  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');

  useEffect(() => {
    if (route.params?.fromCurrency) {
      setFromCurrency(route.params.fromCurrency);
    }
    if (route.params?.toCurrency) {
      setToCurrency(route.params.toCurrency);
    }
  }, [route.params]);

  const fromCurrencyLabel =
    currencyOptions.find(item => item.value === fromCurrency)?.label ||
    fromCurrency;

  const toCurrencyLabel =
    currencyOptions.find(item => item.value === toCurrency)?.label ||
    toCurrency;

  return (
    <View style={styles.calculationContainer}>
      <View style={styles.box1}>
        <View style={styles.currency}>
          <Pressable
            style={styles.currencyName}
            onPress={() =>
              navigation.navigate('Select Currency', { type: 'from' })
            }
          >
            <Text style={styles.currencyNameText}>{fromCurrencyLabel}</Text>
            <MaterialIcons name="navigate-next" size={30} color="grey" />
          </Pressable>

          <TextInput
            placeholder="100"
            placeholderTextColor="#41b9d3ff"
            style={styles.input}
            value={input1}
            onChangeText={setinput1}
            editable={false}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.currency}>
          <Pressable
            style={styles.currencyName}
            onPress={() =>
              navigation.navigate('Select Currency', { type: 'to' })
            }
          >
            <Text style={styles.currencyNameText}>{toCurrencyLabel}</Text>
            <MaterialIcons name="navigate-next" size={30} color="grey" />
          </Pressable>

          <TextInput
            placeholder="0"
            placeholderTextColor="#41b9d3ff"
            style={styles.input}
            value={input2}
            onChangeText={setinput2}
            editable={false}
            keyboardType="numeric"
          />
        </View>
      </View>

      <Keypad
        data={defaultButtons}
        onPress={value => HandleKeypadInput(value, input1, setinput1)}
        btnStyle={styles.btn}
        textStyle={styles.btnText}
      />
    </View>
  );
};

export default ExchangeRate;

const styles = StyleSheet.create({
  calculationContainer: {
    paddingTop: 10,
  },
  box1: {
    marginBottom: 100,
  },
  currency: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  currencyName: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  currencyNameText: {
    color: 'white',
    fontSize: 26,
  },
  input: {
    fontSize: 26,
    color: 'white',
  },

  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    backgroundColor: '#322f2fff',
    padding: 10,
    width: 100,
    height: 100,
  },
  btnText: {
    color: 'white',
    fontSize: 32,
  },
});
