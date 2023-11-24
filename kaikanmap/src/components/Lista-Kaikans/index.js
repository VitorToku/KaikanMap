import styled from "styled-components";
import React, {useState, useEffect} from 'react';
import Axios from "axios";
import { Link } from "react-router-dom";
import './style.css'

const Lista = styled.div`
    display: flex;
    gap: 24px;
    padding: 0;
    flex-wrap: wrap;
    padding: 16px 32px;
    margin: 0 auto;    
`
const Card = styled.div`
    width: 24rem;
    height: 36rem;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    position: relative;
    color: rgb(240, 240, 240);
    box-shadow: 0 10px 30px 5px rgba(0, 0, 0, 0.2);
`
const Tudo = styled.div`
    display: grid;
    justify-content: center;
`
const Texto = styled.div`
    padding: 16px;
    width: 100%;
`
const Titulo = styled.h2`
    position: absolute;
    inset: auto auto 30px 30px;
    margin: 0;
    transition: inset .3s .3s ease-out;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: normal;
    text-transform: uppercase;
    &:hover{
        inset: auto auto 220px 30px;
        transition: inset .3s ease-out;
    }
`
const Desc = styled.p`
    position: absolute;
        opacity: 0;
        max-width: 80%;
        transition: opacity .3s ease-out;
        inset: auto auto 80px 30px;
    &:hover{
        opacity: 1;
        transition: opacity .5s .1s ease-in;
    }
`
const Desclink = styled.a`
    position: absolute;
    opacity: 0;
    max-width: 80%;
    transition: opacity .3s ease-out;
    inset: auto auto 40px 30px;
    color: inherit;
    text-decoration: none;
    &:hover{
        opacity: 1;
        transition: opacity .5s .1s ease-in;
    }
`
const Externo = styled.div`
    background: rgb(0,55,133);
    background: linear-gradient(180deg, rgba(0,55,133,1) 17%, rgba(0,212,255,1) 100%);
    max-width: 1000px;
    max-height: 600px;
    margin: 25px auto;
    padding: 20px;    
    border: solid black 5px;
`
const ImagemCard = styled.img`
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.9;
    transition: opacity .2s ease-out;
    &:hover{
        transition: opacity .3s ease-in;
        opacity: 1;
    }
`
const Interno = styled.div`
    min-height: 50px;
    background-color: #DCE6EA;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 8px;

`
function ListaDeKaikans(){
    const [listaKaikans, setListaKaikans] = useState();

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
        console.log(listaKaikans)
    }, [] );    

    
    
    return(        
        <>
            <h1 className="Titulo">Lista de Kaikans</h1>   
            <Tudo>
                  
                <Lista>                        
                    {listaKaikans?.map((Item) =>              
                        (   
                            <Link to={`/NomeDoKaikan/${Item.id}`}>
                                <div class = "card">
                                    <img src={Item.imagem} className='imgCard' alt=""/>
                                    <div class="card-content">
                                    <h2 className="CardTitulo">
                                        {Item.NomeKaikan}
                                    </h2>
                                    <p className="DescCardLocal">
                                        {Item.Cidade}, {Item.Estado}
                                    </p>
                                    <p className="DescCard">
                                        {Item.DescricaoCompleta}
                                    </p>
                                    
                                    <a href="#" className="CardLink">
                                        Saiba Mais...                    
                                    </a>
                                    </div>
                                </div>                            
                            </Link>)
                    )}
                </Lista>  
            </Tudo>
            
        </>
    )
}

export default ListaDeKaikans;