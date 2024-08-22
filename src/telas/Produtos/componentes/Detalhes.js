import react from 'react';
import { StyleSheet, Image, View, Alert, ImageBackground } from 'react-native';

import Logo from '../../../../assets/splash.png'
import Texto from '../../../componentes/texto'
import Botao from '../../../componentes/botao'

export default function Detalhes({ nome, detalhes, preco, botao }) {
  return <View style={styles.produto}>
    <View style={styles.logotipo}>
      <Image source={Logo} style={styles.logo} resizeMode='contain' />
      <Texto style={styles.nome}>{nome}</Texto>
    </View>
    <Texto style={styles.descricao}>{detalhes}</Texto>
    <Texto style={styles.preco}>{preco}</Texto>
    <Botao textoBotao = {botao} clickBotao={()=>(Alert.alert("Item adicionado com sucesso no carrinho"))}/>
  </View>
}

const styles = StyleSheet.create({
  nome: {
    color: "black",
    fontSize: 26,
    //fontFamily: "SpaceGBold",
    fontWeight: 'bold',
    paddingTop: 25,
    paddingLeft: 10,
  },
  descricao: {
    color: "black",
    fontSize: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  preco: {
    color: "black",
    fontSize: 22,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 10,
  },
  logo: {
    width: 80,
    height: 80,
  },
  logotipo: {
    flexDirection: "row",
  },
  produto: {
    backgroundColor: "white",
  }

});