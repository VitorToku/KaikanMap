import logo2 from '../../img/logo2.png'
import styled from 'styled-components'

const StyleBaixo = styled.div`
    height: 20%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-image: linear-gradient(#1465BB,#3B89DC);

    @media(max-width:992px){
        flex-direction: column;
        gap: 5px;
    }
`
const Logo = styled.img`
    width: 15%;
    height: auto;
    padding-right: 5rem;
    margin: 0.5%;

    @media(max-width:992px){
        display:none;
    }
`
const Referencia = styled.a`
    text-decoration: none;
    color: black;
` 

function Baixo(){
    return(
        <StyleBaixo>
            <Logo src={logo2} alt=""/>      
            <Referencia href="#">Kaikanmap@gmail.com</Referencia>
            <Referencia>Direitos Reservados KaikanMap</Referencia> 
        </StyleBaixo>
    )
}
export default Baixo