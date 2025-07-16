import { StyleSheet, Text, View, Pressable } from 'react-native';
import Calculation from './Calculation';
import { useFocusEffect } from '@react-navigation/native';
import { useState } from 'react';
import ExchangeRate from './ExchangeRate';
import UnitConversion from './UnitConversion';

const Home = ({ route, navigation }) => {
  const [view, setView] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');

  useFocusEffect(() => {
    if (route.params?.fromCurrency) {
      setFromCurrency(route.params.fromCurrency);
    }
    if (route.params?.toCurrency) {
      setToCurrency(route.params.toCurrency);
    }
    if (route.params?.view !== undefined) {
      setView(route.params.view);
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.headingRow}>
        <Pressable onPress={() => setView(0)}>
          <Text
            style={[
              styles.title,
              view === 0
                ? {
                    color: '#41b9d3ff',
                    borderColor: '#41b9d3ff',
                    borderBottomWidth: 1,
                  }
                : { color: 'white' },
            ]}
          >
            Calculator
          </Text>
        </Pressable>
        <Pressable onPress={() => setView(1)}>
          <Text
            style={[
              styles.title,
              view === 1
                ? {
                    color: '#41b9d3ff',
                    borderColor: '#41b9d3ff',
                    borderBottomWidth: 1,
                  }
                : { color: 'white' },
            ]}
          >
            Exchange Rate
          </Text>
        </Pressable>
        <Pressable onPress={() => setView(2)}>
          <Text
            style={[
              styles.title,
              view === 2
                ? {
                    color: '#41b9d3ff',
                    borderColor: '#41b9d3ff',
                    borderBottomWidth: 1,
                  }
                : { color: 'white' },
            ]}
          >
            Unit Conversion
          </Text>
        </Pressable>
      </View>

      {view === 0 && <Calculation />}
      {view === 1 && (
        <ExchangeRate
          toCurrency={toCurrency}
          fromCurrency={fromCurrency}
          navigation={navigation}
        />
      )}
      {view === 2 && <UnitConversion navigation={navigation} />}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'black',
  },
  headingRow: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  headingBtn: {
    backgroundColor: 'red',
  },
  title: {
    fontSize: 17,
    marginHorizontal: 5,
  },
});
