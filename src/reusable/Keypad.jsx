import { FlatList, Pressable, Text, StyleSheet } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const Keypad = ({ data, onPress, btnStyle, textStyle }) => {
  return (
    <FlatList
      data={data}
      numColumns={4}
      contentContainerStyle={styles.row}
      keyExtractor={item => item.id}
      renderItem={({ item }) => {
        const isEqual = item.label === '=';
        const isClear = item.label === 'C';
        const doubleZero = item.label === '00';

        return (
          <Pressable
            style={[styles.btn, btnStyle, doubleZero && styles.doubleZeroBtn]}
            onPress={() =>
              item.type === 'icon' ? onPress('erase') : onPress(item.label)
            }
          >
            {item.type === 'text' ? (
              <Text
                style={[
                  styles.btnText,
                  textStyle,
                  isEqual && styles.equalBtnText,
                  isClear && styles.clearBtnText,
                ]}
              >
                {item.label}
              </Text>
            ) : item.iconLib === 'Entypo' ? (
              <Entypo name={item.iconName} size={30} color="#41b9d3ff" />
            ) : null}
          </Pressable>
        );
      }}
    />
  );
};

export default Keypad;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
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
  equalBtnText: {
    color: '#41b9d3ff',
  },
  clearBtnText: {
    color: '#41b9d3ff',
  },
  doubleZeroBtn: {
    width: 200,
  },
});
