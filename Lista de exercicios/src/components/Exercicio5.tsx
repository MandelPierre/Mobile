import { useState } from 'react';
import { TextInput, View, Pressable, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';


export default function Exercicio5() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [operacao, setOperacao] = useState('+');
  const [resultado, setResultado] = useState('');

  function calcular() {
    const n1 = Number(numero1);
    const n2 = Number(numero2);

    let resultadoCalculado;

    switch (operacao) {
      case '+':
        resultadoCalculado = n1 + n2;
        break;

      case '-':
        resultadoCalculado = n1 - n2;
        break;

      case '*':
        resultadoCalculado = n1 * n2;
        break;

      case '/':
        resultadoCalculado = n1 / n2;
        break;
    }

    setResultado(resultadoCalculado);
  }

  return (
    <View style={{ padding: 40, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        placeholder="Digite o primeiro numero"
        value={numero1}
        onChangeText={setNumero1}
        keyboardType='decimal-pad'
        style={{ borderWidth: 1, padding: 10, width: '15%', margin: 10, textAlign: 'center' }}
      />
      <TextInput
      placeholder='Digite o segundo numero'
      value={numero2}
      onChangeText={setNumero2}
      keyboardType='decimal-pad'
      style={{ borderWidth: 1, padding: 10, width: '15%', margin: 15, textAlign: 'center' }}
      />

      <Picker
        selectedValue={operacao}
        onValueChange={(valor) => setOperacao(valor)}
        style={{ margin: 10 }}
      >
        <Picker.Item label="Somar (+)" value="+"/>
        <Picker.Item label="Subtrair (-)" value="-"/>
        <Picker.Item label="Multiplicar (*)" value="*"/>
        <Picker.Item label="Dividir (/)" value="/"/>

      </Picker>

      <Pressable onPress={calcular} style={{ backgroundColor: '#2196F3', padding: 12, borderRadius: 8, margin: 10 }}>
        <Text style={{ color: 'white' }}>Calcular</Text>
      </Pressable>

      <Text style={{ margin: 10 }}>Resultado: {resultado}</Text>

    </View>
  );
}