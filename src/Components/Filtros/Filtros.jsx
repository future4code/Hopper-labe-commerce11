import React from "react";
import styled from "styled-components";

const FiltersContainer = styled.div`
  padding: 8px;
`;

const InputContainer = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 8px;
`


export class Filtros extends React.Component {
    render() {
      const produtosFiltrados = this.props.produtosFiltrados()
        return <FiltersContainer>
            <h3>Filtros</h3>
            <p>Quantidade de Produtos: {produtosFiltrados.length}</p>
            <label>Ordenação
            <select 
            value={this.props.Ordenacao} 
            onChange={this.props.onChangeOrdenacao}>
              <option value={"CRESCENTE"}>Crescente</option>
              <option value={"DECRESCENTE"}>Decrescente</option>
            </select>
            </label>
            <InputContainer>
            Valor Mínimo:
            <input
            type="number"
            value={this.props.FiltroMin}
            onChange={this.props.onChangeFiltroMin} />
            </InputContainer>
            <InputContainer>
            Valor Máximo:
            <input
            type="number"
            value={this.props.FiltroMax}
            onChange={this.props.onChangeFiltroMax} />
            </InputContainer>
            <InputContainer>
            Busca:
            <input
            type="text"
            value={this.props.FiltroNome}
            onChange={this.props.onChangeFiltroNome} />
            </InputContainer>
        </FiltersContainer>
    }
}