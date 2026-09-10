import { useState } from 'react';
import { TextInput, View } from 'react-native';
import { Pressable, Text } from 'react-native';


export default function Exercicio1() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [idade, setIdade] = useState('');

  const [resultado, setResultado] = useState('');

  function verificarIdade() {
    const idadeNumero = Number(idade)

    if (idadeNumero >= 18) {
      setResultado(`${nome} é maior de idade`);
    } else {
      setResultado(`${nome} é menor de idade`);
    }
  }

  return (
    <View style={{ padding: 40, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
        style={{ borderWidth: 1, padding: 10, width: '20%', margin: 10, textAlign: 'center' }}
      />
      <TextInput
      placeholder='Digite seu sobrenome'
      value={sobrenome}
      onChangeText={setSobrenome}
      style={{ borderWidth: 1, padding: 10, width: '20%', margin: 10, textAlign: 'center' }}
      />
      <TextInput
      placeholder='Digite sua idade'
      value={idade}
      onChangeText={setIdade}
      keyboardType='numeric'
      style={{ borderWidth: 1, padding: 10, width: '20%', margin: 10, textAlign: 'center' }}
      />
      <Pressable onPress={verificarIdade} style={{ backgroundColor: '#2196F3', padding: 12, borderRadius: 8 }}>
        <Text style={{ color: 'white' }}>Verificar</Text>
      </Pressable>

      <Text style={{ margin: 10 }}>{resultado}</Text>
    </View>
  );
}