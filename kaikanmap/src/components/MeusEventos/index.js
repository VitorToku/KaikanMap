import React, {useState, useEffect, useContext} from "react"
import Axios from "axios"
import { EstaLogado } from '../../context/LogadoContext'
import styled from "styled-components";
import { Link } from "react-router-dom";

const Tudo = styled.div`
display: grid;
padding: 24px 48px;
`
const Evento = styled.div`
    background-color: #DCE6EA;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 50px;
`
const Lista = styled.ul`
    list-style: none;
`
const Item = styled.li`
    margin: 10px;
    background-color: #DCE6EA;
`
const ElemeEvento = styled.div`
    max-width: 30%;
    min-width: 30%;
    text-align: center;
`
const Botao = styled.button`
    width: 200px;
    height: 80px;
    justify-self: end;
    background-color: #003785;
    color: #DCE6EA; 
    border-radius: 50px;
    transition: transform 0.4s;
        &:hover{
            transform:scale(1.2);
  }
`

function MeusEventos(){   
    const {id} = useContext(EstaLogado);
    const [listaMeusEventos, setListaMeusEventos] = useState();    
   
    const formatDate = (datestring) =>{     
       
        const config = {
            year: 'numeric', 
            month: '2-digit',
            day: '2-digit'
                    
        }        
        return new Date(datestring).toLocaleDateString("pt-br",config);        
    }
    const formatTime = (datestring) =>{
        const config = {               
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit'
        }
        return new Date(datestring).toLocaleTimeString("pt-br",config);     
    }
    useEffect(() =>{
        const fetchData = async () =>{
            try{
                const response = await Axios.get(`http://localhost:3001/MeusEventos/${id}`)
                .then(function (response) {
                    setListaMeusEventos(response.data);    
                    console.log(listaMeusEventos)                              
                })                
            } catch(error){
                console.error("Erro ao buscar dados:", error);
            }
        };        
        fetchData();        
        
    }, [] );    
    return(
        <Tudo>                   
            <h1>MEUS EVENTOS</h1>
            <Botao>Registrar Novo</Botao>
            <Lista>
                {listaMeusEventos?.map((eventos)=>
                (
                    <Item key={eventos.id}>
                        <Evento>
                            <ElemeEvento>{eventos.NomeEvento}</ElemeEvento>
                            <ElemeEvento>{eventos.LocalEvento}</ElemeEvento>
                            <ElemeEvento>{formatDate(eventos.DiaEHora)}  {formatTime(eventos.DiaEHora)}</ElemeEvento>                            
                        </Evento>
                    </Item>
                ))}                
            </Lista>            
        </Tudo>
    )
}

export default MeusEventos