import { useState } from 'react';
import { TextInput, View } from 'react-native';
import { Pressable, Text } from 'react-native';


export default function Exercicio3() {
  const [nome, setNome] = useState('');
  const [nota1, setNota1] = useState(0);
  const [nota2, setNota2] = useState(0);
  const [nota3, setNota3] = useState(0);
  const [media, setMedia] = useState(0);
  const [situacao, setSituacao] = useState('');
  const [nomeExibido, setNomeExibido] = useState('');

  function calcularMedia() {
    const calcMedia = (Number(nota1) + Number(nota2) + Number(nota3)) / 3;

    setMedia(calcMedia);
    setNomeExibido(nome);

    if (calcMedia >= 7) {
      setSituacao("Aprovado");
    } else if (calcMedia >= 5) {
      setSituacao("Recuperação");
    } else if (calcMedia < 5) {
      setSituacao("Reprovado");
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
        placeholder="Digite sua primeira nota"
        value={nota1}
        onChangeText={setNota1}
        keyboardType="decimal-pad"
        style={{ borderWidth: 1, padding: 10, width: '20%', margin: 10, textAlign: 'center' }}
      />
      <TextInput
      placeholder='Digite sua segunda nota'
      value={nota2}
      onChangeText={setNota2}
      keyboardType="decimal-pad"
      style={{ borderWidth: 1, padding: 10, width: '20%', margin: 10, textAlign: 'center' }}
      />
      <TextInput
      placeholder='Digite sua terceira nota'
      value={nota3}
      onChangeText={setNota3}
      keyboardType="decimal-pad"
      style={{ borderWidth: 1, padding: 10, width: '20%', margin: 10, textAlign: 'center' }}
      />

      <Pressable onPress={calcularMedia} style={{ backgroundColor: '#2196F3', padding: 12, borderRadius: 8 }}>
        <Text style={{ color: 'white' }}>Verificar</Text>
      </Pressable>

      <Text style={{ margin: 8 }}>Nome: {nomeExibido}</Text>
      <Text style={{ margin: 8 }}>Media: {media}</Text>
      <Text style={{ margin: 8 }}>Situação: {situacao}</Text>

    </View>
  );
}