
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
    padding: 1.2rem;     
    justify-content: space-around;
    background-image: linear-gradient(#1465BB,#3B89DC);
`


function Footer(){
    return(
        <Foot>
            <Cima>
                <LogoOds/>
                <Contatos/>
                <Links/>
            </Cima> 
            <Baixo/>
        </Foot>

    )
}

export default Footer