import styled from 'styled-components'

const StyleContatos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 20%;
    margin-right: 10%;

    @media(max-width: 992px){
        display:none;
    }
`
const Botao = styled.button`
    font-size: 18px;
    font-weight:500;
    color: #003785;
    width:180px;
    height:48px;
    transition: transform 0.2s;
    &:hover {
        transform: scale(1.2);
    }
    @media(max-width: 992px){
        font-size: 15px;
    }
`
const Link = styled.a`
    text-decoration: none;
    color: black;
`
const Titulo = styled.p`
    color:#DCE6EA;    
    font-size: 1.2rem;
`

function Contatos(){
    return(
        <StyleContatos>
            <Titulo>NOSSO CONTATO:</Titulo>
            <Link href="#">kaikanmap@gmail.com</Link>
            <Botao class="botao-footer">KAIKANS &rarr;</Botao>
            <Botao class="botao-footer">SOBRE NÓS &rarr;</Botao>
        </StyleContatos>
    )
}

export default Contatos