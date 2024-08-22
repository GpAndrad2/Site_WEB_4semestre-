import react from 'react';
import { Dimensions, StyleSheet, StatusBar, Image } from 'react-native';

import Header from '../../../../assets/topo.jpg'
import Texto from '../../../componentes/texto'

//Captura o tamanho da tela que está rodando o app
const width = Dimensions.get('screen').width;

export default function Topo({titulo}) {
  return <>
    <StatusBar />
    <Image source={Header} style={styles.header} />
    <Texto style={styles.titulo}>{titulo}</Texto>
  </>
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 1634 / 2451 * width,
  },
  titulo: {
    width: "100%",
    fontSize: 16,
    position: "absolute",
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    padding: 16,
  }
});