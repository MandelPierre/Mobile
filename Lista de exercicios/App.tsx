import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Header from './src/components/Header';
import Exercicio1 from './src/components/Exercicio1';
import Exercicio2 from './src/components/Exercicio2';
import Exercicio3 from './src/components/Exercicio3';
import Exercicio4 from './src/components/Exercicio4';
import Exercicio5 from './src/components/Exercicio5';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ header: () => <Header /> }}>
        <Stack.Screen name="Exercicio1" component={Exercicio1} />
        <Stack.Screen name="Exercicio2" component={Exercicio2} />
        <Stack.Screen name="Exercicio3" component={Exercicio3} />
        <Stack.Screen name="Exercicio4" component={Exercicio4} />
        <Stack.Screen name="Exercicio5" component={Exercicio5} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}