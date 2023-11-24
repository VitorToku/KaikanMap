import { useParams } from "react-router-dom"
import Axios from 'axios';
import React,{useEffect, useState} from 'react';


function Editar(){
    const { idEvento }= useParams();
    const[dadosEvento,setDadosEvento] = useState();
    const[listaKaikans,setListaKaikans] = useState();

    const formatDate = (isoDate) => {
        const date = new Date(isoDate);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // +1 porque os meses são indexados de 0 a 11
        const day = String(date.getDate()).padStart(2, '0');
      
        const formattedDate = `${year}-${month}-${day}`;
        return formattedDate;
      };
      const formatTime = (isoDate) => {
        const date = new Date(isoDate);
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
      
        const formattedTime = `${hours}:${minutes}`;
        return formattedTime;
      };

    const handleChangeValues = (event) => {
        const{name, value} = event.target;
        setDadosEvento((prevValue) => ({
            ...prevValue,
            [name]: value,        
        }));
        console.log(dadosEvento)
    };
    const handleClickButton = () => {
        Axios.post("http://localhost:3001/editarEvento", {dadosEvento      
        }).then((response) => {
            console.log(response)
        })
      };
    
    useEffect(()=>{
        const fetchData = async () =>{
            try{
                const response = await Axios.get(`http://localhost:3001/eventos/${idEvento}`);
                setDadosEvento(response.data);
                
            } catch(error){
                console.error("Erro aos buscar dados: ", error)
            }
            
        };        
        console.log(dadosEvento)
        fetchData();        
        
    },[idEvento]);

    useEffect(() =>{
        // Axios.get("http://localhost:3001/listaKaikans").then((response) =>{
        //     setListaKaikans(response.data);
        // })
        const fetchData = async () =>{
            try{
                const response = await Axios.get("http://localhost:3001/listaKaikans")
                .then(function (response) {
                  setListaKaikans(response.data);
                })                
            } catch(error){
                console.error("Erro ao buscar dados:", error);
            }
        };        
        fetchData();
    }, [] ); 
    return(
        <div className='container'>
      <p className="title">Registro Evento</p>
      <div className='contain'>
        {dadosEvento ? 
        (<>
            <div className='contain-inputs'>
            <label className='label-text'>
                Nome do evento:
            </label>
            <input 
            type='text' 
            className="input-text" 
            name='NomeEvento'
            value={dadosEvento[0].NomeEvento}
            onChange={handleChangeValues} />
            </div>
            <div className='contain-inputs'>
            <label className='label-text'>
                Nome do Local:
            </label>
            <input 
            type='text' 
            className="input-text"
            name='LocalEvento'
            value={dadosEvento ? dadosEvento[0].LocalEvento :''}
            onChange={handleChangeValues} />
            </div>
            <div className='contain-inputs'>
            <label className='label-text'>
                Kaikan Responsável:
            </label>
            <input 
            list='listakaikans' 
            className="input-text"
            name='KaikanResponsavel'
            value={dadosEvento[0].KaikanResponsavel}
            onChange={handleChangeValues}/>

            <datalist id='listakaikans'>
                {listaKaikans?.map((kaikan) =>(
                <option key={kaikan.id} value={kaikan.id}>{kaikan.Nomekaikan}</option>              
                ))}
            </datalist>          
            </div>
            <div className='contain-inputs'>
            <label className='label-text'>
                Data:
            </label>
            <input 
            type='date' 
            className="input-text1"
            name='Data'
            value={formatDate(dadosEvento[0].DiaEHora)}
            onChange={handleChangeValues} />
            <label className='label-text'>
                Horário:
            </label>
            <input 
            type='time' 
            className="input-text1"
            name='Hora'
            value={formatTime(dadosEvento[0].DiaEHora)}
            onChange={handleChangeValues} />
            </div>
            <div className='contain-inputs'>
            <label className='label-text'>
                Descrição:
            </label>
            <textarea 
            className="input-textarea" 
            cols={20} rows={6}
            name='Descricao'            
            value={dadosEvento[0].Descricao}
            onChange={handleChangeValues} />
            </div>
            <div className='contain-inputs'>
            <label className='label-text'>
                Imagem:
            </label>
            <input 
            type='file'
            name='imagem'
            onChange={handleChangeValues} />
            </div>
            <button  className='aaa' onClick={handleClickButton}>
            ENVIAR
            </button>
            </>
        ) : (
            <p>Carregando</p>
        )}
      </div>
    </div>
    )
}

export default Editar