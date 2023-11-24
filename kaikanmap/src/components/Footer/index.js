
import styled from 'styled-components'
import LogoOds from '../FtLogoOds'
import Contatos from '../Contatos'
import Links from '../Links'
import Baixo from '../FtBaixo'

const Foot = styled.div`    
    font-family: 'Poppins', sans-serif;

`
const Cima = styled.div`
    height: 80%;
    display: flex;
    flex-direction: row;
    padding: 1.2rem;     
    justify-content: space-around;
    background-image: linear-gradient(#1465BB,#3B89DC);

    @media(max-width:992px){
        flex-direction: column;
    }
`


function Footer(){
    return(
        <Foot>
          <Baixo/>
        </Foot>

    )
}

export default Footer