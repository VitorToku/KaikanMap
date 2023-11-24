import React, { useState,useContext } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import { EstaLogado } from '../../context/LogadoContext'
import { useNavigate } from 'react-router-dom';

export const PopupContainer = styled.div`
  display: ${props => (props.show ? 'block' : 'none')};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 20px;
  border-radius: 5px;
  z-index: 999;
`;
export const PopupContent = styled.div`
  text-align: center;
`;

export const CloseButton = styled.button`
  padding: 8px 16px;
  background-color: #fff;
  color: #333;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 4px;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const Popup = (props) => {
  const {logado, logar, popupAberto, fecharPopup, usuario, defUsuario, defId} = useContext(EstaLogado);
  const[values,setValues] = useState();
  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
        ...prevValue,
        [value.target.name]: value.target.value,        
    }));
  };
  
  const ValidarLogin = () =>{        
      Axios.post("http://localhost:3001/login",{
        Email: values.Email,
        Senha: values.Senha,
      }).then((response)=>{
        if(response.data.Sucesso){          
          logar()
          fecharPopup()
          defUsuario(response.data.NomeKaikan)
          defId(response.data.id)
          navigate("/MeusEventos")
        }
        else{
          console.log(response.data.Message)
        }
      })
  }
  const navigate = useNavigate()
  return (
    <PopupContainer show={popupAberto}>
        <PopupContent>
        <label htmlFor="Email">Email</label>
          <input 
          type='text' 
          id="Email"           
          name='Email'
          placeholder='Digite seu email'
          onChange={handleChangeValues} />
        <label htmlFor="Senha">Senha</label>
          <input 
          type='text' 
          id="Senha"           
          name='Senha'
          placeholder='Digite sua senha'
          onChange={handleChangeValues} />
        <div>Senha errada</div>
          <CloseButton onClick={ValidarLogin}>Logar</CloseButton>
        </PopupContent>
      </PopupContainer>
  );
};

export default Popup;