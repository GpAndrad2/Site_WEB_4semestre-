import React, { useState } from 'react';
import { View, ScrollView, FlatList, StyleSheet, Text, Image, TouchableOpacity, Modal } from 'react-native';
import { Card } from 'react-native-paper';

const produtos = [
  { id: 1, nome: 'X-Tudo', preco: 20, foto: require('../../../../assets/produto1.jpg') },
  { id: 2, nome: 'X-Salada', preco: 30, foto: require('../../../../assets/produto2.jpg') },
  { id: 3, nome: 'X-Bacon', preco: 50, foto: require('../../../../assets/produto3.png') },
  { id: 4, nome: 'X-Ovos', preco: 50, foto: require('../../../../assets/ovos.png') },
  // Adicione mais produtos conforme necessário
];

const ProdutosLista = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const openModal = (image) => {
    setModalImage(image);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const renderProduto = ({ item }) => (
    <View style={styles.produtoContainer}>
      <TouchableOpacity onPress={() => openModal(item.foto)}>
        <Card>
          <Card.Cover source={item.foto} />
          <Card.Title title={item.nome} subtitle={`R$ ${item.preco}`} />
        </Card>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Produtos</Text>
      <FlatList
        contentContainerStyle={styles.listaContainer}
        data={produtos}
        renderItem={renderProduto}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Image
              source={modalImage}
              style={styles.modalImage}
              resizeMode="contain"
            />
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  listaContainer: {
    padding: 10,
  },
  produtoContainer: {
    flex: 1,
    padding: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
  },
  modalImage: {
    width: 300,
    height: 300,
  },
  closeButton: {
    marginTop: 20,
  },
  closeButtonText: {
    fontSize: 18,
    color: 'blue',
  },
});

export default ProdutosLista;
