import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
text-align: center;
width: 100%;
height: 80%;
padding-top: 10px;
display: flex;
flex-wrap:wrap;
align-items: center;
flex-direction: column;
box-shadow: 2px 2px 5px darkgray;
border: 2px solid;

button{
    height: 35px;
    background-color: white;
    color: gray;
    border: 2px solid gray;
    border-radius: 8px;
}

`;

class SecaoProdutos extends React.Component {
    state = {
       cards: [
            {
                imagem: "https://i.picsum.photos/id/193/200/200.jpg?hmac=JHo5tWHSRWvVbL3HX6rwDNdkvYPFojLtXkEGEUCgz6A",
                valor: "R$ 200.00",
                nome: "Viagem para Marte",
            },
            {
                imagem: "https://i.picsum.photos/id/193/200/200.jpg?hmac=JHo5tWHSRWvVbL3HX6rwDNdkvYPFojLtXkEGEUCgz6A",
                valor: "R$ 200.00",
                nome: "Viagem para Júpiter",
            },
            {
                imagem: "https://i.picsum.photos/id/193/200/200.jpg?hmac=JHo5tWHSRWvVbL3HX6rwDNdkvYPFojLtXkEGEUCgz6A",
                valor: "R$ 200.00",
                nome: "Viagem para Saturno",
            },
            {
                imagem: "https://i.picsum.photos/id/193/200/200.jpg?hmac=JHo5tWHSRWvVbL3HX6rwDNdkvYPFojLtXkEGEUCgz6A",
                valor: "R$ 200.00",
                nome: "Viagem para Kleper B",
            },
            {
                imagem: "https://i.picsum.photos/id/193/200/200.jpg?hmac=JHo5tWHSRWvVbL3HX6rwDNdkvYPFojLtXkEGEUCgz6A",
                valor: "R$ 200.00",
                nome: "Viagem Sagitário B",
            },
        ]
    }


    onChange

    render () {
  
      return (
       
        <CardContainer>
            <img src="https://i.picsum.photos/id/193/200/200.jpg?hmac=JHo5tWHSRWvVbL3HX6rwDNdkvYPFojLtXkEGEUCgz6A" />
            <p>
                Viagem para Marte <br/>
                Preço R$ 200,00.
            </p>
            <button>Adicionar ao Carrinho</button><hr/>
            <img src="https://i.picsum.photos/id/193/200/200.jpg?hmac=JHo5tWHSRWvVbL3HX6rwDNdkvYPFojLtXkEGEUCgz6A" />
            <p>
                Viagem para Júpiter<br/>
                Preço R$ 3000,00.
            </p>
            <button>Adicionar ao Carrinho</button><hr/>
            <img src="https://i.picsum.photos/id/193/200/200.jpg?hmac=JHo5tWHSRWvVbL3HX6rwDNdkvYPFojLtXkEGEUCgz6A" />
            <p>
                 Viagem para Saturno<br/>
                Preço R$ 1500,00.
            </p>
            <button>Adicionar ao Carrinho</button><hr/>
            <img src="https://i.picsum.photos/id/193/200/200.jpg?hmac=JHo5tWHSRWvVbL3HX6rwDNdkvYPFojLtXkEGEUCgz6A" />
            <p>
                Viagem para Kleper B<br/>
                Preço R$ 2500,00.
            </p>
            <button>Adicionar ao Carrinho</button><hr/>
            <img src="https://i.picsum.photos/id/193/200/200.jpg?hmac=JHo5tWHSRWvVbL3HX6rwDNdkvYPFojLtXkEGEUCgz6A" />
            <p>
                Viagem Sagitário B<br/>
                Preço R$ 700,00.
            </p>
            <button>Adicionar ao Carrinho</button><hr/>
        </CardContainer>

);
}
}


export default SecaoProdutos;