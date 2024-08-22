import React from 'react';
import { ScrollView } from 'react-native';
import Topo from './componentes/Topo'
import Detalhes from './componentes/Detalhes'
import Lista from './componentes/lista'

export default function Produtos_Lista ({ topo, detalhes, lista }) {

  return <ScrollView>
        <Topo {...topo} />
        {/* <Detalhes {...detalhes} /> */}
        <Lista {...lista} />
      </ScrollView>
}
