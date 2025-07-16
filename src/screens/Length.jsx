import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Keypad from '../reusable/Keypad';
import { defaultButtons } from '../screenOptions/Buttons';
import { useRoute, useNavigation } from '@react-navigation/native';
import { LengthOptions } from '../screenOptions/LengthOptions';

const conversionRates = {
  m: 1,
  km: 1000,
  cm: 0.01,
  mm: 0.001,
  dm: 0.1,
  µm: 1e-6,
  nm: 1e-9,
  pm: 1e-12,
  in: 0.0254,
  ft: 0.3048,
  yd: 0.9144,
  mi: 1609.34,
  ly: 9.461e15,
  pc: 3.086e16,
  AU: 1.496e11,
  LD: 3.844e8,
};

const Length = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [fromUnit, setFromUnit] = useState('m');
  const [toUnit, setToUnit] = useState('km');

  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    if (route.params?.fromUnit) {
      setFromUnit(route.params.fromUnit);
    }
    if (route.params?.toUnit) {
      setToUnit(route.params.toUnit);
    }
  }, [route.params]);

  useEffect(() => {
    convert();
  }, [input1, fromUnit, toUnit]);

  const convert = () => {
    const num = parseFloat(input1);
    if (isNaN(num)) {
      setInput2('');
      return;
    }

    const from = conversionRates[fromUnit];
    const to = conversionRates[toUnit];

    if (!from || !to) {
      setInput2('Invalid');
      return;
    }

    const converted = (num * from) / to;
    setInput2(converted.toFixed(4));
  };

  const handlePress = value => {
    if (value === 'C') {
      setInput1('');
      setInput2('');
    } else if (value === 'erase') {
      setInput1(input1.slice(0, -1));
    } else if (value === '=') {
      convert();
    } else {
      setInput1(prev => prev + value);
    }
  };

  const getLabel = val =>
    LengthOptions.find(item => item.value === val)?.label || val;

  return (
    <View style={styles.calculationContainer}>
      <View style={styles.box1}>
        <View style={styles.unit}>
          <Pressable
            style={styles.unitName}
            onPress={() =>
              navigation.navigate('Select Unit', {
                type: 'from',
                options: LengthOptions,
              })
            }
          >
            <Text style={styles.unitNameText}>{getLabel(fromUnit)}</Text>
            <MaterialIcons name="navigate-next" size={30} color="grey" />
          </Pressable>

          <TextInput
            placeholder="100"
            placeholderTextColor="#41b9d3ff"
            style={styles.input}
            value={input1}
            editable={false}
          />
        </View>

        <View style={styles.unit}>
          <Pressable
            style={styles.unitName}
            onPress={() =>
              navigation.navigate('Select Unit', {
                type: 'to',
                options: LengthOptions,
              })
            }
          >
            <Text style={styles.unitNameText}>{getLabel(toUnit)}</Text>
            <MaterialIcons name="navigate-next" size={30} color="grey" />
          </Pressable>

          <TextInput
            placeholder="0"
            placeholderTextColor="#41b9d3ff"
            style={styles.input}
            value={input2}
            editable={false}
          />
        </View>
      </View>

      <Keypad
        data={defaultButtons}
        onPress={handlePress}
        btnStyle={styles.btn}
        textStyle={styles.btnText}
        styles={styles.keypad}
      />
    </View>
  );
};

export default Length;

const styles = StyleSheet.create({
  calculationContainer: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  keypad: {
    flex: 1,
  },
  box1: {
    flex: 1,
    marginBottom: 100,
  },
  unit: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  unitName: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  unitNameText: {
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
