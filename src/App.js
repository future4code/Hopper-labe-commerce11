import React from 'react';
import { Carrinho } from './Components/Carrinho/Carrinho';
import { Filtros } from './Components/Filtros/Filtros';
import { Produto } from './Components/Produtos/Produto';
import styled from 'styled-components';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 16px;
  gap: 8px;
`;

const AppHeader = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-itens: center;
  background-color: beige;

`

const produto = [
  {
    id: 1,
    nome: 'Planeta: Marte',
    preco: 300,
    photo: 'https://picsum.photos/200/200?a=1'
  },
  {
    id: 2,
    nome: 'Planeta: Saturno',
    preco: 600,
    photo: 'https://picsum.photos/200/200?a=2'
  },
  {
    id: 3,
    nome: 'Planeta: Júpiter',
    preco: 500,
    photo: 'https://picsum.photos/200/200?a=3'
  },
  {
    id: 4,
    nome: 'Sistema: Kepler 22b',
    preco: 1200,
    photo: 'https://picsum.photos/200/200?a=4'
  },
  {
    id: 5,
    nome: 'Planeta: Próxima B',
    preco: 1000,
    photo: 'https://picsum.photos/200/200?a=5'
  },
  {
    id: 6,
    nome: 'Constelação: Cruzeiro do Sul',
    preco: 3000,
    photo: 'https://picsum.photos/200/200?a=6'
  },
  {
    id: 7,
    nome: 'Constelação: Orion',
    preco: 5000,
    photo: 'https://picsum.photos/200/200?a=7'
  },
  {
    id: 7,
    nome: 'Centro da Galáxia',
    preco: 12000,
    photo: 'https://picsum.photos/200/200?a=8'
  }
]

export default class App extends React.Component {
  state = {
    FiltroMax: 0,
    FiltroMin: 0,
    FiltroNome: '',
    Ordenacao: "DECRESCENTE",
    ItensNoCarrinho: []
  }
  onChangeOrdenacao = (event) => {
    this.setState({Ordenacao: event.target.value})
  }

  onChangeFiltroMax = (event) => {
    this.setState({FiltroMax: event.target.value})
  }

  onChangeFiltroMin = (event) => {
    this.setState({FiltroMin: event.target.value})
  }

  onChangeFiltroNome = (event) => {
    this.setState({FiltroNome: event.target.value})
  }

  adicionaCarrinho = (produtoId) => {
    const ItensNoCarrinho = this.state.ItensNoCarrinho.find(produto => produtoId === produto.id)

    if( ItensNoCarrinho ) {
      const novoProduto = this.state.ItensNoCarrinho.map(produto => {
        if(produtoId === produto.id){
        return {
          ...produto,
          quantidade: produto.quantidade + 1
        }
      }

      return produto
      })

      this.setState({ItensNoCarrinho: novoProduto})
     } else {
        const produtoParaAdicionar = produto.find(produto => produtoId === produto.id)

        const novoProduto = [...this.state.ItensNoCarrinho, {...produtoParaAdicionar, quantidade: 1}]

        this.setState({ItensNoCarrinho: novoProduto})
      }
    }
  

  removerProdutosDoCarrinho = (produtoId) => {
    const novosProdutos = this.state.ItensNoCarrinho.map((product) =>{
      if(product.id === produtoId) {
        return {
          ...product,
          quantidade: product.quantidade -1
        }
      }
      return product
    }).filter((product) => product.quantidade > 0)

    this.setState({ItensNoCarrinho: novosProdutos})
  }

  produtosFiltrados = () => {
    return produto
    .filter((produto) => this.state.FiltroMax ? produto.preco < this.state.FiltroMax: true )
    .filter((produto) => this.state.FiltroMin ? produto.preco < this.state.FiltroMin: true )
    .filter((produto) => this.state.FiltroNome ? produto.nome.includes(this.state.FiltroNome): true)
    .sort((a, b) => this.state.Ordenacao === 'CRESCENTE' ? a.preco - b.preco : b.preco - a.preco)
  } 

  render() {
    return (<>
      <AppHeader>
        <h1>SpaceLab</h1>
      </AppHeader>
      <AppContainer>
        <Filtros
        FiltroMax={this.state.FiltroMax}
        FiltroMin={this.state.FiltroMin}
        FiltroNome={this.state.FiltroNome}
        Ordenacao={this.state.Ordenacao}
        onChangeFiltroMax={this.onChangeFiltroMax}
        onChangeFiltroMin={this.onChangeFiltroMin}
        onChangeFiltroNome={this.onChangeFiltroNome}
        produtosFiltrados={this.produtosFiltrados}
        onChangeOrdenacao={this.onChangeOrdenacao}
        />
        <Produto
        produto={produto}
        FiltroMax={this.state.FiltroMax}
        FiltroMin={this.state.FiltroMin}
        FiltroNome={this.state.FiltroNome}
        adicionaCarrinho={this.adicionaCarrinho}
        produtosFiltrados={this.produtosFiltrados}
        />
        <FontAwesomeIcon icon="fa-solid fa-cart-circle-plus" />
        <Carrinho
        ItensNoCarrinho={this.state.ItensNoCarrinho}
        removerProdutosDoCarrinho={this.removerProdutosDoCarrinho}
        />
      </AppContainer>
      </>
    );
  }
}

  
