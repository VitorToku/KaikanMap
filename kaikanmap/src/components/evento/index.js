import styled from 'styled-components'
import Axios from 'axios';
import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Logo from '../../img/kaikan_cipo.png'

const Externo = styled.div`
    margin: 50px;

    @media(max-width: 1024px){
        margin: 40px;
    }

    @media(max-width: 425px){
        margin: 0px;
    }
`
const Data = styled.div`
    margin: 0 auto;
    @media(max-width:1024px){
        margin: 0 50px;
    }
    @media(max-width: 425px){
        margin: 10px;
    }
`
const Descricao = styled.div`       
    margin: 0 200px;
    background-color: #D9D9D9;
    padding: 30px 50px ;

    @media(max-width: 1024px){
        padding: 20px 20px ;
        margin: 0 50px;
    }
    @media(max-width: 425px){
        margin: 10px;
    }
    `
const ImgEvento = styled.img`
    display: flex;
    margin: 40px auto;
    min-width: 500px;    

    @media(max-width: 1024px){
        margin: 20px auto;
    }
    @media(max-width: 425px){
        margin: 10px;
    }
`
function DescEvento(){
    const { id } = useParams();
    const[dadosEvento,setDadosEvento] = useState(null);

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
    
    useEffect(()=>{
        const fetchData = async () =>{
            try{
                const response = await Axios.get(`http://localhost:3001/eventos/${id}`);
                setDadosEvento(response.data);
            } catch(error){
                console.error("Erro aos buscar dados: ", error)
            }
            
        };        
        fetchData();        
        
    },[id]);

    return(
        <Externo>
            {dadosEvento ? 
                (
                    <>
                        <Data>
                            <h1>{dadosEvento[0].NomeEvento}</h1>
                            <h2 className='descEvento'>{dadosEvento[0].NomeKaikan} - {dadosEvento[0].LocalEvento}</h2>
                            <p className='descEvento'>{formatDate(dadosEvento[0].DiaEHora)} - {formatTime(dadosEvento[0].DiaEHora)} </p>
                        </Data>
                        <Descricao>
                            <ImgEvento src={dadosEvento[0].imagem} alt={dadosEvento[0].imgEvento}></ImgEvento> 
                            <p>{dadosEvento[0].Descricao}</p>
                        </Descricao>
                    </>
                ) : 
                (
                    <p>Carregando...</p>
                )
            }            
        </Externo>
    );
};

export default DescEvento;