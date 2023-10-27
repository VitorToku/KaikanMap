import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../../img/logo.png'
import { Link } from "react-router-dom";



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
function ListaPags() {
  return (   
    <>
      <nav class="navbar navbar-expand-lg minhacor">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><img src={Logo} /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav mb-2 mb-lg-0 ms-auto">
              <li class="nav-item">
                <a class="nav-link" aria-current="page"> <Link to="/equipe">EQUIPE </Link>  </a>

              </li>
              <Barra className='vr'></Barra>
              <li class="nav-item">
                <a class="nav-link" href="#">LISTA DE KAIKANS</a>
              </li>
              <Barra className='vr'></Barra>
              <li class="nav-item">
                <a class="nav-link" href="#">CALENDÁRIO</a>
              </li>              
            </ul>    
            <Botao>LOGIN</Botao>
            <Botao>REGISTRE-SE</Botao>     
          </div>
        </div>
      </nav>      
    </>
  )
}

export default ListaPags