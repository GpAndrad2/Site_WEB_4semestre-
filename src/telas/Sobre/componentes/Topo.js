import react from 'react';
import { Dimensions, StyleSheet, StatusBar, Image } from 'react-native';

import Header from '../../../../assets/macaco.png'

//Captura o tamanho da tela que está rodando o app
const width = Dimensions.get('screen').width;

export default function Topo() {
  return <>
    <StatusBar />
    <Image source={Header} style={styles.header} resizeMode='contain' />
  </>
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 1634 / 2451 * width,
    alignSelf: 'center',
    backgroundColor: 'red',
  }
});