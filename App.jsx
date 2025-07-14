import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home';
import Calculation from './src/screens/Calculation';
import ExchangeRate from './src/screens/ExchangeRate';
import UnitConversion from './src/screens/UnitConversion';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Calculation" component={Calculation} />
      <Stack.Screen name="ExchangeRate" component={ExchangeRate} />
      <Stack.Screen name="UnitConversion" component={UnitConversion} />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
