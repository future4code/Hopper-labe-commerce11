import React from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';



const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 15px;

  img {
    border-radius: 15px;
  }

`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;

  label {
    display: flex
    justify-content: space-between;
  }
  

  p {
    margin: 4px 0;
  }
`
const AddToCartButton = styled.button`
  align-self: end;
  margin-top: 4px;
  width: 30px;
  margin-left: 20px;
  background-color: white;
  border: none
`

export class CardProduto extends React.Component{
    render(){
        const produto= this.props.produto
        return <CardContainer>
            <img src={produto.photo} alt="" />
            <CardInfo>
                <p>{produto.nome}</p>
                <p>R${produto.preco},00</p>
                <label>
                  Adicionar ao Carrinho
                  <AddToCartButton onClick={() => this.props.adicionaCarrinho(produto.id)}>
                  <FontAwesomeIcon icon={solid('cart-plus')}> 
                  </FontAwesomeIcon>
                  </AddToCartButton>
                </label>
            </CardInfo>
        </CardContainer>
    }
}