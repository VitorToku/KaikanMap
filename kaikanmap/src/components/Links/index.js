import styled from 'styled-components'

const StyleLinks = styled.div`
    width: 20%;
    
    @media(max-width:992px){
        width: 100%;
    }
`
const Titulo = styled.p`
    color:#DCE6EA;    
    font-size: 1.2rem;
`
const Lista = ["A EQUIPE","LISTA DE KAIKANS","CALENDÁRIO","LOGIN","TERMOS E CONDIÇÕES" ]

const StyleLista = styled.ul`
    margin-top: 1rem;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding:0;
`
const Opcoes = styled.li`
    font-size: small;
`
const Referencia = styled.a`
    text-decoration: none;
    color: black;
    &:hover {
       transition:0.3s;
        text-decoration:underline;
    }

` 

function Links(){
    return(
        <StyleLinks>
            <Titulo class="titulos">LINKS</Titulo>
            <StyleLista>
                <Opcoes><Referencia href='#'>A EQUIPE</Referencia></Opcoes>
                <Opcoes><Referencia href='#'>LISTA DE KAIKANS</Referencia></Opcoes>
                <Opcoes><Referencia href='#'>CALENDÁRIO</Referencia></Opcoes>
                <Opcoes><Referencia href='#'>LOGIN</Referencia></Opcoes>
                <Opcoes><Referencia href='#'>TERMOS E CONDIÇÕES</Referencia></Opcoes>
            </StyleLista>
        </StyleLinks>
    )
}
export default Links