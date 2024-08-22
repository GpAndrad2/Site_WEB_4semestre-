import React from "react";

import { TouchableOpacity, StyleSheet } from "react-native";
import Texto from "./texto";

export default function Botao({textoBotao, clickBotao}) {
    return <TouchableOpacity style={styles.botao} onPress={clickBotao}>
                <Texto style={styles.botaoTexto}>{textoBotao}</Texto>
            </TouchableOpacity>
}

const styles = StyleSheet.create({
botao: {
    marginTop: 16,
    backgroundColor: "red",
    paddingVertical: 16,
    borderRadius: 6,
    width: "95%",
    alignSelf: 'center'
  },
  botaoTexto: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
  },
});