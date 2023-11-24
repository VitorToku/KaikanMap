import vitao from '../../img/vitao.png'
import './style.css';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import React,{useEffect, useState} from 'react';

function NomedoKaikanComp(){
  const { idKaikan } = useParams();
  const[dadosKaikan,setDadosKaikan] = useState(null);

  useEffect(()=>{
    const fetchData = async () =>{
        try{
            const response = await Axios.get(`http://localhost:3001/kaikan/${idKaikan}`);
            setDadosKaikan(response.data);
        } catch(error){
            console.error("Erro aos buscar dados: ", error)
        }
        
    };        
    fetchData();        
    
},[idKaikan]);

return (
    <div className='container'>
      
      {dadosKaikan ? 
                (
                  <>
                  <p class="tituloKaikan">{dadosKaikan[0].NomeKaikan}</p>
                  <p class="description">{dadosKaikan[0].Cidade}, {dadosKaikan[0].Estado}</p>
                  <div className='containar'>
                    <img src={dadosKaikan[0].imagem} className='image' />
                    <p class="text">
                      {dadosKaikan[0].DescricaoCompleta}
                      </p>
                    <p>Endereço Completo:</p>
                    <p>{dadosKaikan[0].Rua}, {dadosKaikan[0].Numero} - {dadosKaikan[0].Bairro}, {dadosKaikan[0].Cidade} - {dadosKaikan[0].Estadp}, {dadosKaikan[0].CEP}</p>
                  </div>
                  </>
                ) : 
                (
                    <p>Carregando...</p>
                )
            }            
    </div>
  )
}

export default NomedoKaikanComp