import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Cep from './components/Cep';
import API from './components/Api';

export default function App() {
  const [cep, setCep] = useState("");
  const [inputCep, setInputCep] = useState(0);
  
  async function buscarCep(){
    const resposta = await API.get(`ws/${inputCep}/json/`);
    setCep(resposta.data);
  }

  function limpar(){
    setCep("");
    setInputCep(0);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Seja Bem Vindo</Text>
      <View style={styles.texto}>
          <Text style={styles.texto}>DIGITE SEU CEP:</Text>
          <TextInput
          placeholder='ex: 11730000'
          keyboardType='numeric'
          style={styles.input}
          onChangeText={(data)=>setInputCep(data)}
          />
          <TouchableOpacity
          style={styles.bloco}
          onPress={buscarCep}>
              <Text style={styles.txtBloco}>BUSCAR</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.bloco}
          onPress={limpar}>
              <Text style={styles.txtBloco}>LIMPAR</Text>
          </TouchableOpacity>
          <Cep data={cep} />


      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6F5FF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto:{
      fontSize: 25,

  },

  input: {
    width: 200,
    borderBottomWidth: 2,
    fontSize: 20,
    borderRadius: 10,
    marginTop: '3%',
    textAlign: 'center',
    backgroundColor: '#E6F5FF'
  },

  txtBloco: {
    marginTop: 10,
      backgroundColor: '#1FC9CC',
      borderWidth: 2,
      borderColor: '#E6F5FF',
      borderRadius: 10,
      width: 200,
      textAlign: 'center',
      height: 40, 
      padding: 5, 
      fontSize: 20,
    },
});
