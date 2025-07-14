import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Pressable,
  FlatList,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { useState } from 'react';
import { evaluate } from 'mathjs';

const Calculation = () => {
  const [input, setInput] = useState('');
  const Buttons = [
    { id: '1', label: 'C', type: 'text' },
    { id: '2', label: '%', type: 'text' },
    {
      id: '3',
      label: 'erase',
      type: 'icon',
      iconLib: 'Entypo',
      iconName: 'erase',
    },
    { id: '4', label: '÷', type: 'text' },
    { id: '5', label: '7', type: 'text' },
    { id: '6', label: '8', type: 'text' },
    { id: '7', label: '9', type: 'text' },
    { id: '8', label: 'x', type: 'text' },
    { id: '9', label: '4', type: 'text' },
    { id: '10', label: '5', type: 'text' },
    { id: '11', label: '6', type: 'text' },
    { id: '12', label: '-', type: 'text' },
    { id: '13', label: '1', type: 'text' },
    { id: '14', label: '2', type: 'text' },
    { id: '15', label: '3', type: 'text' },
    { id: '16', label: '+', type: 'text' },
    { id: '17', label: '00', type: 'text' },
    { id: '18', label: '0', type: 'text' },
    { id: '19', label: '.', type: 'text' },
    { id: '20', label: '=', type: 'text' },
  ];

  const handlePress = value => {
    if (value === 'C') {
      setInput('');
    } else if (value === '=' && input.trim() !== '') {
      try {
        const expression = input.replace(/x/g, '*').replace(/÷/g, '/');
        const result = evaluate(expression);
        setInput(result.toString());
      } catch (error) {
        setInput('Error');
      }
    } else {
      const lastChar = input.slice(-1);
      const operators = ['+', '-', '*', '/', '.', '%'];
      const currentValue = value === 'x' ? '*' : value === '÷' ? '/' : value;
      const lastValue =
        lastChar === 'x' ? '*' : lastChar === '÷' ? '/' : lastChar;
      if (operators.includes(currentValue) && operators.includes(lastValue)) {
        return;
      }
      if (input === 'Error') {
        setInput(value);
        return;
      }
      if (input === '' && ['+', '*', '/', '%', '.'].includes(currentValue)) {
        return;
      }

      setInput(input + value);
    }
  };
  return (
    <View style={styles.calculationContainer}>
      <View style={styles.inputRow}>
        <TextInput
          placeholder="Enter"
          placeholderTextColor="grey"
          value={input}
          onChangeText={setInput}
          style={styles.input}
        />
      </View>

      <FlatList
        data={Buttons}
        numColumns={4}
        contentContainerStyle={styles.row}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={styles.btn}
            onPress={() =>
              item.type === 'icon'
                ? setInput(prev => prev.slice(0, -1))
                : handlePress(item.label)
            }
          >
            {item.type === 'text' ? (
              <Text style={styles.btnText}>{item.label}</Text>
            ) : item.iconLib === 'Entypo' ? (
              <Entypo name={item.iconName} size={30} color="#41b9d3ff" />
            ) : null}
          </Pressable>
        )}
      />
    </View>
  );
};

export default Calculation;

const styles = StyleSheet.create({
  calculationContainer: {
    paddingTop: 10,
  },
  input: {
    paddingHorizontal: 10,
    paddingVertical: 30,
    height: 100,
    fontSize: 32,
    color: 'white',
    textAlign: 'right',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
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
