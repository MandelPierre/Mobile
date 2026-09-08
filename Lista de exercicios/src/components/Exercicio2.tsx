import { useState } from 'react';
import { TextInput, View } from 'react-native';
import { Pressable, Text } from 'react-native';


export default function Exercicio1() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');
  const [classificacao, setClassificacao] = useState('');

  function calcularIMC() {
    const resultadoIMC = Number(peso) / (Number(altura) * Number(altura))
    setResultado(resultadoIMC.toFixed(2));
    verificarClassificacao(resultadoIMC);
  }

  function verificarClassificacao(imc) {
    if (imc < 18.5) {
        setClassificacao('Abaixo do peso');
    } else if (imc < 25) {
        setClassificacao('Peso normal');
    } else if (imc < 30) {
        setClassificacao('Sobrepeso');
    } else {
        setClassificacao('Obesidade');
    }
  }

  return (
    <View style={{ padding: 40, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        placeholder="Digite seu peso"
        value={peso}
        onChangeText={setPeso}
        style={{ borderWidth: 1, padding: 10, width: '20%', margin: 10 }}
      />
      <TextInput
      placeholder='Digite seu altura'
      value={altura}
      onChangeText={setAltura}
      style={{ borderWidth: 1, padding: 10, width: '20%', margin: 10 }}
      />

      <Pressable onPress={calcularIMC} style={{ backgroundColor: '#2196F3', padding: 12, borderRadius: 8, margin: 10 }}>
        <Text style={{ color: 'white' }}>Verificar</Text>
      </Pressable>

      <Text style={{ margin: 10 }}>IMC: {resultado}</Text>
      <Text style={{ margin: 5 }}>Classificação: {classificacao}</Text>

    </View>
  );
}