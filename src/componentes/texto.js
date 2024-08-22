import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Texto({ children, style }) {
  // Define a estilização padrão do campo
  let estilo = styles.texto;

  // Verifica se deve exibir a fonte em negrito
  if (style?.fontWeight === "bold") {
    // Negrito, muda a estilização
    estilo = styles.textoNegrito;
  }

  // Aplica o estilo padrão ou negrito, se especificado
  return <Text style={[estilo, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  texto: {
    fontFamily: 'SpaceGRegular', // Fonte normal
  },
  textoNegrito: {
    fontFamily: 'SpaceGBold', // Fonte negrito
    fontWeight: 'normal', // Garante que o texto não será mais negrito além da fonte
  }
});
