import React from 'react';
import { Dimensions, StyleSheet, StatusBar, Image, View } from 'react-native';
import Texto from '../../../componentes/texto';

const width = Dimensions.get('screen').width;

export default function ListaTopo() {
  const titulo = "Título do Topo"; // Defina o título aqui

  return <>
      <StatusBar />
      <View style={styles.container}>
        <Image source={require('../../../../assets/topo.jpg')} style={styles.header} />
        <Texto style={styles.titulo}>{titulo}</Texto>
      </View>
    </>
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 1, // Espaço entre o título e os produtos
  },
  header: {
    width: "100%",
    height: 200, // Altura ajustada conforme necessário
    backgroundColor: 'white',
  },
  titulo: {
    fontSize: 24, // Tamanho da fonte
    fontWeight: 'bold', // Negrito
    color: 'black', // Cor do texto
    textAlign: 'center', // Alinhamento do texto
    marginTop: 1, // Espaçamento superior
  }
});
