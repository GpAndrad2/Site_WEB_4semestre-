import Logo from '../../assets/splash.png';
import produto1Imagem from '../../assets/produto1.jpg';
import produto2Imagem from '../../assets/produto2.jpg';
import produto3Imagem from '../../assets/produto3.png';
// Importe as imagens dos outros produtos conforme necessário...

const produtos_lista = [
  {
    topo: {
      titulo: "Detalhes do Produto 1",
    },
    detalhes: {
      nome: "Produto 1",
      logo: Logo,
      detalhes: "Descrição do Produto 1",
      preco: "R$ 50,00",
      botao: "Lista de Desejos",
    },
    itens: {
      titulo: "Itens do Produto 1",
      lista: [
        {
          id: 1,
          nome: "Item 1",
          imagem: produto1Imagem,
        },
        {
          id: 2,
          nome: "Item 2",
          imagem: produto2Imagem,
        },
        {
          id: 3,
          nome: "Item 3",
          imagem: produto3Imagem,
        },
      ],
    },
  },
];

export default produtos_lista;
