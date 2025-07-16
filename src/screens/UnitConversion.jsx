import { Pressable, StyleSheet, Text, View } from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';

const UnitConversion = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: 'center',
          flexDirection: 'row',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <Pressable
          style={styles.btn}
          onPress={() => navigation.navigate('Length')}
        >
          <FontAwesome6 name="ruler-vertical" size={40} color="#41b9d3ff" />
          <Text style={styles.btnText}>Length</Text>
        </Pressable>
        <Pressable style={styles.btn}>
          <MaterialIcons name="square-foot" size={40} color="#41b9d3ff" />
          <Text style={styles.btnText}>Area</Text>
        </Pressable>
        <Pressable style={styles.btn}>
          <Ionicons name="cube-sharp" size={40} color="#41b9d3ff" />
          <Text style={styles.btnText}>Volume</Text>
        </Pressable>
        <Pressable style={styles.btn}>
          <MaterialIcons name="speed" size={40} color="#41b9d3ff" />
          <Text style={styles.btnText}>Speed</Text>
        </Pressable>
        <Pressable style={styles.btn}>
          <FontAwesome5 name="weight" size={40} color="#41b9d3ff" />
          <Text style={styles.btnText}>Weight</Text>
        </Pressable>
        <Pressable style={styles.btn}>
          <FontAwesome name="thermometer" size={40} color="#41b9d3ff" />
          <Text style={styles.btnText}>Temperature</Text>
        </Pressable>
        <Pressable style={styles.btn}>
          <Octicons name="zap" size={40} color="#41b9d3ff" />
          <Text style={styles.btnText}>Power</Text>
        </Pressable>
        <Pressable style={styles.btn}>
          <FontAwesome6 name="gauge-simple-high" size={40} color="#41b9d3ff" />
          <Text style={styles.btnText}>Pressure</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default UnitConversion;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginLeft: 10,
    flex: 1,
  },
  btn: {
    width: 100,
    height: 180,
    gap: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 17,
    color: 'white',
  },
});
