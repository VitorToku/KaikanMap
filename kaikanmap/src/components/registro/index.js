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


        <div className="contan">
            <hr id="hrzaoo" />
            <h1>REGISTRO</h1>

            <div className="components">
                <div className="name">
                    <p>Nome do Local</p>
                    <input
                        type="text"
                        placeholder="Local"
                        name="NomeLocal"
                        required
                        onChange={handleChangeValues} />
                </div>
                <p className="textoo">Endereço</p>

                <div className="enderecao">
                    <div className="endereco">
                        
                        <input type="text"
                            placeholder="Rua"
                            required
                            name="Rua"
                            className="rua"
                            onChange={handleChangeValues} />


                    </div>
                   
                    <div className="numerin">
                        <p></p>
                        <input type="text"
                            placeholder="Numero"
                            required
                            name="Numero"
                            onChange={handleChangeValues} />
                    </div>
                    <div className="bairro">
                        <p></p>
                        <input type="text"
                            placeholder="Bairro"
                            name="Bairro"
                            required
                            onChange={handleChangeValues} />
                    </div>
                    <div className="cidade">
                        <p></p>
                        <input type="text"
                            placeholder="Cidade"
                            name="Cidade"
                            required
                            onChange={handleChangeValues} />
                    </div>
                    <div className="estado">
                        <p></p>
                        <input type="text"
                            placeholder="Estado"
                            required
                            name="Estado"
                            onChange={handleChangeValues} />
                    </div>
                    <div className="cep">
                        <p></p>
                        <input type="text"
                            placeholder="CEP"
                            name="CEP"
                            required
                            onChange={handleChangeValues} />
                    </div>

                </div>

                <div className="descricao">
                    <p>Descrição</p>
                    <textarea type="text"
                        placeholder="Descrição"
                        name="Descricao"
                        required
                        onChange={handleChangeValues} />
                </div>
                <div className="name">
                    <p>Email</p>
                    <input type="text"
                        placeholder="Email"
                        name="Email"
                        required
                        onChange={handleChangeValues} />
                </div>
                <div className="name">
                    <p>Senha</p>
                    <input
                        type="text"
                        placeholder="Senha"
                        name="Senha"
                        required
                        onChange={handleChangeValues} />
                </div>
                
                <div className="name">
                    <p>Imagem</p>
                    <input
                        type="file"
                        placeholder="Imagem"
                        name="Img"
                        required
                        class="typefile"
                        onChange={handleChangeValues} />
                </div>


                <button onClick={handleClickButton} class="envie">ENVIAR</button>



            </div>

        </div>

    )
}

export default Registro;