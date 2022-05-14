import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';



const ItemContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 4px;
  align-items: center;

  p {
    margin: 0;
  }

  button {
    border: none;
    background-color: white;
  }
`


export class ItemDoCarrinho extends React.Component {
  render() {
    return <ItemContainer>
    <p>{this.props.Item.quantidade}x</p>
    <p>{this.props.Item.nome}</p>
    <label>Remover
      <button onClick={() => this.props.removerProdutosDoCarrinho(this.props.Item.id)}>
        <FontAwesomeIcon icon={solid('square-xmark')}> 
        </FontAwesomeIcon>
      </button>
    </label>
  </ItemContainer>
  }
}