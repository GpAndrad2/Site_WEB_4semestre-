import react from "react";

import { ScrollView } from 'react-native';

import Topo from './componentes/Topo'
import Detalhes from './componentes/Detalhes'

export default function Sobre({ topo, detalhes }) {

  return <ScrollView>
        <Topo {...topo} />
        <Detalhes {...detalhes} />
      </ScrollView>
}
