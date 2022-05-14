import React from "react";
import { CardProduto } from "./CardProduto";
import styled from 'styled-components';

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 16px;
`;

const ContainerProdutos = styled.div`
  display: flex;
  flex-direction: column
`;

export class Produto extends React.Component{
render(){
    const produtosFiltrados = this.props.produtosFiltrados()
    return <ContainerProdutos>
        <h3>Produtos</h3>
        <ProductsGrid>
        {produtosFiltrados.map((produto) => {
            return <CardProduto
            produto={produto}
            adicionaCarrinho={this.props.adicionaCarrinho}
        />
        })}
        </ProductsGrid>
    
    </ContainerProdutos>
}

}