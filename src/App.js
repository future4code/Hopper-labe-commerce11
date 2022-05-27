import React from 'react';
import './App.css';
import styled from 'styled-components';
import SecaoProdutos from './components/SecaoProdutos';

const DivPai = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
`;

const Filters = styled.div`
    border-radius: 5px;
    border: 2px solid black;
    height: 57em;
    width: 20em;
    margin: 15px;
    text-align: center;
`;

const Produtos = styled.div`
    height: 57em;
    width: 70em;
    margin: 15px;
    padding-left: 50px;

    p{
      display: flex;
      justify-content: flex-end;
      padding: 10px;
      margin-right: 70px;

    }

    select{
      border-radius: 5px;
      margin-left:950px;
      border: 2px solid black;
      width: 120px;
      height: 30px;
  }
    
`;
const Carrinho = styled.div`
    border-radius: 5px;
    border: 2px solid black;
    height: 57em;
    width: 20em;
    margin: 15px;
    text-align: center; 
`;

class App extends React.Component {
  render(){
    return (
      <DivPai>
        <Filters>
          <h3>Filtros</h3>
          <label>Valor mínimo:</label>
          <input type="number" placeholder='0'/>
          <br/>
          <label>Valor máximo:</label>
          <input type="number" placeholder='0'/>
          <br/>
          <label>Procure pelo nome:</label>
          <input type="text" placeholder='Pesquisar'/>
        </Filters>
        
        <div>
          <Produtos>
            <h2>Quantidade de produtos: 05</h2>
            <h3> Produtos </h3>
            <p>Ordenação:</p>
                <select>
                  <option>Crescente</option>
                  <option>Decrescente</option>
                </select>
            <SecaoProdutos/>
          </Produtos>
        </div>


        <Carrinho>
          <h3>Carrinho:</h3>
          <label>Valor Total:R$ 00,00</label>
        </Carrinho>
      </DivPai>
      
    );
  }
}

export default App;
