import { useState } from 'react';
import { TextInput, View } from 'react-native';
import { Pressable, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';


export default function Exercicio4() {
  const [tipoConversao, setTipoConversao] = useState('celsius');
  const [temperatura, setTemperatura] = useState('');
  const [resultado, setResultado] = useState('');

  function converter() {
    if (tipoConversao === 'celsius') {
      const fahrenheit = (Number(temperatura) * 9 / 5) + 32;
      setResultado(fahrenheit);
    } else {
      const celsius = (Number(temperatura) - 32) * 5 / 9;
      setResultado(celsius);
    }
  }

  return (
    <View style={{ padding: 40, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Picker
        style={{ margin: 10 }}
        selectedValue={tipoConversao}
        onValueChange={(valor) => setTipoConversao(valor)}
      >
        <Picker.Item
          label="Celsius → Fahrenheit"
          value="celsius"
        />

        <Picker.Item
          label="Fahrenheit → Celsius"
          value="fahrenheit"
        />
      </Picker>
      <TextInput
        placeholder={
          tipoConversao === 'celsius'
            ? 'Digite a temperatura em Celsius'
            : 'Digite a temperatura em Fahrenheit'
        }
        value={temperatura}
        onChangeText={setTemperatura}
        keyboardType="decimal-pad"
        style={{ margin: 10, width: 230, textAlign: 'center', padding: 5}}
      />
      <Pressable onPress={converter} style={{ backgroundColor: '#2196F3', padding: 12, borderRadius: 8 }}>
        <Text style={{ color: 'white', margin: 2 }}>Verificar</Text>
      </Pressable>

      <Text style={{ margin: 10 }}>
        {tipoConversao === 'celsius'
          ? `Resultado em Fahrenheit: ${resultado}`
          : `Resultado em Celsius: ${resultado}`
        }
      </Text>

    </View>
  );
}