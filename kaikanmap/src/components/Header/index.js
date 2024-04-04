import Logo from '../../img/logo.svg'

import styled, { ThemeConsumer, ThemeContext } from 'styled-components'
import {Link} from 'react-router-dom'
import {useState,useContext } from 'react'
import { EstaLogado } from '../../context/LogadoContext'
import Popup, {CloseButton, PopupContent, PopupContainer} from '../../components/popup';
import Axios from 'axios'


// const Lista = styled.ul
//   `
//     display: flex;
//     list-style: none;
//     gap: 1rem;
//     margin: 0;
// `
// const StyleHeader = styled.div`
//   display: flex;
//   align-items: center;
//   max-width: 1440px;
//   margin: 0 auto;
//   background-color: #DCE6EA;  
//   padding: 0 15px;
// `
// const Menu = styled.div`
//   display: flex;
//   gap: 15px;
//   margin-left: auto;
//   @media(max-width: 992px){
//     display:none;
//   }
// `
// const BotaoMenu = styled.button`
//   font-size: 2rem;
//   margin-left: auto;
//   border: solid 1px black;
//   display: none;
//   @media(max-width: 992px){
//     display: inline-block;
//   }
// `

// const Links = styled.div`
//   display: flex;
//   align-items: center;
  
// `
// const Itens = styled.li`
//   font-size: 1rem;
//   color: #003785;
// `
const Botao = styled.button` 
  padding: 15px 15px;
  background-color: #003785;
  border: none;
  color: #DCE6EA; 
  margin: 0 10px;
  transition: transform 0.4s;
  &:hover{
    transform:scale(1.2);
  }

  @media(max-width: 992px){
    min-width: 200px;
    display:block;
    width: 20%;
    margin: 10px 0px;
  }
`
const Barra = styled.div`  
  @media(max-width: 992px){
    display:none
  }
`

function Header(props){  
    const {logado, logar,popupAberto, abrirPopup} = useContext(EstaLogado);
    
    const [aparecePopup, setAparecePopup] = useState(false);


    return(            
    <>      
      <nav className="navbar navbar-expand-lg minhacor">
        <div className="container-fluid">
          <Link to="/"><img className="navbar-brand" src={Logo} alt=''/></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
              <li className="nav-item">
                <Link className="nav-link gira" aria-current="page" to="/equipe">A EQUIPE</Link>
              </li>
              <Barra className='vr'></Barra>
              <li className="nav-item">
                <Link className="nav-link gira" to="/listakaikan">LISTA DE KAIKANS</Link>
              </li>
              <Barra className='vr'></Barra>
              <li className="nav-item">
                <Link className="nav-link gira" to="/calendario">CALENDÁRIO</Link>
              </li>              
            </ul>

            {logado ? (
              <>
                <Botao onClick={abrirPopup}>LOGIN</Botao>
                <Link to = "/registro"><Botao>REGISTRE-SE</Botao> </Link>  
              </>
            ) : (
                <>
                <Botao onClick={logar}>Deslogar</Botao>
                <Link to = "/registro"><Botao>REGISTRE-SE</Botao> </Link>  
                </>
            )    
            }
          </div>
        </div>
      </nav>   
      <Popup show={popupAberto}></Popup>
    </>
  )
} 

export default Header