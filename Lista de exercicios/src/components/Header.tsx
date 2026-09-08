import { useNavigation } from '@react-navigation/native';
import { Pressable, Text, View } from 'react-native';

export default function Header() {
  const navigation = useNavigation();

  return (
    <View style={{ flexDirection: 'row', gap: 12, padding: 12, justifyContent: 'center' }}>
      <Pressable onPress={() => navigation.navigate('Exercicio1')}><Text>Maioridade</Text></Pressable>
      <Pressable onPress={() => navigation.navigate('Exercicio2')}><Text>IMC</Text></Pressable>
      <Pressable onPress={() => navigation.navigate('Exercicio3')}><Text>Média</Text></Pressable>
      <Pressable onPress={() => navigation.navigate('Exercicio4')}><Text>Temperatura</Text></Pressable>
      <Pressable onPress={() => navigation.navigate('Exercicio5')}><Text>Calculadora</Text></Pressable>
    </View>
  );
}