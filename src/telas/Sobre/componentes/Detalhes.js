import react from 'react';
import { StyleSheet, Image, View } from 'react-native';

import Texto from '../../../componentes/texto'

export default function Detalhes({ texto, lanche, comentario }) {
  return <View style={styles.sobre}>
    <View>
      <Texto style={styles.texto}>{texto}</Texto>
      <Image source={lanche} style={styles.lanche} resizeMode='contain' />
      <Texto style={styles.comentario}>{comentario}</Texto>
    </View>
  </View>
}

const styles = StyleSheet.create({
  texto: {
    color: "black",
    lineHeight: 24.5,
    fontSize: 18,
    textAlign: 'justify',
    paddingTop: 25,
    paddingLeft: 20,
    paddingRight: 20,
  },
  lanche: {
    marginTop: 40,
    width: '100%',
    height: 250,
  },
  comentario: {
    color: "black",
    lineHeight: 24.5,
    fontSize: 18,
    textAlign: 'justify',
    paddingTop: 25,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
});