import { Button } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from '../registro/estilo.css'
import React, { useState } from 'react';
import axios from 'axios';


function Registro() {
    const [values, setValues] = useState();
    const handleChangeValues = (value) => {
        setValues((prevValue) => ({
            ...prevValue,
            [value.target.name]:value.target.value,            
        }));
    };
    const handleClickButton =() =>{
        axios.post("http://localhost:3001/registro",{
            Bairro: values.Bairro,
            CEP: values.CEP,
            Cidade: values.Cidade,
            Descricao: values.Descricao,
            Email: values.Email,
            Estado: values.Estado,
            NomeLocal: values.NomeLocal,
            Numero: values.Numero,
            Rua: values.Rua,
            Senha: values.Senha,
        }).then((response) =>{
            console.log(response)
        })        
    }

    return (
        

        <div class="contan">
            <hr id="hrzaoo" />
            <h1>REGISTRO</h1>

            <div class="components">
                <div class="name">
                    <p>Nome do Local</p>
                    <input 
                    type="text" 
                    placeholder="Local" 
                    name="NomeLocal"
                    required 
                    onChange={handleChangeValues}/>
                </div>
                <div class="name">
                    <p>Email</p>
                    <input type="text"
                    placeholder="Email"
                    name="Email"
                    required 
                    onChange={handleChangeValues}/>
                </div>
                <div class="name">
                    <p>Senha</p>
                    <input 
                    type="text" 
                    placeholder="Senha" 
                    name="Senha"
                    required 
                    onChange={handleChangeValues}/>
                </div>
                <div class="endereco">
                    <p>Rua</p>
                    <input type="text" 
                    placeholder="Rua" 
                    required
                    name="Rua"
                    onChange={handleChangeValues} />
                </div>
                <div class="endereco">
                    <p>Numero</p>
                    <input type="text" 
                    placeholder="Endereco" 
                    required 
                    name="Numero"
                    onChange={handleChangeValues}/>
                </div>
                <div class="endereco">
                    <p>Bairro</p>
                    <input type="text" 
                    placeholder="Endereco" 
                    name="Bairro"
                    required 
                    onChange={handleChangeValues}/>
                </div>
                <div class="endereco">
                    <p>Cidade</p>
                    <input type="text" 
                    placeholder="Endereco" 
                    name="Cidade"
                    required 
                    onChange={handleChangeValues}/>
                </div>
                <div class="endereco">
                    <p>Estado</p>
                    <input type="text"
                     placeholder="Endereco" 
                     required 
                     name="Estado"
                    onChange={handleChangeValues}/>
                </div>
                <div class="endereco">
                    <p>CEP</p>
                    <input type="text" 
                    placeholder="Endereco"
                    name="CEP"
                    required 
                    onChange={handleChangeValues}/>
                </div>                
                <div class="Texto">
                    <p>Descrição</p>
                    <textarea type="text" 
                    placeholder="Descrição"
                    name="Descricao"
                    required
                    onChange={handleChangeValues} />
                </div>                
                <button onClick={handleClickButton}>ENVIAR</button>

                

            </div>

        </div>

    )
}

export default Registro;