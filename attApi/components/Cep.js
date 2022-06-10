import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function Cep(props) {
  return (
    <>
        <Text  style={styles.texto}>CIDADE: {props.data.localidade} </Text>
        <Text  style={styles.texto}>ESTADO: {props.data.uf}</Text>
        <Text style={styles.texto}>RUA: {props.data.logradouro}</Text>
        <Text style={styles.texto}>BAIRRO:  {props.data.bairro}</Text>
        <Text style={styles.texto}>DDD: {props.data.ddd}</Text>
    </>
  );
}

const styles = StyleSheet.create({
    texto:{
        fontSize: 15,
        marginTop: 10,
    },
});