import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home';
import Calculation from './src/screens/Calculation';
import ExchangeRate from './src/screens/ExchangeRate';
import UnitConversion from './src/screens/UnitConversion';
import CurrencyNames from './src/screens/CurrencyNames';
import Length from './src/screens/Length';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Calculation"
        component={Calculation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ExchangeRate"
        component={ExchangeRate}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UnitConversion"
        component={UnitConversion}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Select Currency" component={CurrencyNames} />
      <Stack.Screen name="Length" component={Length} />
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
