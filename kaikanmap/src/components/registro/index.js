import { Button } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from '../registro/cxtn.css'
import React, { useState } from 'react';
import axios from 'axios';


function Registro() {
    const [values, setValues] = useState();
    const handleChangeValues = (value) => {
        setValues((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }));
    };
    const handleClickButton = () => {
        axios.post("http://localhost:3001/registro", {
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
        }).then((response) => {
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
                        onChange={handleChangeValues} />
                </div>
                <p class="textoo">Endereço</p>

                <div class="enderecao">
                    <div class="endereco">
                        
                        <input type="text"
                            placeholder="Rua"
                            required
                            name="Rua"
                            class="rua"
                            onChange={handleChangeValues} />


                    </div>
                   
                    <div class="numerin">
                        <p></p>
                        <input type="text"
                            placeholder="Numero"
                            required
                            name="Numero"
                            onChange={handleChangeValues} />
                    </div>
                    <div class="bairro">
                        <p></p>
                        <input type="text"
                            placeholder="Bairro"
                            name="Bairro"
                            required
                            onChange={handleChangeValues} />
                    </div>
                    <div class="cidade">
                        <p></p>
                        <input type="text"
                            placeholder="Cidade"
                            name="Cidade"
                            required
                            onChange={handleChangeValues} />
                    </div>
                    <div class="estado">
                        <p></p>
                        <input type="text"
                            placeholder="Estado"
                            required
                            name="Estado"
                            onChange={handleChangeValues} />
                    </div>
                    <div class="cep">
                        <p></p>
                        <input type="text"
                            placeholder="CEP"
                            name="CEP"
                            required
                            onChange={handleChangeValues} />
                    </div>

                </div>

                <div class="descricao">
                    <p>Descrição</p>
                    <textarea type="text"
                        placeholder="Descrição"
                        name="Descricao"
                        required
                        onChange={handleChangeValues} />
                </div>
                <div class="name">
                    <p>Email</p>
                    <input type="text"
                        placeholder="Email"
                        name="Email"
                        required
                        onChange={handleChangeValues} />
                </div>
                <div class="name">
                    <p>Senha</p>
                    <input
                        type="text"
                        placeholder="Senha"
                        name="Senha"
                        required
                        onChange={handleChangeValues} />
                </div>
                  
                <div class="name img">
                    <p>Imagem</p>
                    <input
                        type="file"
                        class="Img"
                        placeholder="arquivo"
                        name="Img"
                        
                        
                        required
                        onChange={handleChangeValues} />
                        <label for="file">Choose a file</label>
                </div>


                <button onClick={handleClickButton} id="envie">ENVIAR</button>



            </div>

        </div>

    )
}

export default Registro;