import { Button } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from '../registro/estilo.css'


function Registro() {
    return (
        <div class="contan">
            <hr id="hrzaoo" />
            <h1>REGISTRO</h1>

            <div class="components">
                <div class="name">
                    <p>Nome do Local</p>
                    <input type="text" placeholder="Local" required />
                </div>
                <div class="endereco">
                    <p>Endereço</p>
                    <input type="text" placeholder="Endereco" required />
                </div>
                <div class="Resumo">
                    <p>Resumo</p>
                    <input type="text" placeholder="Resumo" required />
                </div>
                <div class="Texto">
                    <p>Corpo de texto</p>
                    <textarea type="text" placeholder="Texto" required />
                </div>

                
                    <button>ENVIAR</button>

                

            </div>

        </div>

    )
}

export default Registro;