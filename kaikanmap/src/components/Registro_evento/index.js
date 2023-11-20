import './jamal.css';
import Axios from 'axios'
import React,  {useState, useEffect} from 'react';

function Registro_evento() {
  const[listaKaikans,setListaKaikans] = useState();

  const[values,setValues] = useState();

  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
        ...prevValue,
        [value.target.name]: value.target.value,        
    }));
};
  const handleClickButton = () => {
    Axios.post("http://localhost:3001/registroEvento", {
        NomeEvento: values.NomeEvento,
        LocalEvento: values.LocalEvento,
        KaikanResponsavel: values.KaikanResponsavel,
        imagem: values.imagem,
        Descricao: values.Descricao,
        Data: values.Data,
        Hora: values.Hora        
    }).then((response) => {
        console.log(response)
    })
  };

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

  return (
    <div className='container'>
      <p className="title">Registro Evento</p>
      <div className='contain'>
        <div className='contain-inputs'>
          <label className='label-text'>
            Nome do evento:
          </label>
          <input 
          type='text' 
          className="input-text" 
          name='NomeEvento'
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
          onChange={handleChangeValues} />
          <label className='label-text'>
            Horário:
          </label>
          <input 
          type='time' 
          className="input-text1"
          name='Hora'
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
        <button className='button' onClick={handleClickButton}>
          ENVIAR
        </button>
      </div>
    </div>
  )
}

export default Registro_evento