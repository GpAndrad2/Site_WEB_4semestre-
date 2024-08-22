import { useFonts, SpaceGrotesk_300Light, SpaceGrotesk_700Bold } from '@expo-google-fonts/space-grotesk';
import { useState, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Texto from './src/componentes/texto';    // Importação do componente Texto
import Produto from './src/telas/Produtos/';
import Sobre from './src/telas/Sobre/';
import Produtos_Lista from './src/telas/Produtos_Lista/';
import VideoScreen from './src/telas/video'; // Importação do componente VideoScreen

import mockProduto from './src/mocks/produto/';
import mockSobre from './src/mocks/sobre/';
import mockProdutos_Lista from './src/mocks/produtos_lista/';

// Audio
import { Audio } from 'expo-av';

function MenuAudio() {
  const [audioStatus, setAudioStatus] = useState(false);
  const [sound, setSound] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      if (audioStatus) {
        setLoading(true);
        const { sound } = await Audio.Sound.createAsync(require('./assets/acdc_highway_to_hell.mp3'));
        setSound(sound);
        try {
          await sound.playAsync();
        } catch (e) {
          console.log(e);
        }
        setLoading(false);
      } else {
        if (sound) {
          try {
            await sound.stopAsync();
            await sound.unloadAsync();
          } catch (e) {
            console.log(e);
          }
        }
      }
    })();
  }, [audioStatus]);

  return (
    <TouchableOpacity onPress={() => { if (!loading) { setAudioStatus(!audioStatus); } }}>
      <Texto>🎧 Liga/Desliga</Texto>
    </TouchableOpacity>
  );
}

function MenuKit() {
  return (
    <View>
      <Produto {...mockProduto} />
    </View>
  );
}

function SobreNos() {
  return (
    <View>
      <Sobre {...mockSobre} />
    </View>
  );
}

function ListaProdutos() {
  return (
    <View>
      <Produtos_Lista {...mockProdutos_Lista} />
    </View>
  );
}

const Tab = createBottomTabNavigator();

function TabsMenu() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Kit") {
            iconName = focused ? 'basket' : 'basket-outline';
          } else if (route.name === "Sobre nós") {
            iconName = focused ? 'apps' : 'apps-outline';
          } else if (route.name === "Produtos") {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === "Lista de Desejos") {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === "Vídeo") {
            iconName = focused ? 'videocam' : 'videocam-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'pink',
        tabBarHideOnKeyboard: true,
      })}
    >
      <Tab.Screen name="Sobre nós" component={SobreNos} />
      <Tab.Screen name="Kit" component={MenuKit} />
      <Tab.Screen name="Produtos" component={ListaProdutos} />
      <Tab.Screen name="Lista de Desejos" component={MenuKit} />
      <Tab.Screen name="Vídeo" component={VideoScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [fonteCarregada] = useFonts({
    "SpaceGRegular": SpaceGrotesk_300Light,
    "SpaceGBold": SpaceGrotesk_700Bold,
  });

  if (!fonteCarregada) {
    return <View />;
  }

  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        <TabsMenu />
        <MenuAudio />
      </View>
    </NavigationContainer>
  );
}
