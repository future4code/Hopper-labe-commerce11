import React from "react";
import styled from "styled-components";
import { ItemDoCarrinho } from "./ItemDoCarrinho";

const ContainerCarrinho = styled.div`
padding: 8px;
`;

const CartListContainer = styled.div`
  display: grid;
  gap: 8px;
`

export class Carrinho extends React.Component{

    valorTotal = () => {
        let total = 0 
        this.props.ItensNoCarrinho.forEach(element => {
            total += element.preco * element.quantidade
        });

        return total
    }

    render() {
        return <ContainerCarrinho>
                <h3>Carrinho</h3>
                <CartListContainer>
                    {this.props.ItensNoCarrinho.map((product) => {
                        return <ItemDoCarrinho 
                                    Item={product}
                                    removerProdutosDoCarrinho={this.props.removerProdutosDoCarrinho}
                                />
                    })}
                </CartListContainer>
                <p>Valor Total: R${this.valorTotal()},00</p>
            </ContainerCarrinho>
      } 
}