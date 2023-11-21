import Logo from '../../img/logo.svg'

import styled from 'styled-components'
import {Link} from 'react-router-dom'
import style from '../Header/style.css'

const pags = ["A EQUIPE", "LISTA DE KAIKANS", "CALENDÁRIO"]

const Lista = styled.ul
  `
    display: flex;
    list-style: none;
    gap: 1rem;
    margin: 0;
`
const StyleHeader = styled.div`
  display: flex;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
  background-color: #DCE6EA;  
  padding: 0 15px;
`
const Menu = styled.div`
  display: flex;
  gap: 15px;
  margin-left: auto;
  @media(max-width: 992px){
    display:none;
  }
`
const BotaoMenu = styled.button`
  font-size: 2rem;
  margin-left: auto;
  border: solid 1px black;
  display: none;
  @media(max-width: 992px){
    display: inline-block;
  }
`

const Links = styled.div`
  display: flex;
  align-items: center;
  
`
const Itens = styled.li`
  font-size: 1rem;
  color: #003785;
`
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
function Header() {
    return(            
    <>
      <nav class="navbar navbar-expand-lg minhacor">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><Link to="/"><img src={Logo} /></Link></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav mb-2 mb-lg-0 ms-auto">
              <li class="nav-item">
                <a class="nav-link gira" aria-current="page" href=""><Link to="/equipe">A EQUIPE</Link></a>
              </li>
              <Barra className='vr'></Barra>
              <li class="nav-item">
                <a class="nav-link gira" href=""><Link to="/listakaikan">LISTA DE KAIKANS</Link></a>
              </li>
              <Barra className='vr'></Barra>
              <li class="nav-item">
                <a class="nav-link gira" href=""><Link to="/calendario">CALENDÁRIO</Link></a>
              </li>              
            </ul>    
            <button id ="botaozin">LOGIN</button>
            <Link to = "/registro"><button id="botaozin">REGISTRE-SE</button> </Link>           
          </div>
        </div>
      </nav>      
    </>
  )
} 

export default Header