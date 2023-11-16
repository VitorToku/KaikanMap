import './style.css';

function Registro_evento(){


return (
    <div className='container'>
      <p class="title">Registro Evento</p>
      <div className='contain'>
        <div class='contain-inputs'>
          <label className='label-text'>
            Nome do evento:
          </label>
          <input type='text' class="input-text" />
        </div>
        <div class='contain-inputs'>
          <label className='label-text'>
            Data e horário:
          </label>
          <input type='date' class="input-text" />
          <input type='time' class="input-text" />
        </div>
        <div class='contain-inputs'>
          <label className='label-text'>
            Descrição:
          </label>
          <textarea class="input-textarea" cols={20} rows={6} />
        </div>
        <div class='contain-inputs'>
          <label className='label-text'>
            Imagem:
          </label>
          <input type='file' />
        </div>
        <button className='button'>
          ENVIAR
        </button>
      </div>
    </div>
  )  
}

export default Registro_evento