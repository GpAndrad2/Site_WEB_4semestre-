import Logo from '../../assets/splash.png'
import macaco from '../../assets/macaco.jpg'
import motor from '../../assets/motor.jpg'
import pao from '../../assets/pao.jpg'

const produto = {
    topo: {
        titulo: "Detalhes do produto",
    },
    detalhes: {
        nome: "Ape Play Burger",
        logo: Logo,
        detalhes: "Carne de boi com queijo minas, e fé em Deus com amor!",
        preco: "R$ 50,00",
        botao: "Lista de Desejos"
    },
    itens: {
        titulo: "Itens do Hamburguer",
        lista: [
            {
                id: 1,
                nome: "1 Sanduba de pombo",
                imagem: macaco,
            },
            {
                id: 2,
                nome: "1 Lanche cashorro",
                imagem: motor,
            },
            {
                id: 3,
                nome: "1 Hambúrguer Cilindro",
                imagem: pao,
            },
        ],
    }
}

export default produto;